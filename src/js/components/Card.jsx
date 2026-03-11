import react from "react";

const Card = ({url,title, description}) => {

    return (
   
            <div className="card mycard">
                <img src={url} className="card-img-top" alt={title}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
   
        
    )
}

export default Card