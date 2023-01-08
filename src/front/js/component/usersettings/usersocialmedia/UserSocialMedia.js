//Import React
import React, { useState } from 'react'

//Import Material
import { TextField, Typography, Box, Button } from '@mui/material'

//Import Formik
import { useFormik } from 'formik'

//Import Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';
import EditIcon from '@mui/icons-material/Edit';
import TiktokIcon from "../../../../img/RRSS/tiktok_logo.png"
import SoundcloudIcon from "../../../../img/RRSS/soundcloud.png"
import SnapchatIcon from "../../../../img/RRSS/snapchat.png"
import CancelIcon from '@mui/icons-material/Cancel';

//Import Styles
import "../../../../styles/index.css"

//Main Function

const UserPasswordManagement = () => {

  const [web, setWeb] = useState(false)
  const [youtube, setYoutube] = useState(false)
  const [soundcloud, setSoundcloud] = useState(false)
  const [instagram, setInstagram] = useState(false)
  const [facebook, setFacebook] = useState(false)
  const [twitter, setTwitter] = useState(false)
  const [tiktok, setTiktok] = useState(false)
  const [snapchat, setSnapchat] = useState(false)

  const submitFormPassword = (values)=>{
    console.log(values)
  }
  const {handleSubmit, handleChange, isSubmitting} = useFormik({
    initialValues: {
      oldPassword: '',
      confirmOldPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    },
    onSubmit: submitFormPassword
  })

  return (
    <Box className='m-2 changepasswordbox'>
      <Typography className='my-3' variant='h3'>Redes Sociales</Typography>
      <form onSubmit={handleSubmit} className='changepasswordform'>
      
      {/* Condicional Website */}

      {1+1==32? 
        <TextField
        className='w-100 my-2'
        variant='outlined'
        label='Website'
        type='url'
        onChange={handleChange}
        name='confirmNewPassword'
        />  
        : 
        <>
        {web==false ?
          <Box className='d-flex justify-content-between w-100 align-items-center'>
          <Typography variant='h5' className='my-3 w-100 text-start'><LanguageIcon className='me-2'/> www.bemyre.com</Typography>
          <Button onClick={()=> setWeb(true)} className='text-white'>Editar<EditIcon className='ms-2'/></Button>
          </Box>
        :
        <Box className='w-100 d-flex'>
          <TextField
          className='w-100 me-2'
          label='Modificar URL Web'
          />
          <Button
          variant='contained'
          >Modificar</Button>
          <Button
          variant='contained'
          className='ms-2'
          onClick={()=>setWeb(false)}
          >Cancel</Button>
        </Box>
        }  
        </>
        }


        {/* Condicional Youtube */}
        {1+1==32? 
        <TextField
        className='w-100 my-2'
        variant='outlined'
        label='Youtube'
        type='url'
        onChange={handleChange}
        name='confirmNewPassword'
        />  
        :   
        <>
        {youtube==false ?
        <Box className='d-flex justify-content-between w-100 align-items-center'>
        <Typography variant='h5' className='my-3 w-100 text-start'><YouTubeIcon className='me-2' /> www.YouTube.com/bemyre</Typography>
        <Button onClick={()=> setYoutube(true)} className='text-white'>Editar<EditIcon className='ms-2'/></Button>
        </Box>
        :
        <Box className='w-100 d-flex'>
          <TextField
          className='w-100 me-2'
          label='Modificar URL Web'
          />
          <Button
          variant='contained'
          >Modificar</Button>
          <Button
          variant='contained'
          className='ms-2'
          onClick={()=>setYoutube(false)}
          >Cancel</Button>
        </Box>
        }  
        </>
        }

        {/* Condicional soundcloud */}
        {1+1==32? 
        <TextField
        className='w-100 my-2'
        variant='outlined'
        label='Soundcloud'
        type='url'
        onChange={handleChange}
        name='confirmNewPassword'
        />  
        : 
        <>
        {soundcloud==false ?
         <Box className='d-flex justify-content-between w-100 align-items-center'>
         <Typography variant='h5' className='my-3 w-100 text-start'><img src={SoundcloudIcon} className='logorrsssettings me-2'/> @bemyre</Typography>
         <Button onClick={()=>setSoundcloud(true)} className='text-white'>Editar<EditIcon className='ms-2'/></Button>
         </Box>
        :
        <Box className='w-100 d-flex'>
          <TextField
          className='w-100 me-2'
          label='Modificar URL Web'
          />
          <Button
          variant='contained'
          >Modificar</Button>
          <Button
          variant='contained'
          className='ms-2'
          onClick={()=>setSoundcloud(false)}
          >Cancel</Button>
        </Box>
        }  
        </>
        }

        {/* Condicional Instagram */}
        {1+1==32? 
        <TextField
        className='w-100 my-2'
        variant='outlined'
        label='Instagram'
        type='url'
        onChange={handleChange}
        name='confirmNewPassword'
        />  
        :   
        <>
        {instagram==false ?
        <Box className='d-flex justify-content-between w-100 align-items-center'>
        <Typography variant='h5' className='my-3 w-100 text-start'><InstagramIcon className='me-2' /> @bemyre</Typography>
        <Button onClick={()=> setInstagram(true)} className='text-white'>Editar<EditIcon className='ms-2'/></Button>
        </Box>
        :
        <Box className='w-100 d-flex'>
          <TextField
          className='w-100 me-2'
          label='Modificar URL Web'
          />
          <Button
          variant='contained'
          >Modificar</Button>
          <Button
          variant='contained'
          className='ms-2'
          onClick={()=>setInstagram(false)}
          >Cancel</Button>
        </Box>
        }  
        </>
        }


        {/* Condicional Facebook */}
        {1+1==32? 
        <TextField
        className='w-100 my-2'
        variant='outlined'
        label='Facebook'
        type='url'
        onChange={handleChange}
        name='confirmNewPassword'
        
        />  
        :   
        <>
        {facebook==false ?
          <Box className='d-flex justify-content-between w-100 align-items-center'>
          <Typography variant='h5' className='my-3 w-100 text-start'><FacebookIcon className='me-2' /> facebook.com/bemyre</Typography>
          <Button onClick={()=>setFacebook(true)} className='text-white'>Editar<EditIcon className='ms-2'/></Button>
          </Box>
          :
          <Box className='w-100 d-flex'>
            <TextField
            className='w-100 me-2'
            label='Modificar URL Web'
            />
            <Button
            variant='contained'
            >Modificar</Button>
            <Button
            variant='contained'
            className='ms-2'
            onClick={()=>setFacebook(false)}
            >Cancel</Button>
          </Box>
          }  
          </>
        }



        {/* Condicional Twitter */}
        {1+1==32? 
        <TextField
        className='w-100 my-2'
        variant='outlined'
        label='Twitter'
        type='url'
        onChange={handleChange}
        name='confirmNewPassword'  
        />  
        :   
        <>
        {twitter==false ?
        <Box className='d-flex justify-content-between w-100 align-items-center'>
        <Typography variant='h5' className='my-3 w-100 text-start'><TwitterIcon className='me-2'/> @bemyre    </Typography>
        <Button onClick={()=>setTwitter(true)} className='text-white'>Editar<EditIcon className='ms-2'/></Button>
        </Box>
          :
          <Box className='w-100 d-flex'>
            <TextField
            className='w-100 me-2'
            label='Modificar URL Web'
            />
            <Button
            variant='contained'
            >Modificar</Button>
            <Button
            variant='contained'
            className='ms-2'
            onClick={()=>setTwitter(false)}
            >Cancel</Button>
          </Box>
          }  
          </>
        } 



        {/* Condicional TikTok */}
        {1+1==32? 
        <TextField
        className='w-100 my-2'
        variant='outlined'
        label='TikTok'
        type='url'
        onChange={handleChange}
        name='confirmNewPassword'
        
        />  
        :   
        <>
        {tiktok==false ?
        <Box className='d-flex justify-content-between w-100 align-items-center'>
        <Typography variant='h5' className='my-3 w-100 text-start'><img src={TiktokIcon} className='logorrsssettings me-2'/> @bemyre</Typography>
        <Button onClick={()=>setTiktok(true)} className='text-white'>Editar<EditIcon className='ms-2'/></Button>
        </Box>
          :
          <Box className='w-100 d-flex'>
            <TextField
            className='w-100 me-2'
            label='Modificar URL Web'
            />
            <Button
            variant='contained'
            >Modificar</Button>
            <Button
            variant='contained'
            className='ms-2'
            onClick={()=>setTiktok(false)}
            >Cancel</Button>
          </Box>
          }  
          </>
        }

        {/* Condicional snapchat */}
        {1+1==32? 
        <TextField
        className='w-100 my-2'
        variant='outlined'
        label='Snapchat'
        type='url'
        onChange={handleChange}
        name='confirmNewPassword'
        
        />  
        :   
         <>
         {snapchat==false ?
        <Box className='d-flex justify-content-between w-100 align-items-center'>
        <Typography variant='h5' className='my-3 w-100 text-start'><img src={SnapchatIcon} className='logorrsssettings me-2'/> @bemyre</Typography>
        <Button onClick={()=>setSnapchat(true)} className='text-white'>Editar<EditIcon className='ms-2'/></Button>
        </Box>
           :
           <Box className='w-100 d-flex'>
             <TextField
             className='w-100 me-2'
             label='Modificar URL Web'
             />
             <Button
             variant='contained'
             >Modificar</Button>
             <Button
             variant='contained'
             className='ms-2'
             onClick={()=>setSnapchat(false)}
             >Cancel</Button>
           </Box>
           }  
           </>
        
        
        
        
        }
        <Button
        variant='contained'
        type='submit'
        className='my-2'
        >Cambiar Contraseña</Button>
      </form>
    </Box>
  )
}

export default UserPasswordManagement