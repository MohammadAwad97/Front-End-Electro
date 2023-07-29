import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function LoginVendor() {
  const loginNav = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handelInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handelSubmit = async () => {
    try {
      const res = await axios.post(
        `http://localhost:7000/api/v1/vendors/login`,
        user
      );
      loginNav('/product');
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-full bg-gradient-to-tl from-blue-600 to-black w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/2 md:w-full w-full p-10 mt-16">
          <p
            tabIndex={0}
            aria-label="Login to your account"
            className="text-2xl font-extrabold leading-6 text-gray-800 mb-4"
          >
            Login to your account
          </p>

          <div>
            <lable className="text-sm font-medium leading-none text-black">
              Email
            </lable>
            <input
              onChange={handelInput}
              name="email"
              placeholder="Email "
              aria-label="enter email adress"
              type="email"
              className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-black py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6  w-full">
            <lable className="text-sm font-medium leading-none text-black">
              Password
            </lable>
            <div className="relative flex items-center justify-center">
              <input
                name="password"
                onChange={handelInput}
                placeholder="Password"
                aria-label="enter Password"
                type="password"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-black py-3 w-full pl-3 mt-2"
              />
              <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Eye Icon SVG */}
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              onClick={handelSubmit}
              aria-label="create my account"
              className="hover:bg-gradient-to-tl justify-center rounded-md bg-gradient-to-tl from-blue-600 to-black text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-sm font-semibold leading-none focus:outline-none bg-gradient-to-tl border rounded py-4 w-full"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
