import { BiLoaderCircle } from "react-icons/bi";

interface UploadButtonsProps {
  isUploading: boolean;
  discard: () => void;
  createNewPost: () => void;
}

export default function UploadButtons({
  isUploading,
  discard,
  createNewPost,
}: UploadButtonsProps) {
  return (
    <div className="flex gap-3">
      <button
        disabled={isUploading}
        onClick={discard}
        className="px-10 py-2.5 mt-8 border text-[16px] hover:bg-gray-100 rounded-sm"
      >
        Discard
      </button>
      <button
        disabled={isUploading}
        onClick={createNewPost}
        className="px-10 py-2.5 mt-8 border text-[16px] text-white bg-[#F02C56] rounded-sm"
      >
        {isUploading ? (
          <BiLoaderCircle className="animate-spin" color="#ffffff" size={25} />
        ) : (
          "Post"
        )}
      </button>
    </div>
  );
}
