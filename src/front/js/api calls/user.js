import React from "react"
import { useContext } from 'react'
import { Context } from '../store/appContext'


export const fetchUser  = async () =>{

}

export const testFetch = async () =>{
    

    const opts = {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }

      const response = await fetch('https://3001-unassignedbyte25-bemyre-vgc43hj0dnd.ws-eu79.gitpod.io/api/hello', opts)
      const data = await response.json();
      await console.log(data)
      await actions.setMsg(data)
      await console.log("este mensaje viene del flux", store?.message)

}