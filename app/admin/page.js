"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the BarcodeScannerComponent to avoid SSR issues
const BarcodeScannerComponent = dynamic(() => import("react-qr-barcode-scanner"), { ssr: false });

const AdminPage = () => {
  const [data, setData] = useState("Not Found");
  const [startScan, setStartScan] = useState(false);

  const onUpdate = (err, result) => {
    if (result) {
      setData(result.text);
      setStartScan(false);
    } else {
      setData("Not Found");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">QR Code Scanner</h1>
      
      {startScan ? (
        <div className="w-full max-w-lg aspect-square mb-4 relative">
          <BarcodeScannerComponent
            width="100%"
            height="100%"
            onUpdate={onUpdate}
          />
          <button 
            onClick={() => setStartScan(false)}
            className="absolute top-2 right-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
          >
            Stop
          </button>
        </div>
      ) : (
        <button 
          onClick={() => setStartScan(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors mb-4"
        >
          Start
        </button>
      )}
      
      <div className="mt-4 p-4 rounded shadow w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-2">Scan Result:</h2>
        <p className="break-all">{data}</p>
      </div>
    </div>
  );
};

export default AdminPage;