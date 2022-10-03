import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="container mx-auto my-16 md:flex md:flex-row-reverse items-center justify-evenly">
                <div>
                    <img className='w-96 mx-auto' src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/burger-promo.png" alt="" />
                </div>
                <div className='ml-4 mt-6'>
                    <h3 className='text-3xl text-red-600 bestFont'>Best In Town</h3>
                    <div className="text-4xl poppinsFont">
                        <h1>ENJOY OUR CHICKEN</h1>
                        <h1><span className='text-red-600'>BURGER</span> FAST FOOD</h1>
                    </div>
                    <h3 className='text-2xl my-4 poppinsFont'>Bacon-Potatos-Bbq Sauce</h3>
                    <button className="btn bg-red-600 border-red-600 hover:bg-white hover:text-red-600 hover:border-red-600">Order Now</button>
                </div>
            </div>
        </>
    );
};

export default Home;