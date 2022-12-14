import React from 'react'

// .

export const MainCard = ({ImgSrc}) => {
  return (
    <div className='MainCard'>
      <div className='CardImg-Container'>
        <img className="CardImg"src={ImgSrc} alt='CardImg'/>
        <h3 className='ImgTitle'>Img title</h3>
      </div>
      <div className='CardInfo'>
        <h4>Card Title</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  )
}

