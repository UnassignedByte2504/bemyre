import { protocol } from "socket.io-client";

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

const addMedia = async ({media1, media2, media3}) => {
  const [hasMedia, setHasMedia] = useState();
  const [method, setMethod] = useState();

  await fetch(process.env.BACKEND_URL / settings / user / hasmedia)
    .then((res) => res.json())
    .then((data) => {
      setHasMedia(data.hasMedia);
    })
    .catch((err) => console.log(err));

  if (hasMedia === false) {
    setMethod("POST");
  } else {
    setMethod("PUT");
  }

  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  body:`"${}", "${}"`
  }

  await fetch(`${process.env.BACKEND_URL/}`)