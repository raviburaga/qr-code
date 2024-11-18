// Home.js
import React from "react";
import { Link } from "react-router-dom";
import link from "./assets/link.gif";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-blue-200 via-blue-100 to-white px-6">
      <div className="w-full max-w-screen-xl mx-auto py-16 space-y-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8 text-center">
          Welcome to UR-QR
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 text-center mb-12">
          We offer two powerful tools: A <strong>URL Shortener</strong> to
          shorten your long URLs into a compact format, and a{" "}
          <strong>QR Code Generator</strong> that can create QR codes for any
          type of content, including media files, images, and documents.
        </p>

        {/* URL Shortener Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center w-full min-h-[60vh] space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="bg-white shadow-xl rounded-3xl p-10 w-full sm:w-11/12 md:w-2/3 lg:w-full transform  transition-all duration-500">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                  URL Shortener
                </h2>
                <p className="text-gray-600 mb-6">
                  Our URL Shortener service helps you easily shorten long URLs,
                  making them easier to share and track.
                </p>
                <Link to="/url-shortener">
                  <button className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-4 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                    Go to URL Shortener
                  </button>
                </Link>
              </div>
              <div className="w-full m-4 lg:w-1/2">
                <img
                  src={link} // Replace with your GIF URL
                  alt="URL Shortener GIF"
                  className="w-full h-72"
                />
              </div>
            </div>
          </div>
        </div>

        {/* QR Code Generator Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center w-full min-h-[60vh] space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="bg-white shadow-xl rounded-3xl p-10 w-full sm:w-11/12 md:w-2/3 lg:w-full transform  transition-all duration-500">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                  QR Code Generator
                </h2>
                <p className="text-gray-600 mb-6">
                  Generate QR codes for any type of content, including URLs,
                  images, and files. Share your information easily with a quick
                  scan.
                </p>
                <Link to="/qr-generator">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-4 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                    Go to QR Code Generator
                  </button>
                </Link>
              </div>
              <div className="w-full m-4 lg:w-1/2">
                <img
                  src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHpvMGwyY3NxZzQwdDhlcTEwb202aXd0MjZ4NHB0cGdwdzJtZG1xOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUA7aS269qm5PX7fa0/giphy.gif" // Replace with your GIF URL
                  alt="QR Code Generator GIF"
                  className="w-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
