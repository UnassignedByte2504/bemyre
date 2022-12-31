//Import React
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Import Material
import { Box, Button, Typography } from "@mui/material";

//Import styles
import "../../../styles/index.css"

//Import Components
import { EditInfo } from "./EditInfo.jsx";


export const SpotifyProfile = ({song1, song2, currentUser, userName}) =>{
    return(
        <Box>
            <EditInfo currentUser={currentUser} userName={userName}/>
            <Box>
                <iframe
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/track/5rhMc6IqSdVsyF7bRieSTc?utm_source=generator"
                    width="100%"
                    height="152"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </Box>
            <Box>
                <iframe
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/track/6dFn6my1sHK2bcf23GlHwM?utm_source=generator"
                    width="100%"
                    height="152"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </Box>
        </Box>
    )
}