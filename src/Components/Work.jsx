import React from 'react';

const Work = () => {
    return (
        <div className='bg-white lg:w-10/12 py-10 mx-auto'>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="font-bold text-3xl my-4">How It Works</h1>
                        <p>
                        WarmHearts organizes a Winter Cloth Collection and Distribution Program every year to stand with helpless and impoverished people against the severity of cold in winter. Donation collection, warm cloth collection and distribution, and the W.Clothing Donation charity hoodie are the main features of this program. The main reason behind this program is to spread warmth and put a smile on the faces of needy people.
                        </p>
                    </div>
                </div>
            </div>

            <div className="">
                      <div className="lg:flex my-10 ">
                            <div className="lg:w-1/2 w-full lg:order-first order-last p-5">
                            <h3 className='text-xl font-bold my-5'>1. Make a Donation</h3>
                            <ul className='list-disc'>
                                <li>Select the campaign you want to support.</li>
                                <li>Choose the items you wish to donate (e.g., sweaters, blankets, gloves, etc.).</li>
                                <li>Fill out the donation form with your contact details.</li>
                                <li>Drop off your donations at a nearby collection point.</li>
                                <li>Receive updates on how your donation makes an impact.</li>
                            </ul>
                            </div>
                            <div className="w-full lg:w-[45%]">
                                <img className='rounded-xl' src="../images/1.jpg" alt="" />
                            </div>

                        </div>
                        <div className="lg:flex my-6 justify-between ">
                        <div className="lg:w-[45%] w-full">
                                <img className='rounded-xl' src="../images/2.jpg" alt="" />
                            </div>
                            <div className="lg:w-1/2 w-full text-left p-5">
                            <h3 className='text-xl font-bold my-5'>2. Collection Points</h3>
                            <ul className='list-disc'>
                            <li>Dhaka: Banani, Gulshan, Dhanmondi</li>
                                <li>Chittagong: GEC Circle, Agrabad, Patenga</li>
                                <li>Sylhet: Ambarkhana, Zindabazar, Uposhohor</li>
                                <li>Rajshahi: Shaheb Bazar, Talaimari, Uposhohor</li>
                                <li>Visit our <a href="#">Collection Points</a> page for more locations.</li>
                            </ul>
                            </div>
                           

                        </div>
                        <div className="lg:flex ">
                      
                            <div className="lg:w-1/2 w-full p-5">
                            <h3 className='text-xl font-bold my-5'>3. Supported Divisions</h3>
                            <ul className='list-disc grid grid-cols-2'>
                                 <li>Dhaka</li>
                                <li>Chittagong</li>
                                <li>Sylhet</li>
                                <li>Rajshahi</li>
                                <li>Barishal</li>
                                <li>Khulna</li>
                                <li>Mymensingh</li>
                                <li>Rangpur</li>
                            </ul>
                            </div>
                            <div className="lg:w-[45%] w-full">
                                <img className='rounded-xl' src="../images/1.jpg" alt="" />
                            </div>
                           

                        </div>
                      </div>




        </div>
    );
};

export default Work;