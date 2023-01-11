import React from "react";
import { useContext } from "react";
import { Context } from "../../../store/appContext";

//icons >>>>
import ExploreIcon from "@mui/icons-material/Explore";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import StadiumIcon from '@mui/icons-material/Stadium';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
// <<<<< icons



// Icons/Name >>>
export const iconsArray = [
    {
      name: "Explorar",
      icon: <ExploreIcon />,
    },
    {
      name: "Jam Sessions",
      icon: <NightlifeIcon />,
    },
    {
      name:"Events",
      icon: <StadiumIcon />
    },
    {
        name:"Home",
        icon: <HomeIcon/>
    },
    {
        name:"Sand Box",
        icon: null
    },
    {
        name:"Test",
        icon:null
    },
    {
      name:"Settings",
      icon: <ManageAccountsIcon/>
    },
    {
      name:"Log out",
      icon: <LogoutIcon/>
    }
  ];
// <<< Icons/Name

//Pages >>>
export const globalPages = ["Home","Explorar", "Jam Sessions", "Events"];
export const userPages = ["Settings", "Log out"];
// <<< Pages


//Functions >>>

  export const filterIcon = (icon) => {
    return iconsArray.filter((i) => i.name === icon)[0].icon;
  };
  
// <<< Functions