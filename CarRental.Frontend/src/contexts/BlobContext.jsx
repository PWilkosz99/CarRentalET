import React, { useState, useContext, useEffect } from 'react'

const BlobContext = React.createContext()

export function useBlob() {
    return useContext(BlobContext)
}

export function BlobProvider({ children }) {
    const bucket = process.env.REACT_APP_BUCKET_ADDRESS
    function getImage(id) {
        return bucket + id + '.jpg';
    }

    function saveImage() {
        return 1;
    }

    const value = {
        bucket,
        getImage,
        saveImage
    }

    return (
        <BlobContext.Provider value={value}>
            {children}
        </BlobContext.Provider>
    )
}
