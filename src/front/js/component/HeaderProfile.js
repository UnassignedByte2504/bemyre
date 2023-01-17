import { Box } from "@mui/system";
import React from "react";
import "../../styles/headerprofile.css";


export const HeaderProfile = ({name, city, local_img}) => {
  return (
    <Box className="row header" sx={{backgroundImage: `${local_img}`}}>
      <div className="col"></div>
      <div className="col">
        {/* <h1>Black Bone Tango</h1> */}
        <h4>{name} | {city}</h4>
      </div>
      <div className="col"></div>
    </Box>
  );
};
