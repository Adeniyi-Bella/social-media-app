import React from 'react';

interface CaptionSectionProps {
  caption: string;
  setCaption: React.Dispatch<React.SetStateAction<string>>;
}

export default function CaptionSection({ 
    caption, setCaption 
}: CaptionSectionProps) {

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <div className="mb-1 text-[15px]">Caption</div>
        <div className="text-gray-400 text-[12px]">
          {caption.length}/150
        </div>
      </div>
      <input
        maxLength={150}
        type="text"
        className="caption-box"
        value={caption}
        onChange={(event) => setCaption(event.target.value)}
      />
    </div>
  );
};