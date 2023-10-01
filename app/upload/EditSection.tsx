// EditSection.tsx
import React from 'react';
import { PiKnifeLight } from 'react-icons/pi';

function EditSection() {
  return (
    <div className="edit-section">
      <div>
        <PiKnifeLight className="mr-4" size="20" />
      </div>
      <div>
        <div className="text-semibold text-[15px] mb-1.5">
          Divide videos and edit
        </div>
        <div className="text-semibold text-[13px] text-gray-400">
          You can quickly divide videos into multiple parts, remove redundant parts, and turn landscape videos into portrait videos
        </div>
      </div>
      <div className="edit-button-container">
        <button className="edit-button">Edit</button>
      </div>
    </div>
  );
}

export default EditSection;
