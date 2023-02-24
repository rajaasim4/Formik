import React, { useState } from "react";

const PreviewImage = ({ file }) => {
  const [preview, setPreview] = useState(null);
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.onerror = () => {
      console.log("cannot read");
    };
  }
  return (
    <>
      <div className="form-input">
        <img src={preview} alt="" width="200px" height="200px" />
      </div>
    </>
  );
};

export default PreviewImage;
