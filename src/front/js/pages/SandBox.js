import React from "react";
import { AspectRatio } from "@mui/icons-material";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { Context } from "../store/appContext";

import { CardConcert } from "../component/ConcertCard/CardConcert.jsx";
import { CardMusician } from "../component/MusicianCard/CardMusician.jsx";
import { CardBandas } from "../component/BandasCard/CardBandas.jsx";
import { CardLocal } from "../component/LocalesCard/CardLocal.jsx";
import FlexBetween from "../component/styledcomponents/FlexBetween.jsx";
import FlexCentered from "../component/styledcomponents/FlexCentered.jsx";

// Marcos imports
import LinkButton from "../component/buttons/LinkButton.jsx";

const BrainStorm = () => {
  const theme = useTheme();
  const { actions, store } = useContext(Context);
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
        <FlexBetween className="my-3">
          <Box
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h3">Buttons</Typography>
            <FlexBetween>
              <LinkButton
                title="Test"
                to="/home"
                variant="outlined"
                type="main"
              />
            </FlexBetween>
          </Box>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FlexCentered>
              <Box>
                <Typography variant="h2">Pruebas</Typography>
                {/* aqui empezaba el conflicto*/}
                <Box
                  height="600px"
                  width="300px"
                  sx={{
                    backgroundColor: theme.palette.background.alt,
                  }}
                >
                  <Box
                    height="200px"
                    width="100%"
                    sx={{
                      backgroundColor: theme.palette.background.default,
                    }}
                  ></Box>

                  <Box
                    height="500px"
                    width="500px"
                    gap="5rem"
                    p="10rem"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      backgroundColor: "white",
                    }}
                  >
                    <Box className="bg-success" height="100px" width="100px">
                      1
                    </Box>
                    <Box
                      height="100px"
                      width="100px"
                      sx={{
                        backgroundColor: "blue",
                      }}
                    >
                      2
                    </Box>
                    <Box
                      height="100px"
                      width="100px"
                      sx={{
                        backgroundColor: "red",
                      }}
                    >
                      3
                    </Box>
                    {/* aqui terminaba el conflicto*/}
                  </Box>
                </Box>
              </Box>
            </FlexCentered>
          </Box>
        </FlexBetween>
      </Box>
      {/* marcos */}
      <Button>Test</Button>
      <button>Test</button>
      <Box className="Pablo">
        <h1>Pablo</h1>
        <hr />
      </Box>
      <Box
        className="Carmen"
        sx={{
          backgroundColor: theme.palette.background.card,
        }}
      >
        <h1 className="mb-5">Carmen</h1>
        <Box sx={{ display: "flex", gap: "30px" }}>
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
