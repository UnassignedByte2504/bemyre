import React from 'react'
import {MainCard} from './card/MainCard'
import Img0 from "../../img/Music/grande/0.jpg"
import Img1 from "../../img/Music/grande/1.jpg"
import Img2 from "../../img/Music/grande/2.jpg"
import Img3 from "../../img/Music/grande/3.jpg"
import Img4 from "../../img/Music/grande/4.jpg"
import Img5 from "../../img/Music/grande/5.jpg"


export const Main = () => {

  const ImgUrl = [Img0, Img1, Img2, Img3, Img4, Img5]

  const renderCards = ({amount}) => {

    let cards = []
    for (let i = 0; i < amount; i++) {
      cards.push(<MainCard key={i}
         IDNUMBER={i}
         ImgSrc={ImgUrl[i]}
         />)

      
    }
    return cards
  }



  return (
    <div>
      
      <div className='sticky-top mb-2 Bg-purple' ><h1>Hello world</h1>
      <hr /></div>
      <main className='Main-Content'>
        {renderCards({amount: 5})}
      </main>

    </div>
  )
}
