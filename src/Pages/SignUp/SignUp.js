import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, googleSignIn, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();

    // email/password signup
    const handleSignUp = data => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully.')

                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.error(error)
            })
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://laptop-shop-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('saveUser', data);
                // navigate(from, { replace: true });
                getUserToken(email);
            })
    }

    // set token step: 02 after server step-01
    const getUserToken = email => {
        fetch(`https://laptop-shop-server.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken);
                    navigate(from, { replace: true });
                }
            });
    }

    // handle with google sign in method
    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully login')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl font-bold text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt">Name</span></label>
                        <input type="name"
                            {...register("name", { required: "Name is requred!" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt">Email</span></label>
                        <input type="email"
                            {...register("email", { required: "Email address is required!" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required!",
                                minLength: { value: 6, message: "Password must be 6 charcter or long!" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <div className="form-control mt-2">
                        <label className="label">
                            <span className="label-text text-sm font-medium">
                                Type of account?
                            </span>
                        </label>
                        <div className='flex items-center'>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="radio-1"
                                    className="radio"
                                    value="buyer"
                                    {...register("role")}
                                    checked
                                />
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Buyer
                                    </span>
                                </label>
                            </div>
                            <div className="flex items-center ml-6">
                                <input
                                    type="radio"
                                    name="radio-1"
                                    className="radio"
                                    value="seller"
                                    {...register("role")}
                                />
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Seller
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <input className='btn btn-active btn-primary w-full mt-4' type="submit" value="Sign Up" />
                    <div>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </div>
                </form>
                <p>Already Have an account? <Link to="/login" className='text-primary font-bold text-sm underline'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'><FcGoogle className='text-2xl mr-2' />CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;