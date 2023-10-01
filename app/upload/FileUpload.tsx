// FileUpload.tsx
import React from "react";
import { BiSolidCloudUpload } from "react-icons/bi";

interface FileUploadProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FileUpload({onChange}: FileUploadProps) {

  return (
    <label htmlFor="fileInput" className="label-upload">
      <BiSolidCloudUpload size="40" color="#b3b3b1" />
      <p className="instruction-text">Select video to upload</p>
      <p className="sub-instruction-text">Or drag and drop a file</p>
      <p className="file-type-text">MP4</p>
      <p className="file-duration-text">Up to 30 minutes</p>
      <p className="file-size-text">Less than 2 GB</p>
      <label htmlFor="fileInput" className="select-file-btn">
        Select file
      </label>
      <input
        type="file"
        id="fileInput"
        onChange={onChange}
        hidden
        accept=".mp4"
      />
    </label>
  );
};