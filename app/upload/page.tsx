"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { UploadError } from "../types";
import UploadLayout from "../layouts/UploadLayout";
import EditSection from "./EditSection";
import CaptionSection from "./CaptionSection";
import UploadButtons from "./UploadButtons";
import FileUpload from "./FileUpload";
import PreviewContainer from "./PreviewContainer";

export default function Upload() {
  const router = useRouter();
  let [fileDisplay, setFileDisplay] = useState<string>("");
  let [caption, setCaption] = useState<string>("");
  let [file, setFile] = useState<File | null>(null);
  let [error, setError] = useState<UploadError | null>(null);
  let [isUploading, setIsUploading] = useState<boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      //convert into a readable url
      const fileUrl = URL.createObjectURL(file);
      setFileDisplay(fileUrl);
      setFile(file);
    }
  };

  const clearVideo = () => {
    setFileDisplay("");
    setFile(null);
  };

  const discard = () => {
    setFileDisplay("");
    setFile(null);
    setCaption("");
  };

  const createNewPost = () => {
    console.log("Create new post");
  };

  return (
    <>
      <UploadLayout>
        <div className="upload-container">
          <div>
            <h1 className="header-text">Upload video</h1>
            <h2 className="sub-text">Post a video to your account</h2>
          </div>

          <div className="mt-8 md:flex gap-6">
          {!fileDisplay ? (
              <FileUpload onChange={onChange} />
            ) : (
              <PreviewContainer
                fileDisplay={fileDisplay}
                isUploading={isUploading}
                clearVideo={clearVideo}
              />
            )}

            <div className="post-section">
              <EditSection />
              <CaptionSection caption={caption} setCaption={setCaption} />

              <UploadButtons
                isUploading={isUploading}
                discard={discard}
                createNewPost={createNewPost}
              />

              {error ? (
                <div className="text-red-600 mt-4">{error.message}</div>
              ) : null}
            </div>
          </div>
        </div>
      </UploadLayout>
    </>
  );
}
