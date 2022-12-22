import { Box } from "@mui/system";
import React from "react";
import TestInfo from "./TestInfo";
//COMPONENTE PADRE
const TestCard = ({
  artistname,
  artistlocation,
  localname,
  locallocation,
  date,
  fecha,
  hora,
  ubicacion,
}) => {
  return (
    <Box height="300px" width="500px">
      <TestInfo fecha={fecha} ubicacion={ubicacion} hora={hora} />
    </Box>
  );
};

export default TestCard;
