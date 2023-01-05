import React from 'react'
import {useState, useContext, useMemo, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Context } from '../../../store/appContext'

const UserPictures = () => {
  const { store, actions } = useContext(Context)
  const params = useParams()
  const profilePicture = store.resultados.profile_img ? store.resultados.profile_img : null;
  const portraitPicture = store.resultados.portrait_img ? store.resultados.portrait_img : null;
  const current_user = sessionStorage.getItem('current_user') ? sessionStorage.getItem('current_user') : false;
  const userparams = params.username

  useEffect(() =>{

if(current_user !== userparams) {
      window.location.href = `/user/${current_user}`}
  }, [])


  return (
    <div>
      <span>{current_user}</span>
      <span>{userparams}</span>
    </div>
  )
}

export default UserPictures