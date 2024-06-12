import React, { useEffect, useState } from "react";
import api from "../../utils/api";

export default function ProductImageUpload({
  uploadedImages,
  setUploadedImages,
}) {
  const [mainImage, setMainImage] = useState(null);

  const handleImageUpload = async (event) => {
    const files = event.target.files;
    const allowedFormats = [
      "image/jpeg",
      "image/png",
      "image/svg+xml",
      "image/gif",
    ];
    const maxSize = 50 * 1024 * 1024;

    const validFiles = Array.from(files).filter((file) => {
      const fileType = file.type;
      const fileSize = file.size;

      if (!allowedFormats.includes(fileType)) {
        console.log(`Invalid file format: ${fileType}`);
        return false;
      }

      if (fileSize > maxSize) {
        console.log(`File size exceeds the limit of 50MB: ${fileSize} bytes`);
        return false;
      }

      return true;
    });

    if (validFiles?.length > 0) {
      const formData = new FormData();
      validFiles.forEach((file) => {
        formData.append("images", file);
      });

      try {
        const response = await api.post("/image/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        const uploadedImageUrls = response.data.imageUrls;
        setUploadedImages((prevImages) => [
          ...prevImages,
          ...uploadedImageUrls,
        ]);
      } catch (error) {
        console.error("Error uploading images:", error);
      }
    }
  };

  const handleMainImageSelect = (selectedImageUrl) => {
    const updatedImageUrls = uploadedImages.filter(
      (imageUrl) => imageUrl !== selectedImageUrl
    );
    updatedImageUrls.unshift(selectedImageUrl);
    setUploadedImages(updatedImageUrls);
    setMainImage(selectedImageUrl);
  };

  const handleImageDelete = async (imageUrl) => {
    try {
      await api.delete(
        `/image/upload/${encodeURIComponent(imageUrl.replace("/uploads/", ""))}`
      );
      setUploadedImages((prevImages) =>
        prevImages.filter((url) => url !== imageUrl)
      );
      if (imageUrl === mainImage) {
        setMainImage(null);
      }
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <div className="flex gap-16 items-start">
      <div className="">
        <p>Product Images</p>
        <p className="text-sm text-[#969191] font-normal">
          JPEG, PNG, SVG or GIF <br />
          (Maximum file size 50MB)
        </p>
      </div>
      <div className="flex flex-row-reverse">
        <label
          htmlFor="imageUpload"
          className="text-[#001eb9] underline cursor-pointer"
        >
          Add Images
        </label>
        <input
          name="images"
          id="imageUpload"
          type="file"
          accept="image/jpeg, image/png, image/svg+xml, image/gif"
          multiple
          onChange={handleImageUpload}
          className="hidden"
          required={true}
        />
        {uploadedImages?.length > 0 && (
          <div className="flex gap-4 mx-5 bg-[]">
            {uploadedImages.map((imageUrl) => (
              <div key={imageUrl} className="bg-[] relative">
                <img
                  src={`http://localhost:4000${imageUrl}`}
                  alt="Uploaded"
                  className="w-[90px] h-auto rounded-lg border shadow-lg"
                />
                <button
                  className="absolute top-0 right-0 px-2 rounded-full"
                  onClick={() => handleImageDelete(imageUrl)}
                >
                  x
                </button>
                {mainImage === imageUrl && (
                  <div className="absolute w-full text-sm bg-[#f7f7f795] bottom-0 left-0 px-2 py-1 rounded-b-lg">
                    Thumbnail
                  </div>
                )}
                <input
                  type="radio"
                  id={`mainImage-${imageUrl}`}
                  checked={mainImage === imageUrl}
                  onChange={() => handleMainImageSelect(imageUrl)}
                  className="absolute bottom-0 left-0 w-full h-1/2 opacity-0 cursor-pointer"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
