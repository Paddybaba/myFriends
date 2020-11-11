import React from 'react'
import Onerobot from './Onerobot.js'
import './Onerobot.css'

const CardArray = ({image}) =>
{
    const allNames = image.map((names, index) => {
            return (
                <div>
                    <Onerobot   
                        key = {index}
                        name={image[index].name}
                        id = {image[index].id}
                        email={image[index].email}
                    />
                </div>
                
            );
    })
    return(
        allNames
    );
}

export default CardArray;