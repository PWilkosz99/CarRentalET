import React, { useContext } from 'react';

const BlobContext = React.createContext();

export function useBlob() {
  return useContext(BlobContext);
}

export function BlobProvider({ children }) {
  const bucketRd = process.env.REACT_APP_BUCKET_ADDRESS_READ;
  const bucketWR = process.env.REACT_APP_BUCKET_ADDRESS_WRITE;

  function getImage(id) {
    return `${bucketRd + id}.jpg`;
  }

  async function saveImage(id, image) {
    const URI = `${bucketWR + id}.jpg`;
    const res = await fetch(URI, {
      method: 'PUT',
      body: image,
    });
    return res.ok;
  }

  const value = {
    getImage,
    saveImage,
  };

  return (
    <BlobContext.Provider value={value}>
      {children}
    </BlobContext.Provider>
  );
}
