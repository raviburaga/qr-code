// URLShortener.js
import React, { useState } from "react";
import Swal from "sweetalert2";

const URLShortener = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  // Simulate URL Shortening
  const handleShortenUrl = () => {
    if (!url) {
      Swal.fire("Error", "Please enter a valid URL", "error");
      return;
    }
    const shortenedUrl = `https://short.ly/${Math.random().toString(36).substring(2, 8)}`;
    setShortUrl(shortenedUrl);
    Swal.fire("Success", "URL shortened successfully!", "success");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-11/12 max-w-lg">
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          URL Shortener
        </h2>
        <input
          type="text"
          placeholder="Enter your URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full mb-4 p-4 rounded-lg border border-gray-300 shadow-sm focus:border-blue-400"
        />
        <button
          onClick={handleShortenUrl}
          className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105"
        >
          Shorten URL
        </button>
        {shortUrl && (
          <p className="text-center mt-4">
            Shortened URL: <a href={shortUrl} className="text-blue-600">{shortUrl}</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default URLShortener;
