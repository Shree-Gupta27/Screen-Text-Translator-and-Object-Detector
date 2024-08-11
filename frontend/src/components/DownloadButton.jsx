import React from "react";

const DownloadButton = () => {
  const handleDownload = () => {
    const cdnUrl = import.meta.env.VITE_AWS_S3;
    window.open(cdnUrl, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        className="bg-blue-700 text-white px-4 py-2 rounded cursor-pointer"
        onClick={handleDownload}
      >
        Download File
      </button>
    </div>
  );
};

export default DownloadButton;
