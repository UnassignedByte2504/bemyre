import React from 'react'
import singer from '../../img/Music/grande/4.jpg'
export const UserProfile = () => {
  return (
    <div className='Main-Content-Wrapper Bg-purple container Pad-1'>
        <div className='UserHeader'>
          <div className='User-Cover'>
            <video src="https://res.cloudinary.com/djvh4yhoi/video/upload/v1670430289/concierto_hn0fco.mp4"
             type="video/mp4"
              muted
              autoPlay
              loop height={'100%'}
              width={'100%'}/>
          </div>
          <div className='User-Info'>
            <div className='ProfilePictureWrapper border-xl'>
              <img className="ProfilePicture"src={singer} />
            </div>
            <div className='UserName'><h5>Bobby the singer</h5></div>
          </div>
        </div>

    </div>
  ) 
}
