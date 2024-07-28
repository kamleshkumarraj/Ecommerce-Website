import { useState } from 'react'

function CustomerDetails() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        coupon: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
      };
  return (
    <div className=" p-6 mx-auto bg-white rounded-lg shadow-md w-[100%]">
      <h2 className="mb-[3rem] text-[2.2rem] text-center font-semibold">Delivery Details</h2>
      <form onSubmit={handleSubmit} className='w-[100%] h-[100%]'>
        <div className="mb-[3rem]">
          <label className="block mb-1 text-[1.6rem] font-medium text-gray-700" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-[3rem]">
          <label className="block mb-1 text-[1.6rem] font-medium text-gray-700" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-[3rem]">
          <label className="block mb-1 text-[1.6rem] font-medium text-gray-700" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="flex flex-wrap mb-[3rem] -mx-2">
          <div className="w-full px-2 mb-[3rem] md:w-1/2 md:mb-0">
            <label className="block mb-1 text-[1.6rem] font-medium text-gray-700" htmlFor="city">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="w-full px-2 mb-[3rem] md:w-1/4 md:mb-0">
            <label className="block mb-1 text-[1.6rem] font-medium text-gray-700" htmlFor="state">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="w-full px-2 mb-[3rem] md:w-1/4 md:mb-0">
            <label className="block mb-1 text-[1.6rem] font-medium text-gray-700" htmlFor="zip">
              ZIP Code
            </label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <div className="mb-[3rem]">
          <label className="block mb-1 text-[1.6rem] font-medium text-gray-700" htmlFor="coupon">
            Coupon Code
          </label>
          <input
            type="text"
            name="coupon"
            value={formData.coupon}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default CustomerDetails
