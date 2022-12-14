import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    // console.log(imageHostKey); // check ibbimg key in console
    const navigate = useNavigate();

    // useQuery for data load == useEffect == useLoaderData
    const { data: brandName, isLoading } = useQuery({
        queryKey: ['brandName'],
        queryFn: async () => {
            // homeCategories
            const res = await fetch('http://localhost:5000/brandNames');
            const data = await res.json();
            return data;
        }
    });

    const handleAddProduct = data => {
        console.log(data.image[0]); // FileList er sudu File er jonno
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        productTitle: data.productTitle,
                        sellerName: data.sellerName,
                        reSellPrice: data.reSellPrice,
                        orginalPrice: data.orginalPrice,
                        brandName: data.brandName,
                        email: data.email,
                        location: data.location,
                        yearsOfUses: data.yearsOfUses,
                        productDescription: data.productDescription,
                        // productStatus: data.productStatus,
                        postDate: new Date(),


                        //m-76-5 8:13sec
                        image: imgData.data.url
                    }

                    // add product server api, save the product in MongoDb database
                    fetch('http://localhost:5000/addproduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.brandName}  is successfully added.`)
                            navigate('/dashboard/myproducts');
                        })
                }

            })

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='p-7'>
            <h2 className="text-2xl font-bold text-center">Add New Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className='border-blue-500'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text font-bold text-primary text-md font-bold text-primary text-md">Product Model Name</span></label>
                            <input type="text"
                                {...register("productTitle", { required: "Product Model Name is requred!" })}
                                className="input input-bordered w-full " />
                            {errors.productTitle && <p className='text-red-600'>{errors.productTitle?.message}</p>}
                        </div>

                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text font-bold text-primary text-md">Seller Name</span></label>
                            <input type="text"
                                {...register("sellerName", { required: "Seller name is requred!" })}
                                className="input input-bordered w-full " />
                            {errors.sellerName && <p className='text-red-600'>{errors.sellerName?.message}</p>}
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text font-bold text-primary text-md">Re-Sell Price</span></label>
                            <input type="text"
                                {...register("reSellPrice", { required: "Re-Sell Price is requred!" })}
                                className="input input-bordered w-full " />
                            {errors.reSellPrice && <p className='text-red-600'>{errors.reSellPrice?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text font-bold text-primary text-md">Orginal Price</span></label>
                            <input type="text"
                                {...register("orginalPrice", { required: "Orginal Price is requred!" })}
                                className="input input-bordered w-full " />
                            {errors.orginalPrice && <p className='text-red-600'>{errors.orginalPrice?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text font-bold text-primary text-md">Product Used</span></label>
                            <input type="text"
                                {...register("yearsOfUses", { required: "Product Used date is requred!" })}
                                className="input input-bordered w-full " />
                            {errors.yearsOfUses && <p className='text-red-600'>{errors.yearsOfUses?.message}</p>}
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text font-bold text-primary text-md">Brand Name</span></label>
                            <select
                                {...register('brandName')}
                                className="select input-bordered w-full ">
                                {
                                    brandName.map(brand => <option
                                        key={brand._id}
                                        value={brand.brandName}
                                    >{brand.brandName}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text font-bold text-primary text-md">Email</span></label>
                            <input type="email" defaultValue={user?.email}
                                {...register("email", { required: "Email address is required!" })}
                                className="input input-bordered w-full " readOnly />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text font-bold text-primary text-md">Product Photo</span></label>
                            <input type="file"
                                {...register("image", { required: "Photo is requred!" })}
                                className="input input-bordered w-full " />
                            {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text font-bold text-primary text-md">Location</span></label>
                            <input type="text"
                                {...register("location", { required: "Your location is required!" })}
                                className="input input-bordered w-full " />
                            {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text font-bold text-primary text-md">Phone</span></label>
                            <input type="text"
                                {...register("phone", { required: "Your phone is required!" })}
                                className="input input-bordered w-full " />
                            {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                        </div>
                    </div>

                    <label className='mt-4'>Product Description
                        <textarea
                            {...register("productDescription", { required: "Your phone is required!" })}
                            className="textarea textarea-bordered h-24 w-full" placeholder="Write description...."
                        ></textarea>
                    </label>
                </div>
                <input className='btn btn-primary w-full mt-4' type="submit" value="Add Product" />
            </form >

        </div >
    );
};

export default AddProduct;

