import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import useAxiosSecure from '../../../hooks/useAxiosSecure';



const EnrolledClasses = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    useEffect(() => {
        axiosSecure(`/payment-details/${user.email}`)
            .then(res => setData(res.data));
    }, []);
    return (
        <section className='gap-10 mx-40 my-20'>

            <h3 className='text-3xl font-semibold text-center uppercase mb-10'>My Enrolled Classes</h3>

            {
                data?.map(item =>
                    <div key={item._id} className="flex bg-base-100 shadow-2xl w-full h-[200px] rounded-lg">

                        <figure>
                            <img src={item?.lecture?.image} className="w-64 h-full rounded-s-lg" />
                        </figure>

                        <div className="ms-10 flex-grow my-auto">
                            <h2 className="text-2xl font-bold">{item?.lecture?.name}</h2>
                            <p>Instructor: {item?.lecture?.instructor}</p>
                        </div>

                        <div className='flex items-center mr-4'>
                            <button className='btn bg-slate-300'>View Details</button>
                        </div>
                    </div>

                )
            }
        </section>
    );
};

export default EnrolledClasses;