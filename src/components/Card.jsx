import React from "react"
import { FaStar} from "react-icons/fa";

export default function Card(props) {
    console.log(props);
     let badgeText
     if(props.i.openSpots === 0 ){
        badgeText = "SOLD OUT"
     }else if(props.i.location === "Online"){
        badgeText= "Online"
     }
    return (
        <div className="card">
        <div className="overflow">
        {badgeText && <div className="card--badge"> {badgeText}</div>}
            <img src={`../images/${props.i.coverImg}`} className="card--image" />
            </div>
            <div className="card--stats">
            <span><FaStar color="red"/></span>
                <span>{props.i.stats.rating}</span>
                <span className="gray">({props.i.stats.reviewCount}) • </span>
                <span className="gray">{props.i.location}</span>
            </div>
            <p>{props.i.title}</p>
            <p><span className="bold">From ${props.i.price}</span> / person</p>
           
        </div>
    )
}
