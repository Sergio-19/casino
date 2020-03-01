import React from "react"
import "./gameCard.scss"
import { ButtonLight } from "../UI/buttonLight/ButtonLight";

export const GameCard = (props) =>{
    return(
        <div className = "gameCard">
        
        <ButtonLight text = {"Играть"} road = "game" />
        
        
        <div className = "gameMask"></div>
        <img src = {props.img} alt = "game"/>
        </div>
    )
} 