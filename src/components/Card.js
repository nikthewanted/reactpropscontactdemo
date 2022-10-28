import "./card.css"
export default function Card (props) {
    return(
        <div className="card">
            <img src={props.img} alt="card--profile"/>
            <div className="card--container">
                <h2>{props.name}</h2>
                <h4>Telephone:{props.telephone}</h4>
                <h4>Email:{props.mail}</h4>
            </div>
        </div>
     );
};