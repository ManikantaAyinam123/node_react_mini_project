import React from 'react';

const ImageList = (props) => {
  const { record } = props;
  const imagePath = record?.params?.productImage;

  if (!imagePath) return <span>No image</span>;

  // Handle relative paths
  const imageUrl = imagePath.startsWith('http')
    ? imagePath
    : `${window.location.origin}${imagePath.startsWith('/') ? imagePath : `/uploads/${imagePath}`}`;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={imageUrl}
        alt="Product"
        style={{
          width: '80px',
          height: '80px',
          objectFit: 'cover',
          borderRadius: '8px',
          boxShadow: '0 0 4px rgba(0,0,0,0.2)',
        }}
      />
    </div>
  );
};

export default ImageList;
