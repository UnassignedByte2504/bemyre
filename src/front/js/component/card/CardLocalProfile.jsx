import React, { useContext } from "react";
import "../../../styles/cardlocalprofile.css";
import { CardsButton } from "../buttons/CardsButton.jsx";
import {
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTheme, Box } from "@mui/material";
import { Context } from "../../store/appContext";
import FlexBetween from "../../component/styledcomponents/FlexBetween.jsx";

export const CardLocalProfile = ({
  local_img,
  name,
  ubicacion_local,
  // city,
  description,
}) => {
  // const { actions, store } = useContext(Context);
  const theme = useTheme();
  return (
    <Card
      className="card-localprofile style-card"
      sx={{
        backgroundColor: theme.palette.background.card,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box className="contendorImg">
        <img className="card-localprofile-img" src={local_img} />
      </Box>

      <CardContent>
        <Typography variant="h3">
          {name} |{/* {city} */}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body1">{ubicacion_local}</Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
      <CardContent sx={{ margin: "auto" }}>
        {/* <FlexBetween className="mx-3 ">
          <span sx={{ marginLeft: 0 }} variant="body1">
            Ofrece tu música en este local
          </span> */}
        <Button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          variant="contained"
          sx={{ width: "10rem" }}
        >
          Contacto
        </Button>
        {/* </FlexBetween> */}
        <div
          className="modal fade mt-5"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-dark">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500.{" "}
                <p>info@gmail.com</p>
              </div>
              <div className="modal-footer">
                <Button
                  type="button"
                  variant="contained"
                  data-bs-dismiss="modal"
                >
                  Close
                </Button>
                {/* <Button type="button" variant="contained">Save changes</Button> */}
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardContent>
        {/* <Box className="ps-3 pe-3 pb-2" >
        {generosMusica?.map((element, index) => (
          <Chip
            
            className="me-2 mb-2"
            onDelete={
              store.username === store.current_user ? handleDelete : null
            }
            label={element}
          ></Chip>
        ))}

      </Box> */}
      </CardContent>
      <CardContent>
        {/* <List>
        
          <ListItemText>
            Algo
          </ListItemText>
        
        <ListItemText>Ubicacion</ListItemText>
      </List> */}
      </CardContent>
      {/* <CardsButton title="contacto" minWidth="400px" /> */}
    </Card>
  );
};
