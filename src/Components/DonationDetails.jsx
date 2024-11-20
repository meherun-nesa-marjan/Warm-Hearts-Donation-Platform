import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const DonationDetails = () => {
  const location = useLocation();
  const { CampaignData } = location.state || {};

  // State to manage the quantity
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
  };

  if (!CampaignData) {
    return (
      <div>
        <p>No campaign details available. Please go back and select a campaign.</p>
      </div>
    );
  }

  return (
    <div className="bg-base-200">
      <div className="lg:w-10/12 mx-auto">
        <div className="hero py-5 bg-base-200">
          <div className="hero-content text-center">
            <div className="">
              <h1 className="text-2xl font-semibold">Winter Cloth Donation: Spreading Warmth This Season</h1>
              <p>
                Join us in spreading warmth this winter. Your small act of kindness can bring
                immense relief to someone braving the cold. Together, let's ensure that no one
                is left out in the cold this season!
              </p>

            </div>
          </div>
        </div>


        <div className="card p-10 bg-white shadow-xl">
          <div className="card-body">
            <h1 className="font-bold">{CampaignData.title}</h1>
            <p>{CampaignData.description}</p>
            <p>Location: {CampaignData.division}</p>
            <p>Contact Info: {CampaignData.contactInfo}</p>
            <p>Status: {CampaignData.status}</p>
          </div>
          <div className="">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity of Items (e.g., 2 jackets, 3 blankets)</span>
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
                  <span className="label-text">Item Type (e.g., blanket, jacket, sweater)</span>
                </label>
                <select name="itemType" className="select select-bordered">
                  <option value="" disabled>Select an item type</option>
                  <option value="blanket">Blanket</option>
                  <option value="jacket">Jacket</option>
                  <option value="sweater">Sweater</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pickup Location {CampaignData.division}</span>
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
                  <span className="label-text">Additional Notes </span>
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
    </div>
  );
};

export default DonationDetails;
