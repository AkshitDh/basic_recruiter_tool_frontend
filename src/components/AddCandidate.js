import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./Axios";

export default function AddCandidate() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: null,
    email: null,
    phone_number: null,
    score: 0,
    additional_skills: null,
    current_status: "Contacted",
    expected_salary: null,
    experience_with_node: 1,
    experience_with_react: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFormData((prevData) => ({
      ...prevData,
      ["score"]:
        parseInt(prevData.experience_with_node, 10) +
        parseInt(prevData.experience_with_react, 10),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    axios({
      method: "post",
      url: "/candidate_list/add_user/",
      data: formData,
    })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden py-2">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 uppercase">
          Add New Candidate
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full block px-2 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="John cooks"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full block px-2 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="john_cooks@gmail.com"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Phone Number</span>
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="w-full block px-2 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="123"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">
                Experience with Node(in years)
              </span>
              <select
                name="experience_with_node"
                value={formData.experience_with_node}
                onChange={handleChange}
                className="w-full block px-2 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              >
                <option value="1">Less than 1 year</option>
                <option value="2">1-2 years</option>
                <option value="3">Over 2 years</option>
              </select>
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">
                Experience with React(in years)
              </span>
              <select
                name="experience_with_react"
                value={formData.experience_with_react}
                onChange={handleChange}
                className="w-full block px-2 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              >
                <option value="1">Less than 1 year</option>
                <option value="2">1-2 years</option>
                <option value="3">Over 2 years</option>
              </select>
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Additional skills</span>
              <input
                type="text"
                name="additional_skills"
                value={formData.additional_skills}
                onChange={handleChange}
                className="w-full block px-2 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="1"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Current Status</span>
              <select
                name="current_status"
                value={formData.current_status}
                onChange={handleChange}
                className="w-full block px-2 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              >
                <option value="Contacted">Contacted</option>
                <option value="Interview Schduled">Interview Schduled</option>
                <option value="Offer Extended">Offer Extended</option>
                <option value="Hired">Hired</option>
                <option value="Rejected">Rejected</option>
              </select>
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Expected Salary(in ₹)</span>
              <input
                type="integer"
                name="expected_salary"
                value={formData.expected_salary}
                onChange={handleChange}
                className="w-full block px-2 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="1"
              />
            </label>
          </div>
          <div class="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
            >
              Add Candidate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
