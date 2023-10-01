// PreviewContainer.tsx
import React from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";

interface PreviewContainerProps {
  fileDisplay: string;
  isUploading: boolean;
  clearVideo: () => void;
}

export default function PreviewContainer({
  fileDisplay,
  isUploading,
  clearVideo,
}: PreviewContainerProps) {
  return (
    <div className="preview-container">
      {isUploading ? (
        <div className="uploading-overlay">
          <div className="uploading-info">
            <BiLoaderCircle className="uploading-icon" size={30} />
            <div className="uploading-text">Uploading...</div>
          </div>
        </div>
      ) : null}

      <img className="mobile-case" src="/images/mobile-case.png" />
      <img
        className="tiktok-logo"
        width="90"
        src="/images/tiktok-logo-white.png"
      />
      <video autoPlay loop muted className="video-preview" src={fileDisplay} />
      <div className="file-info-container">
        <div className="file-info">
          <AiOutlineCheckCircle size="16" className="min-w-[16px]" />
          <p className="filename">{fileDisplay}</p>
        </div>
        <button onClick={clearVideo} className="change-button">
          Change
        </button>
      </div>
    </div>
  );
}
