export const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setImage(file);
      setImageUrl(reader.result);
      setImageName(file.name);
      setImageType(file.type);
      setImageSize(file.size);
      setImageBase64(reader.result);
      // convert base64 to binary
      let binary = window.atob(reader.result.split(",")[1]);
      let array = [];
      for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }
      setImageBinary(new Uint8Array(array));
      setImageFile(window.btoa(reader.result));
    };
    reader.readAsDataURL(file);
  };