import React from "react";
import { AspectRatio } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useTheme,
  Slider,
} from "@mui/material";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { CardConcert } from "../component/ConcertCard/CardConcert.jsx";
import { CardMusician } from "../component/MusicianCard/CardMusician.jsx";
import { CardBandas } from "../component/BandasCard/CardBandas.jsx";
import { CardLocal } from "../component/LocalesCard/CardLocal.jsx";
import FlexBetween from "../component/styledcomponents/FlexBetween.jsx";
import FlexCentered from "../component/styledcomponents/FlexCentered.jsx";
import { CardInstruments } from "../component/card/CardInstruments.jsx";
// Marcos imports
import LinkButton from "../component/buttons/LinkButton.jsx";
import AnimatedButton from "../component/buttons/AnimatedButton.jsx";
import RoundedButton from "../component/buttons/RoundedButton.jsx";
import ShadowButton from "../component/buttons/ShadowButton.jsx";
import zIndex from "@mui/material/styles/zIndex";

const BrainStorm = (props) => {
  const theme = useTheme();
  const { actions, store } = useContext(Context);

  const [image, setImage] = useState({
    imageRaw: imageBinary,
    imageName: imageName,
    imageType: imageType,
    imageSize: imageSize,
  });
  const [imageUrl, setImageUrl] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [imageType, setImageType] = useState(null);
  const [imageSize, setImageSize] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);
  const [imageBinary, setImageBinary] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [displayImg, setDisplayImg] = useState(false);
  const [imgId, setImgId] = useState(null);
  const [imgs, setImgs] = useState([]);
  const [ejeY, setEjeY] = useState(0);

  const handleEjeChange = (e) => {
    setEjeY(e.target.value);
  };

  const handleImageChange = (e) => {
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
    };
    reader.readAsDataURL(file);
  };
  const postImge = async (imgRaw, imgName, imgType, imgSize) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{
        "img_raw": "${imgRaw}",
        "img_name": "${imgName}",
        "img_type": "${imgType}",
        "img_size": "${imgSize}"
      }`,
    };
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/imgtest`,
      options
    );
    const json = await response.json();
    console.log(json);
  };

  const fetchAllImgs = async () => {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/imgtest`,
      options
    );
    const json = await response.json();
    console.log(json.all_imgs);
    setImgs(json.all_imgs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postImge(imageBase64, imageName, imageType, imageSize);
  };

  const fetchImg = async (imgId) => {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/imgtest/${imgId}`
    );
    const json = await response.json();
    console.log(json);
    console.log(json.img.img);
    const imgToDisplay = await json.img.img;
    setDisplayImg(imgToDisplay);
  };

  const handleImgIdChange = (e) => {
    e.preventDefault();
    setImgId(e.target.value);
  };

  return (
    <Box className="container brainstormWrapper">
      <Box className="Marcos">
        <h1>Marcos</h1>
        <hr />

        <FlexBetween>
          <Box>
            <Typography variant="h2">Theme Actual</Typography>
            <Typography variant="h5">
              Los nombres en cada Box representa la manera de invocarlos
              actualmente y corresponden con su color en el theme
            </Typography>
            <Box
              sx={{
                height: "100px",
                width: "600px",
                backgroundColor: theme.palette.primary.main,
              }}
              className="my-2"
            >
              <Typography variant="h2">
                <code>theme.palette.primary.main</code>
              </Typography>
            </Box>
            <Box
              sx={{
                height: "100px",
                width: "600px",
                backgroundColor: theme.palette.primary.light,
              }}
              className="my-2"
            >
              <Typography variant="h2">
                <code>theme.palette.primary.light</code>
              </Typography>
            </Box>
            <Box
              sx={{
                height: "100px",
                width: "600px",
                backgroundColor: theme.palette.secondary.main,
              }}
              className="my-2"
            >
              <Typography variant="h2">
                <code>theme.palette.secondary.main</code>
              </Typography>
            </Box>
            <Box
              sx={{
                height: "100px",
                width: "600px",
                backgroundColor: theme.palette.secondary.light,
              }}
              className="my-2"
            >
              <Typography variant="h2">
                <code>theme.palette.secondary.light</code>
              </Typography>
            </Box>
            <Box
              sx={{
                height: "100px",
                width: "600px",
                backgroundColor: theme.palette.neutral.main,
              }}
              className="my-2"
            >
              <Typography variant="h2">
                <code>theme.palette.neutral.main</code>
              </Typography>
            </Box>
            <Box
              sx={{
                height: "100px",
                width: "600px",
                backgroundColor: theme.palette.background.alt,
              }}
              className="my-2"
            >
              <Typography variant="h2">
                <code>theme.palette.background.alt</code>
              </Typography>
            </Box>
            <Box
              sx={{
                height: "100px",
                width: "600px",
                backgroundColor: theme.palette.background.default,
              }}
              className="my-2"
            >
              <Typography variant="h2">
                <code>theme.palette.background.default</code>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              marginBottom: "auto",
            }}
          >
            <Typography variant="h2">
              Colores con los que tenemos que jugar
            </Typography>
            <Typography variant="h5">
              Son los colores que hemos elegido en un principio.
            </Typography>
            <Box
              sx={{
                height: "100px",
                width: "600px",
                backgroundColor: "#ff000b",
              }}
              className="my-2"
            >
              <Typography variant="h2">--red:#ff000b</Typography>
            </Box>
            <Box
              sx={{
                height: "100px",
                width: "600px",
                backgroundColor: "#1c1c1c",
              }}
              className="my-2"
            >
              <Typography variant="h2"> --black:#1c1c1c</Typography>
            </Box>
            <Box
              sx={{
                height: "100px",
                width: "600px",
                backgroundColor: "#e0934f",
              }}
              className="my-2"
            >
              <Typography variant="h2">--orange:#e0934f</Typography>
            </Box>
            <Box
              sx={{
                height: "100px",
                width: "600px",
                backgroundColor: "#f9f9f9",
              }}
              className="my-2"
            >
              <Typography variant="h2" color="black">
                --white:#f9f9f9
              </Typography>
            </Box>
          </Box>
        </FlexBetween>
        <Divider
          sx={{
            width: "100%",
            color: theme.palette.primary.light,
          }}
        />
        <FlexBetween>
          <Box className="m-5">
            <Typography variant="h2">Image to raw test</Typography>
            <form onSubmit={handleSubmit}>
              <input type="file" onChange={handleImageChange} />
              <button type="submit">Submit</button>
            </form>
            <Box className="my-2">
              <h2>Image</h2>{" "}
              <Box
                sx={{
                  height: "300px",
                  width: "300px",
                }}
                className="my-2"
              >
                <img src={imageUrl} alt={imageName} className="ImgTest" />
              </Box>
              <p>Name: {imageName}</p>
              <p>Type: {imageType}</p>
              <p>Size: {imageSize}</p>
            </Box>
          </Box>
          <Box className="my-2">
            <h2>Fetching Img</h2>
            <Box
              sx={{
                height: "300px",
                width: "300px",
              }}
              className="my-2"
            >
              {displayImg ? (
                <img src={displayImg} alt={imageName} className="ImgTest" />
              ) : (
                <p>No Image</p>
              )}
              <button onClick={() => fetchImg(imgId)}>Fetch</button>
              <label htmlFor="imgId">select id</label>
              <input type="number" id="imgId" onChange={handleImgIdChange} />
            </Box>
          </Box>
        </FlexBetween>
        <Box>
          <Box>
            <FlexCentered>
              <Typography variant="h3">
                Test mapping imgs from backend
              </Typography>
            </FlexCentered>
            <Box
              className="my-5"
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {imgs &&
                imgs.map((img) => (
                  <Box
                    sx={{
                      height: "300px",
                      width: "300px",
                    }}
                    className="my-2 ImgTest"
                    key={img.id}
                  >
                    <img src={img.img} alt={img.name} className="ImgTest" />
                    <p>Name: {img.img_name}</p>
                    <p>Type: {img.img_type}</p>
                    <p>Size: {img.img_size}</p>
                  </Box>
                ))}
            </Box>
            <Button
              variant="contained"
              onClick={() => fetchAllImgs()}
              sx={{
                background: "none",
                border: "none",
                outline: "none",
                boxShadow: "none",
                textTransform: "none",
              }}
            >
              Do the Magic!
            </Button>
          </Box>
        </Box>
        <FlexCentered>
          <Typography variant="h2">Buttons</Typography>
        </FlexCentered>
        <FlexBetween>
          <AnimatedButton title="Test Animated" />
          <RoundedButton
            title="Test Rounded"
            onclick={() => alert("clicked")}
          />
          <ShadowButton title="Test Shadow" />
        </FlexBetween>
        <Divider />
        <Typography variant="h1">Prueba overlay</Typography>
        <Box>
          <FlexBetween>
            <Box
              className="PadreHeader"
              width="600px"
              height="200px"
              sx={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                className="HermanoTexto"
                sx={{
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  zIndex: "2",
                }}
              >
                <Typography variant="h1">Prueba texto</Typography>
              </Box>
              <Box
                className="HermanoImagen"
                sx={{
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  zIndex: "1",
                }}
              >
                <img
                  style={{ transform: `translateY(${ejeY}%)` }}
                  className="imagenPrueba"
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="imagen"
                />
              </Box>
            </Box>
            <Box marginRight="10rem">
              <Typography variant="h2">Pruebame</Typography>
              <Slider
                aria-label="Eje Y"
                defaultValue={0}
                valueLabelDisplay="auto"
                marks
                min={-50}
                max={0}
                onChange={(e, value) => setEjeY(value)}
              />
            </Box>
          </FlexBetween>
        </Box>
      </Box>
      {/* marcos */}
      <Box className="Pablo">
        <h1>Pablo</h1>
        <CardInstruments />
        <hr />
      </Box>
      <Box
        className="Carmen"
        sx={{
          backgroundColor: theme.palette.background.card,
        }}
      >
        <h1 className="mb-5">Carmen</h1>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            height: "max-content",
            gap: "2rem",
          }}
        >
          <CardConcert />

          <CardMusician />

          <CardBandas />

          <CardLocal />
        </Box>
        <hr className="mt-5" />
      </Box>
    </Box>
  );
};

export default BrainStorm;
