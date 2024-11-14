import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [profilePreviewImage, setProfilePreviewImage] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userBio, setUserBio] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("userBio", userBio);
    formData.append("userEmail", userEmail);
    formData.append("userMobile", userMobile);
    formData.append("userName", userName);
    formData.append("userPassword", userPassword);
    formData.append("profileImage", profileImage);

    try {
      const result = await axios.post(
        "http://localhost:6969/auth/signup",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      console.log("Data: ", result);
      alert("User Entry Saved in Database. You may login now.");
    } catch (error) {
      console.log("Failed to Register User: ", error);
    }
  };

  return (
    <div className="flex w-full h-heightWithoutNavbar items-center justify-center bg-[#D8D2C2] p-4">
      <form
        className="flex flex-col w-full max-w-[700px] bg-white p-4 max-h-full justify-around rounded-xl shadow-xl h-100vh"
        onSubmit={registerUser}
      >
        <h1 className="mb-2 w-full text-center text-xl font-black">Register</h1>

        <div className="flex w-full justify-between gap-2">
          <div className="flex w-full max-w-[300px] flex-col items-start justify-center">
            <label className="font-bold" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full rounded-lg border p-2 focus:border-blue-500  focus:outline-none"
              placeholder="John"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex w-full max-w-[300px] flex-col items-start justify-center">
            <label className="font-bold" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full rounded-lg border p-2 focus:border-blue-500  focus:outline-none"
              placeholder="Doe"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex w-full justify-between gap-2">
          <div className="flex w-full max-w-[300px] flex-col items-start justify-center">
            <label className="font-bold" htmlFor="userEmail">
              Email
            </label>
            <input
              type="email"
              id="userEmail"
              className="w-full rounded-lg border p-2 focus:border-blue-500  focus:outline-none"
              placeholder="your.email@example.com"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          <div className="flex w-full max-w-[300px] flex-col items-start justify-center">
            <label className="font-bold" htmlFor="userMobile">
              Mobile Number
            </label>
            <input
              type="tel"
              id="userMobile"
              className="w-full rounded-lg border p-2 focus:border-blue-500  focus:outline-none"
              placeholder="0000000000"
              onChange={(e) => setUserMobile(e.target.value)}
              maxLength={10}
            />
          </div>
        </div>

        <div className="flex w-full justify-between gap-2">
          <div className="flex w-full max-w-[300px] flex-col">
            <label className="font-bold" htmlFor="userName">
              Username
            </label>
            <input
              type="text"
              id="userName"
              className="w-full rounded-lg border p-2 focus:border-blue-500  focus:outline-none"
              placeholder="johndoe123"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="flex w-full max-w-[300px] flex-col">
            <label className="font-bold" htmlFor="userPassword">
              Password
            </label>
            <input
              type="password"
              id="userPassword"
              className="w-full rounded-lg border p-2 focus:border-blue-500  focus:outline-none"
              placeholder="*********"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="flex w-full flex-col justify-between">
          <label className="font-bold" htmlFor="userBio">
            Bio
          </label>
          <textarea
            id="userBio"
            rows="3"
            className="h-20 w-full rounded-lg border p-2  focus:outline-none"
            placeholder="Tell us about yourself"
            onChange={(e) => setUserBio(e.target.value)}
          ></textarea>
        </div>

        <div className="flex w-full items-center justify-around gap-2">
          {/* <div className="mb-2 h-[100px] w-[100px] overflow-hidden rounded-full border border-dashed border-gray-300">
            {profilePreviewImage === "" ? (
              <p className="text-center text-sm text-gray-500">Profile</p>
            ) : (
              <img src={profilePreviewImage} alt="Preview" />
            )}
          </div> */}
          <div className="mb-2 flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full border border-dashed border-gray-300">
            {profilePreviewImage === "" ? (
              <p className="text-center text-sm text-gray-500">Profile</p>
            ) : (
              <img
                src={profilePreviewImage}
                alt="Preview"
                className="h-full w-full object-cover" // Ensure the image covers the div properly
              />
            )}
          </div>

          <label
            htmlFor="dropzone-file"
            className="flex h-22 w-80 cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 items-center justify-center"
          >
            <div className="flex flex-col items-center justify-center pb-4 pt-4">
              <svg
                className="mb-2 h-6 w-6 text-gray-500 ext-center"
                aria-hidden="true"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="text-xs text-gray-500 text-center mb-2">Upload Image</p>
              <input
                type="file"
                id="dropzone-file"
                className="hidden"
                onChange={(e) => {
                  setProfilePreviewImage(
                    URL.createObjectURL(e.target.files[0]),
                  );
                  setProfileImage(e.target.files[0]);
                }}
              />
            </div>
          </label>
        </div>

        <button className="mt-4 w-full rounded-lg bg-[#4A4947] px-4 py-2 hover:bg-[#B17457] text-white">
          Register
        </button>

        <div className="mt-2 w-full text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="font-bold hover:underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
