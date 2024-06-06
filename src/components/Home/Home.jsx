import React from 'react'
import './Home.css'
import malepic from "../Home/malemodel.jpg"
const Home = () => {
  return (
    <div className='home-main'>
        <div className="home-left">
            <hr className='hr-1' />
            <h1>I'm Waleed Bin Haider</h1>
            <h3>Front End Developer</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae omnestias cum iusto, maiores aperiam provident minus quibusdam amet incidunt mollitia earum inventore est, quis neque.
            Dolorem consequuntur velit eligendi architecto, dicta optio deleniti voluptates eum reprehenderit nihil quis consequatur excepturi corporis atque natus expedita nam laudantium eveniet asperiores consectetur. Quam nisi quaerat beatae facere assumenda?</p>
            <button>Download CV</button>
        </div>
        <div className="home-right">
          <img src={malepic} alt="" />

        </div>
       
    </div>
    
  )
}

export default Home