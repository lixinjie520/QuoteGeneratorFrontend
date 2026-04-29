import React, { useState } from "react";

const AddQuotePage = () => {

  const [formData, setFormData] = useState(
    {
      text: "",
      author: "",
      select:""
      
    }
  )

  const handleSubmit = () => {
    
  }




  return (
    <div className="relative border border-amber-100 bg-amber-50 py-14 px-4 mt-14  rounded-lg max-w-lg mx-auto">
      <div className="absolute top-2 right-2 rounded-full p-2  w-8 h-8 flex justify-center items-center text-xl text-gray-500 cursor-pointer bg-gray-300 hover:bg-gray-400 transition duration-200">
        ✕
      </div>
      <form method="POST" onSubmit={handleSubmit}>
        <h1 className="text-center font-semibold mb-6 text-2xl bg-amber-200 px-2 py-1">
          Add New Quote
        </h1>
        <div className="max-w-md py-10 px-6 mx-auto rounded-lg bg-gray-100">
          {/* content */}
          <div>
            <label htmlFor="content" className="text-2xl block">
              Content:
            </label>
            <textarea
              type="text"
              name="content"
              value=""
              className="border-gray-500 border px-2 py-1 rounded w-full mt-2"
            />
          </div>
          {/* author */}
          <div className="mt-4">
            <label htmlFor="content" className="text-2xl block">
              Author:
            </label>
            <input
              type="text"
              name="author"
              value=""
              className="border-gray-500 border px-2 py-1 rounded w-full mt-2"
            />
          </div>

          <div className="flex gap-3 justify-between mt-7 mb-5">
            {/* category */}
            <div>
              <select
                name="select"
                id="select"
                className="border-gray-500 border px-2 py-1 rounded text-center"
              >
                <option value="">-- Choose a Category --</option>
                <option value="motivation">Motivation</option>
                <option value="growth">Growth</option>
                <option value="wisdom">Wisdom</option>
                <option value="learning">Learning</option>
                <option value="action">Action</option>
              </select>
            </div>
            {/* buttons */}
            <div className="flex gap-4">
              <button className="w-auto px-2 rounded cursor-pointer text-md bg-red-500 hover:bg-red-600 transition duration-200 text-red-100">
                Cancel
              </button>
              <button className="w-auto px-2 rounded cursor-pointer text-md bg-green-500   hover:bg-green-600 transition duration-200 text-green-100">
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddQuotePage;
