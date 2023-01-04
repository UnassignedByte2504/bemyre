//Import react
import React from "react";

//Import materials
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Import Components
import { AccordionFaq } from "../component/faq/AccordionFaq.jsx";
import { HeaderFaq } from "../component/faq/HeaderFaq.jsx";

export const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className="faq">
        <HeaderFaq />
      <Box className="accordionarea container">
      <Typography variant="h2" className="text-center mb-3 preguntasfrecuentesmedia">
                Preguntas Frecuentes
            </Typography>
        <AccordionFaq 
        title="¿Qué es Bemyre?"
        description="Bemyre es una plataforma social para músicos..."
        text="Bemyre es una plataforma social para músicos que sirve de punto de encuentro...."
        />
        <AccordionFaq 

        title="¿Cómo puedo crear una cuenta?"
        description="Para crear una cuenta solo es necesario..."
        text="Para crear una cuenta solo es necesario proporcionar los datos requeridos en el apartado de signup."
        />
        <AccordionFaq 
        title="¿Cómo puedo encontrar una banda?"
        description="Bemyre es un servicio totalmente gratuito..."
        text="Bemyre es un servicio totalmente gratuito creado por músicos para músicos, donde con un simple registro podrás acceder a un sin fin de contenido musical."
        />
        <AccordionFaq 
        title="¿Cómo puedo encontrar un integrante para mi banda?"
        description="Bemyre es un servicio totalmente gratuito..."
        text="Bemyre es un servicio totalmente gratuito creado por músicos para músicos, donde con un simple registro podrás acceder a un sin fin de contenido musical."
        />
        <AccordionFaq 
        title="Soy un local, ¿Cómo puedo publicitar mi local en la web?"
        description="Para publicitar tu local en la web..."
        text="Bemyre es un servicio totalmente gratuito creado por músicos para músicos, donde con un simple registro podrás acceder a un sin fin de contenido musical."
        />
        <AccordionFaq 
        title="What is Lorem Ipsum?"
        description="Lorem ipsum ..."
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <AccordionFaq 
        title="What is Lorem Ipsum?"
        description="Lorem ipsum ..."
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </Box>
    </Box>
  );
};
