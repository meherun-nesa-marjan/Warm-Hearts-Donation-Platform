import React from "react";
import { Link } from "react-router-dom";

const HowToHelp = () => {
  return (
    <div className="min-h-screen  bg-gray-100 py-10">
      <div className="container lg:w-10/12  mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">How to Help</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Donate Clothes</h2>
          <p className="text-lg mb-4">
            Help by donating clothes you no longer need. Your contributions go to those in need, bringing warmth and smiles.
          </p>
          <Link to="">
            <button className="btn btn-success">Find Donation Centers</button>
          </Link>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Volunteer</h2>
          <p className="text-lg mb-4">
            Join us as a volunteer to organize campaigns, sort donations, or spread awareness.
          </p>
          <Link to="">
            <button className="btn btn-success">Join as a Volunteer</button>
          </Link>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Start a Campaign</h2>
          <p className="text-lg mb-4">
            Launch your own clothing donation campaign to create impact in your community.
          </p>
          <Link to="">
            <button className="btn btn-success">Start Your Campaign</button>
          </Link>
        </div>

  
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Monetary Donations</h2>
          <p className="text-lg mb-4">
            Support us financially to improve logistics and extend our help to more people.
          </p>
          <Link to="">
            <button className="btn btn-success">Donate Now</button>
          </Link>
        </div>

        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <strong>What items can I donate?</strong> – Gently used clothing items for all ages.
            </li>
            <li className="mb-2">
              <strong>Where are the donation centers located?</strong> – Check our donation center map for locations near you.
            </li>
            <li>
              <strong>Can I contribute if I'm not near a center?</strong> – Yes, you can donate monetarily or volunteer online.
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Help? Contact Us</h2>
          <Link to="">
            <button className="btn btn-outline">Get in Touch</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowToHelp;
