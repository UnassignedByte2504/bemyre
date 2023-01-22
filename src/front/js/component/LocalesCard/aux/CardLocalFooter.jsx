import React, { useContext } from "react";
import { Box, Chip, Divider } from "@mui/material";
import { Context } from "../../../store/appContext";
import { CardsButton } from "../../buttons/CardsButton.jsx";

export const CardLocalFooter = ({
  local_music_genres,
  Key
}) => {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  const { actions, store } = useContext(Context);

  return ( 
    <>
      <Box className="ps-3 pe-3 pb-2" key={Key}>
        {local_music_genres?.map((element, index) => (
          <Chip
            key={index}
            className="me-2 mb-2"
            onDelete={
              store.username === store.current_user ? handleDelete : null
            }
            label={element}
          ></Chip>
        ))}

      </Box>

      <Box sx={{ display: "flex", gap: "0.25rem" }}>
        <CardsButton minWidth="223px" title="Más info" />
        {/* <CardsButton minWidth="142px" title="Aplicar" /> */}
      </Box>
    </>
  );
};
