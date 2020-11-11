import React from 'react'
import './demorobo.png'
import './Onerobot.css'

const Onerobot = ({name, id, email}) => {

    return(
        <div className="container">
            <img src={`https://picsum.photos/id/${id}/200/300`} alt="robo pic" width="200px" height="200px"></img>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
}
export default Onerobot;