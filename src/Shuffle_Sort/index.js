import React from 'react'
import './style.scss'

const getCard = (value) => <div key={value} className={`card card-${value}`} >{value}</div>

const getCards = (colors) => colors.map((color) => getCard(color))

const Index = () => {
  const [color, setColor] = React.useState([1,2,3,4,5,6,7,8,9])
  console.log('colors', color)

  const shuffleArray = () => {
    for (let i = 0; i < color.length-1; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [color[i], color[j]] = [color[j], color[i]]
    }
    setColor([...color])
  }

  const sortArray = () => setColor([...color.sort((a,b) => a-b)])
  
  return (
    <div className='container'>
      <div className="left">
        <div className="top">
          {getCards(color)}
        </div>
        <div className="bottom">
          Shuffle and Sort by Vinayak K
        </div>
      </div>
      <div className="right">
        <button  onClick={() =>shuffleArray()} className='button'>Shuffle</button>
        <button onClick={() => sortArray()} className='button'>Sort</button>
      </div>
    </div>
  )
}

export default Index