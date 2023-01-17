import React, { useContext } from "react";
import '../../../styles/cardlocalprofile.css'
import { CardsButton } from '../buttons/CardsButton.jsx'
import { Card, CardContent, Chip, Divider, List, ListItemText, Typography } from '@mui/material'
import { useTheme, Box } from "@mui/material";
import { Context } from "../../store/appContext"





export const CardLocalProfile = ({local_img,
  name,
  ubicacion_local,
  city,
  description,
  generosMusica,}) => {
    const { actions, store } = useContext(Context);
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
        <img className="card-localprofile-img" src="https://images.unsplash.com/photo-1610320022580-5295faad847c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
      </Box>

      <CardContent>
      <Typography variant="h3">
        {name} | {city}
      </Typography>
      
      </CardContent>
      <CardContent>
      <Typography variant="body1">
        {ubicacion_local}
      </Typography>
      
      </CardContent>
      <CardContent>
      <Typography variant="body1">
        {description}
      </Typography>
      </CardContent>
      <CardContent>
      
      <Box className="ps-3 pe-3 pb-2" >
        {generosMusica?.map((element, index) => (
          <Chip
            
            className="me-2 mb-2"
            onDelete={
              store.username === store.current_user ? handleDelete : null
            }
            label={element}
          ></Chip>
        ))}

      </Box>
      </CardContent>
      <CardContent>

      {/* <List>
        
          <ListItemText>
            Algo
          </ListItemText>
        
        <ListItemText>Ubicacion</ListItemText>
      </List> */}
    </CardContent>
    <CardsButton title="contacto" minWidth="400px"/>

    </Card>
  )
}
