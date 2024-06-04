import React, { useState } from 'react'
import "./style/index.css"
import Table from './Table'

const Card = () => {
    const [isActive, setActive] = useState(false)

    const handleClick = () => {
        setActive(true)
    }

    return (
        <div style={{ width: "50%", margin: "auto" }}>
            <h1 className='text-xl my-6' >
                Task 1: When I click on the image, a table (Other React component) should be rendered below the image.
            </h1>
            <h1 className='text-xl my-6' >
                Task 2: When I hover over the image, the details (description) of the image should appear on the back side of the image.


            </h1>
            <div onClick={handleClick} className={`${isActive ? "flip-box" : ""}`}>
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s"
                            alt="Paris"
                            style={{ width: "340px", height: "200px" }}
                        />
                    </div>
                    <div className="flip-box-back">
                        Lorem ipsum dolor sit amet consectetur
                        Lorem ipsum dolor sit amet consectetur
                        Lorem ipsum dolor sit amet consectetur
                        Lorem ipsum dolor sit amet consectetur
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                </div>
            </div>
            {isActive ? (<Table />) : ""}
        </div>
    )
}

export default Card
