import React from 'react';

const Ourimpact = () => {
    return (
        <div className='lg:w-10/12 my-16 w-full mx-auto'>
            <section className="bg-[#137257] text-white py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="text-2xl font-semibold">500+</h3>
                            <p className="">Campaigns Completed</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">10,000+</h3>
                            <p className="">Donors Contributed</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">50,000+</h3>
                            <p className="">Lives Impacted</p>
                        </div>
                    </div>
                    <p className="mt-6 text-lg">Join us in making a difference today!</p>
                </div>
            </section>

        </div>
    );
};

export default Ourimpact;