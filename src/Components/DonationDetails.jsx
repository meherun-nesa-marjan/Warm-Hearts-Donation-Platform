import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const DonationDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const campaign = data.find(campaign => campaign.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      quantity,
      itemType: formData.get("itemType"),
      pickupLocation: formData.get("pickupLocation"),
      notes: formData.get("notes"),
    };

    if (!data.itemType) {
      toast.error("Please select an item type.");
      return;
    }

    if (!data.pickupLocation) {
      toast.error("Please enter a valid pickup location.");
      return;
    }

    toast.success("Thank you! We will reach your destination soon.");
    console.log("Form Data Submitted:", data);
    e.target.reset();
    setQuantity(1);
  };
  if (!campaign) {
    return (
      <div className="text-center">
        <p>Campaign not found. Please go back and select a valid campaign.</p>
      </div>
    );
  }

  return (
    <div className="bg-base-200 pb-10">
      <div className="lg:w-10/12 mx-auto">
        <div className="hero py-10">
          <div className="hero-content text-center">
            <div className="">
              <h1 className="text-2xl font-semibold">{campaign.title}</h1>
              <p>{campaign.description}</p>
              <p>Location: {campaign.division}</p>
              <p>Contact Info: {campaign.contactInfo}</p>
              <p>Status: {campaign.status}</p>
            </div>
          </div>
        </div>
        <div className="card p-10 bg-white shadow-xl">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="btn btn-outline"
                  disabled={quantity === 1}
                >
                  -
                </button>
                <input
                  type="number"
                  name="quantity"
                  value={quantity}
                  readOnly
                  className="input input-bordered text-center w-20"
                />
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="btn btn-outline"
                >
                  +
                </button>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Item Type</span>
              </label>
              <select name="itemType" className="select select-bordered">
                <option value="">Select an item type</option>
                <option value="blanket">Blanket</option>
                <option value="jacket">Jacket</option>
                <option value="sweater">Sweater</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Pickup Location</span>
              </label>
              <input
                type="text"
                name="pickupLocation"
                placeholder="Enter pickup location"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Additional Notes</span>
              </label>
              <textarea
                name="notes"
                className="textarea textarea-bordered"
                placeholder="Enter additional notes"
              ></textarea>
            </div>

            <div className="form-control">
              <button type="submit" className="btn bg-[#137257] text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
