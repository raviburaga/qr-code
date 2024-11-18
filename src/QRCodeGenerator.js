// QRCodeGenerator.js
import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { storage } from "./firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Swal from "sweetalert2";

const QRCodeGenerator = () => {
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [uploadURL, setUploadURL] = useState("");
  const [progress, setProgress] = useState(0);
  const qrRef = useRef();

  // Handle file upload
  const handleFileUpload = async () => {
    if (!file) {
      Swal.fire("Error", "Please select a file to upload.", "error");
      return;
    }

    const fileRef = ref(storage, `uploads/${file.name}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    // Monitor the upload progress
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        Swal.fire("Upload Failed", error.message, "error");
        setProgress(0);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUploadURL(url);
          setContent(url);
          Swal.fire("Success", "File uploaded successfully!", "success");
          setProgress(0);
        });
      }
    );
  };

  // Download QR code as an image
  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qr-code.png";
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-white">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-11/12 max-w-lg">
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
           QR Code Generator
        </h2>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full mb-4 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-400 transition duration-200"
        />

        <button
          onClick={handleFileUpload}
          className="w-full mb-6 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
        >
          Upload File
        </button>

        {/* Progress Bar */}
        {progress > 0 && (
          <div className="w-full bg-gray-200 rounded-full mb-4 h-4">
            <div
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            >
              {Math.round(progress)}%
            </div>
          </div>
        )}

        <input
          type="text"
          placeholder="Or enter URL or text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full mb-6 p-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:border-blue-400 transition duration-200"
        />

        <div
          ref={qrRef}
          className="flex justify-center items-center bg-gray-50 rounded-lg p-6 mb-6 shadow-inner"
        >
          {content && (
            <QRCodeCanvas
              value={content}
              size={256}
              includeMargin={true}
              className="shadow-lg rounded-xl"
            />
          )}
        </div>

        {content && (
          <button
            onClick={downloadQRCode}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            Download QR Code
          </button>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
