import map from "../images/map.jpeg";

export default function Hero(){
    return (
        <section className="hero">
            <img className="map" src={map} alt="map"/>
            <div className="info">
                 <h1 className="title">
                     Online Experiences
                </h1>
                <p className="para">Join unique interactive activities led by 
                    one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    )
}