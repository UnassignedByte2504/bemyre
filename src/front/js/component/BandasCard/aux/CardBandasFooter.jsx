import React, { useContext } from "react";
import { Box, Chip, Divider } from "@mui/material";
import { Context } from "../../../store/appContext";
import { CardsButton } from "../../buttons/CardsButton.jsx";

export const CardBandasFooter = ({
  generoMusica1,
  generoMusica2,
  generoMusica3,
  generoMusica4,
  generoMusica5,
  generoMusica6,
}) => {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  const { actions, store } = useContext(Context);

  return (
    <>
      <Box className="ps-3 pe-3 pb-2">
        <Chip
          className={generoMusica1 ? "me-2 mb-2" : "d-none"}
          label={generoMusica1}
          onDelete={store.username === store.current_user ? handleDelete : null}
        ></Chip>
        <Chip
          className={generoMusica2 ? "me-2 mb-2" : "d-none"}
          label={generoMusica2}
          onDelete={store.username === store.current_user ? handleDelete : null}
        ></Chip>
        <Chip
          className={generoMusica3 ? "me-2 mb-2" : "d-none"}
          label={generoMusica3}
          onDelete={store.username === store.current_user ? handleDelete : null}
        ></Chip>
        <Chip
          className={generoMusica4 ? "me-2 mb-2" : "d-none"}
          label={generoMusica4}
          onDelete={store.username === store.current_user ? handleDelete : null}
        ></Chip>
        <Chip
          className={generoMusica5 ? "me-2 mb-2" : "d-none"}
          label={generoMusica5}
          onDelete={store.username === store.current_user ? handleDelete : null}
        ></Chip>
        <Chip
          className={generoMusica6 ? "me-2 mb-2" : "d-none"}
          label={generoMusica6}
          onDelete={store.username === store.current_user ? handleDelete : null}
        ></Chip>
      </Box>

      <Box sx={{ display: "flex", gap: "0.25rem" }}>
        <CardsButton minWidth="160px" title="Más info" />
        <CardsButton minWidth="160px" title="Seguir" />
      </Box>
    </>
  );
};
