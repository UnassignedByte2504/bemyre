import * as React from "react";
import { useState, useContext, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../../../store/appContext";
//MUI imports >>>
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Circular,
  Slider,
  FormControl,
  Divider,
  Tabs,
  Tab,
  AppBar,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
//MUI imports <<<
//components >>>
import SettingHeader from "../../aux/SettingHeader.jsx";
import FlexBetween from "../../../styledcomponents/FlexBetween.jsx";
import FlexCentered from "../../../styledcomponents/FlexCentered.jsx";
import FlexEvenly from "../../../styledcomponents/FlexEvenly.jsx";
import { TabPanel } from "./TabPanel.jsx";
//components <<<

//logic imports >>>
import { getUserSettings } from "../../UserSettingsData.js";
import { Portrait } from "@mui/icons-material";

const AdjustmentItem = ({
  title,
  ariaLabel,
  defaultValue,
  minValue,
  maxValue,
  marginTop,
}) => {
  const [value, setValue] = useState();
  return (
    <Box
      sx={{
        width: "90%",
        marginTop: marginTop,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: ".5rem",
          paddingLeft: ".5rem",
        }}
      >
        <Typography>{title}</Typography>
        <Slider
          aria-label={ariaLabel}
          defaultValue={0}
          valueLabelDisplay="auto"
          marks
          min={-50}
          max={0}
          onChange={(e, value) => setValue(value)}
          sx={{
            width: "5rem",
            alignSelf: "flex-end",
          }}
        />
      </Box>
    </Box>
  );
};

const FormItem = ({ fileName, label, value, onchange, mt, mb, m, p}) => {
  return (
    <Box className="InputGroup-root" sx={{
      marginTop:mt,
      marginBottom:mb,
      margin:m,
      padding:p
    }}>
      <Typography className="InputLabel">{fileName}</Typography>
      <Button variant="contained" component="label" className="InputButton">
        {label}
        <input
          type="file"
          accept=".jpg, .png, .jpeg"
          hidden
          onChange={onchange}
        />
      </Button>
    </Box>
  );
};
const ImgsForm = () => {
  const theme = useTheme();
  const { store, actions } = useContext(Context);
  const [profileImg, setProfileImg] = useState({
    name: "Imagen de perfil",
    image: null,
  });
  const [portraitImg, setPortraitImg] = useState({
    name: "Imagen de portada",
    image:null
  })

  const handleProfileImg = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setProfileImg({ name: file.name, image: reader.result });
      actions.preProfileImg(reader.result);
      sessionStorage.setItem('settings_profile_img', reader.result)
    };
    reader.readAsDataURL(file);
  };


  const handlePortraitImg = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setPortraitImg({ name: file.name, image: reader.result });
      actions.prePortraitImg(reader.result);
      sessionStorage.setItem('settings_portrait_img', reader.result)
    };
    reader.readAsDataURL(file);
  };
  return (
    <Box className="ImgFormWrapper">
      <FlexCentered>
        <Typography variant="h5" my=".5rem">
          Imagen de perfil
        </Typography>
      </FlexCentered>
      <Divider
        sx={{
          width: "100%",
        }}
      />
      <Box className="ImgForm">
        <FormControl>
          <FormItem
            label="subir archivo"
            fileName={profileImg.name}
            onchange={handleProfileImg}
            mt=".5rem"
          />
          <AdjustmentItem title="Posicion Y" marginTop=".5rem" />
          <AdjustmentItem title="Posicion X" marginTop=".5rem" />
          <AdjustmentItem title="Zoom" marginTop=".5rem" />
          <Divider className="mt-2" />
          <FlexCentered>
            <Typography variant="h5" my=".5rem">
              Imagen de portada
            </Typography>
          </FlexCentered>
          <Divider
            sx={{
              width: "100%",
            }}
          />
          <FormItem
            label="subir archivo"
            fileName={portraitImg.name}
            onchange={handlePortraitImg}
            mt=".5rem"
          />
          <AdjustmentItem title="Posicion Y" marginTop=".5rem" />
          <AdjustmentItem title="Posicion X" marginTop=".5rem" />
          <AdjustmentItem title="Zoom" marginTop=".5rem" />
        </FormControl>
      </Box>
    </Box>
  );
};

export default ImgsForm;
