import {
  Box,
  CardContent,
  Divider,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import FlexBetween from "../../../component/styledcomponents/FlexBetween.jsx";
import { Button } from "@mui/material";

export const CardBandasInfo = ({
  name,
  city,
  integrantes,
  description,
}) => {
  return (
    <CardContent >
      <Box sx={{ display: "inline" }}>
        <Typography variant="h5">
          <strong>
            {name} | {city}
          </strong>
        </Typography>

        {/* <Typography variant="body1">
          Somos
          {integrantes?.map((element, index) => (
            <span >{`, ${element}, (${element})`}</span>
          ))}

        </Typography> */}
        <Typography variant="body1">
          <span>{description}</span>
        </Typography>
      </Box>
      {/* {integrantes_nuevos.map((element, index) => (
        <Box key={index}>
          <Divider className="mb-2 mt-3"></Divider>
          <FlexBetween className="mx-5">
            <span  sx={{ marginLeft: 0 }} variant="body1">
              {element.integrante_instrument}
            </span>
            <Button variant="contained">Aplicar</Button>
          </FlexBetween>
        </Box>
      ))} */}

    </CardContent>
  );
};
