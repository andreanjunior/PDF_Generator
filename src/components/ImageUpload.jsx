import React from 'react';

const ImageUpload = ({ setImage }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  return (
    <div className="ImageUpload">
      {' '}
      <label className="configLabel">
        Upload image:
        <input
          type="file"
          accept="image/*"
          className="fileInput"
          onChange={handleImageUpload}
        />
      </label>
    </div>
  );
};

export default ImageUpload;
