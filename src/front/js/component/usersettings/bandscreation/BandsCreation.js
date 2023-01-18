//Import react
import React, { useEffect, useState } from "react";

//Import Materials
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

//Function
export const BandsCreation = () => {
  // Open edit button
  const [open, setOpen] = useState({
    name: false,
    descripcion: false,
    music_genre: false,
    band_members: false,
  });

  //Values
  const [values, setValues] = useState({
    name: "",
    description: "",
    music_genre: "",
    band_members: "",
  });
  console.log(values);

  //Handle value change
  const handleValueChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Box>
      {1 + 1 == 25 ? (
        <Box className="w-100 d-flex flex-column align-items-center">
          <Typography className="my-3" variant="h3">
            Crear una banda
          </Typography>
          <Divider className="w-75 mb-3" />
          <TextField
            className="my-2 w-75"
            type="text"
            name="name"
            variant="outlined"
            label="Nombre de la banda"
            onChange={handleValueChange}
          />
          <TextField
            className="my-2 w-75"
            type="text"
            name="description"
            variant="outlined"
            label="Descripcion de la banda"
            onChange={handleValueChange}
          />
          <TextField
            className="my-2 w-75"
            type="text"
            name="music_genre"
            variant="outlined"
            label="Genero musical "
            onChange={handleValueChange}
          />
            <TextField
            className="my-2 w-75"
            type="text"
            name="band_members"
            variant="outlined"
            label="Miembros de la banda"
            onChange={handleValueChange}
          />
          <Button
            className="my-3 bubbles w-75"
            variant="contained"
            aria-label="upload picture"
            component="label"
          >
            Subir imagen banda <PhotoCameraIcon className="ms-2" />
            <input hidden accept="image/*" type="file" />
          </Button>
          <Button
            variant="contained"
            color="success"
            className="text-white mt-3"
          >
            <strong>Crear banda</strong>
          </Button>
        </Box>
      ) : (
        <Box className="w-100 d-flex flex-column align-items-center">
          <Typography className="my-3" variant="h3">
            Modificar banda
          </Typography>
          <Divider className="w-75 mb-3" />

          {/* Condicional nombre banda */}
          {1 + 1 == 2 ? (
            <>
              {/* Condicional editar cerrado */}
              {!open.name ? (
                <Box className="d-flex align-items-center justify-content-between w-75 my-2">
                  <Typography variant="h5">
                    <strong>Nombre banda</strong>
                  </Typography>
                  <Button
                    onClick={() => setOpen({ name: true })}
                    variant="contained"
                    className="bubbles"
                  >
                    <strong>Editar</strong>
                  </Button>
                </Box>
              ) : (
                <>
                  {/* Condicional editar abierto */}
                  <Box className="d-flex align-items-center justify-content-between w-75">
                    <TextField
                      className="w-100"
                      label="Nuevo nombre"
                      onChange={handleValueChange}
                      name="name"
                    />
                    <Box className="d-flex">
                      <Button
                        className="ms-2 text-white"
                        variant="contained"
                        color="success"
                      >
                        <strong>Modificar</strong>
                      </Button>
                      <Button
                        onClick={() => setOpen({ name: false })}
                        variant="contained"
                        color="error"
                        className="ms-2"
                      >
                        <strong>Cancelar</strong>
                      </Button>
                    </Box>
                  </Box>
                </>
              )}
            </>
          ) : (
            <TextField
              className="my-2 w-75"
              type="text"
              name="name"
              variant="outlined"
              label="Nombre banda"
              onChange={handleValueChange}
            />
          )}

          {/* Condicional descripcion */}
          {
            2 + 2 == 4 ? (
              <>
                {/* Condicional editar cerrado */}
                {!open.descripcion ? (
                  <Box className="d-flex align-items-center justify-content-between w-75 my-2">
                    <Typography variant="h5">
                      <strong>Descripcion</strong>
                    </Typography>
                    <Button
                      onClick={() => setOpen({ descripcion: true })}
                      variant="contained"
                      className="bubbles"
                    >
                      <strong>Editar</strong>
                    </Button>
                  </Box>
                ) : (
                  <>
                    {/* Condicional editar abierto */}
                    <Box className="d-flex align-items-center justify-content-between w-75">
                      <TextField
                        className="w-100"
                        label="Descripción Banda"
                        onChange={handleValueChange}
                        name="description"
                      />
                      <Box className="d-flex">
                        <Button
                          className="ms-2 text-white"
                          variant="contained"
                          color="success"
                        >
                          <strong>Modificar</strong>
                        </Button>
                        <Button
                          onClick={() => setOpen({ descripcion: false })}
                          variant="contained"
                          color="error"
                          className="ms-2"
                        >
                          <strong>Cancelar</strong>
                        </Button>
                      </Box>
                    </Box>
                  </>
                )}
              </>
            ) : (
              <TextField
                className="my-2 w-75"
                type="text"
                name="description"
                variant="outlined"
                label="Descripcion Banda"
                onChange={handleValueChange}
              />
            )
            // Final Condicional descripcion banda
          }

          {/* Condicional Genero musical */}
          {3 + 3 == 6 ? (
            <>
              {/* Condicional editar cerrado */}
              {!open.music_genre ? (
                <Box className="d-flex align-items-center justify-content-between w-75 my-2">
                  <Typography variant="h5">
                    <strong>Género musical</strong>
                  </Typography>
                  <Button
                    onClick={() => setOpen({ music_genre: true })}
                    variant="contained"
                    className="bubbles"
                  >
                    <strong>Editar</strong>
                  </Button>
                </Box>
              ) : (
                <>
                  {/* Condicional editar abierto */}
                  <Box className="d-flex align-items-center justify-content-between w-75">
                    <TextField className="w-100" label="Genero musical" 
                    name="music_genre"
                    onChange={handleValueChange}
                    />
                    <Box className="d-flex">
                      <Button
                        className="ms-2 text-white"
                        variant="contained"
                        color="success"
                      >
                        <strong>Modificar</strong>
                      </Button>
                      <Button
                        onClick={() => setOpen({ music_genre: false })}
                        variant="contained"
                        color="error"
                        className="ms-2"
                      >
                        <strong>Cancelar</strong>
                      </Button>
                    </Box>
                  </Box>
                </>
              )}
            </>
          ) : (
            <TextField
              className="my-2 w-75"
              type="text"
              name="music_genre"
              variant="outlined"
              label="Género musical de la banda"
              onChange={handleValueChange}
            />
          )}

          {/* Condicional Band members */}
          {3 + 3 == 6 ? (
            <>
              {/* Condicional editar cerrado */}
              {!open.band_members ? (
                <Box className="d-flex align-items-center justify-content-between w-75 my-2">
                  <Typography variant="h5">
                    <strong>Miembros de banda</strong>
                  </Typography>
                  <Button
                    onClick={() => setOpen({ band_members: true })}
                    variant="contained"
                    className="bubbles"
                  >
                    <strong>Editar</strong>
                  </Button>
                </Box>
              ) : (
                <>
                  {/* Condicional editar abierto */}
                  <Box className="d-flex align-items-center justify-content-between w-75">
                    <TextField className="w-100" label="Miembros de la banda" 
                    name="band_members"
                    onChange={handleValueChange}
                    />
                    <Box className="d-flex">
                      <Button
                        className="ms-2 text-white"
                        variant="contained"
                        color="success"
                      >
                        <strong>Modificar</strong>
                      </Button>
                      <Button
                        onClick={() => setOpen({ band_members: false })}
                        variant="contained"
                        color="error"
                        className="ms-2"
                      >
                        <strong>Cancelar</strong>
                      </Button>
                    </Box>
                  </Box>
                </>
              )}
            </>
          ) : (
            <TextField
              className="my-2 w-75"
              type="text"
              name="band_members"
              variant="outlined"
              label="Miembros de la banda"
              onChange={handleValueChange}
            />
          )}

        {/* Final miembros de banda */}

        {/* Subir imagen */}
          <Button
            className="my-3 bubbles w-75"
            variant="contained"
            aria-label="upload picture"
            component="label"
          >
            Subir imagen banda <PhotoCameraIcon className="ms-2" />
            <input hidden accept="image/*" type="file" />
          </Button>
          <Button
            variant="contained"
            color="success"
            className="text-white mt-3"
          >
            <strong>Modificar Banda</strong>
          </Button>
        </Box>
      )}
    </Box>
  );
};
