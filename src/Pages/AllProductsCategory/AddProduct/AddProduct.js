import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data: brandName, isLoading } = useQuery({
        queryKey: ['brand'],
        queryFn: async () => {
            // homeCategories
            const res = await fetch('http://localhost:5000/brandNames');
            const data = await res.json();
            return data;
        }
    });

    const handleAddDoctor = data => {
        console.log(data);

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add NEW Product</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text-alt">Seller Name</span></label>
                    <input type="text"
                        {...register("Seller name", { required: "Name is requred!" })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text-alt">Re-Sell Price</span></label>
                    <input type="text"
                        {...register("reSellPrice", { required: "Re-Sell Pric is requred!" })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text-alt">Orginal Price</span></label>
                    <input type="text"
                        {...register("orginalPrice", { required: "Re-Sell Pric is requred!" })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text-alt">Email</span></label>
                    <input type="email" defaultValue={user?.email}
                        {...register("email", { required: "Email address is required!" })}
                        className="input input-bordered w-full max-w-xs" readOnly />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Brand Name</span></label>
                    <select
                        {...register('brand')}
                        className="select input-bordered w-full max-w-xs">
                        {
                            brandName.map(brand => <option
                                key={brand._id}
                                value={brand.brandName}
                            >{brand.brandName}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text-alt">Photo</span></label>
                    <input type="file"
                        {...register("image", { required: "Photo is requred!" })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;

