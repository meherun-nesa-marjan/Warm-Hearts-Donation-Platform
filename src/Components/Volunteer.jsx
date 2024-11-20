import React from 'react';

const Volunteer = () => {
    return (
        <div className='bg-gray-100'>
            <section className="py-12  lg:w-10/12 mx-auto">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Volunteer Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="p-4 border rounded-lg">
                            <img src="../images/5.jpg" alt="Volunteer 1" className="w-full rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold">John Doe</h3>
                            <p className="text-gray-600">"Helping others changed my perspective on life."</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <img src="../images/2.png" alt="Volunteer 2" className="w-full rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold">Jane Smith</h3>
                            <p className="text-gray-600">"Being a part of this community is rewarding."</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <img src="../images/3.png" alt="Volunteer 2" className="w-full rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold">Jane Smith</h3>
                            <p className="text-gray-600">"Being a part of this community is rewarding."</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <img src="../images/4.png" alt="Volunteer 5" className="w-full rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold">Sophia Wilson</h3>
                            <p className="text-gray-600">"Every small act of kindness can make a big difference."</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <img src="../images/2.png" alt="Volunteer 6" className="w-full rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold">Ethan Martinez</h3>
                            <p className="text-gray-600">"Being part of this community is deeply fulfilling."</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Volunteer;