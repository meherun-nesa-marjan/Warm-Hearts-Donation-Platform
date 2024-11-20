import React from 'react';

const About = () => {
    return (
        <div className='py-20 bg-[#ECF5F3]'>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="">
                        <h1  className="font-bold text-3xl my-4">About Us</h1>
                        <p>
                        WarmHearts Donation organizes a Winter Cloth Collection and Distribution Program every year to stand with helpless and impoverished people against the severity of cold in winter. Donation collection, warm cloth collection and distribution, and the WarmHearts charity hoodie are the main features of this program. The main reason behind this program is to spread warmth and put a smile on the faces of needy people.
                        </p>
                        <div className="lg:flex justify-between my-6">
                           
                        <div className="border mx-5 p-5 bg-[#137257] text-white rounded-xl">
                                <h3 className='font-bold mb-5 text-xl'>Our Mission</h3>
                               <p>WarmHearts was founded with a view to helping the destitute people living around us with the basic necessities of human life. WarmHearts helps them as a relative helps us in our time of emergency.</p>
                            </div>
                            <div className="border mx-5 p-5 bg-[#137257] text-white rounded-xl">
                                <h3 className='mb-5 font-bold text-xl'>Sponsor Winter Cloth</h3>
                               <p>You can now sponsor clothes & other financial needs.You can provide winter clothes for cold-stricken poor families living in the remote corners of the country.</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>




        </div>
    );
};

export default About;