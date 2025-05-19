
import marker from "../assets/marker.png"


export default function Entry(props){

  return(
    <div className="entry-container">
      <div className="entry">
      <div className="image">
        <img src={props.img.src} alt={props.img.alt}/>
      </div>
      <div className="entry-info">
        <div className="entry-title">
          <img src={marker} alt="marker" />
          <h3>{props.country}</h3>
          <a href="">View on Google Maps</a>
        </div>
        <h2>{props.title}</h2>
        <h4>{props.date}</h4>
        <p>{props.content}</p>
      </div>
      </div>  
    </div>
    
  )
}