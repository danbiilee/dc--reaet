class ImageUploader {
  async upload(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "uokyckre");

    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dawofjcgg/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
