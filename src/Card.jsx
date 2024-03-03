/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <section className="card-container">
      <img src={props.imageUrl} alt={props.title} className="card-img" />
      <div className="card-info">
        <div className="card-location-div">
          <p>
            <img src="src/assets/Fill-219.png" className="card-location-Icon" />
            <span className="uppercase">{props.location}</span>
            <a href={props.googleMapsUrl} className="card-map-url">
              View On Google Maps
            </a>
          </p>
        </div>
        <h2 className="card-title">{props.title}</h2>
        <p className="bold">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card-description">{props.description}</p>
      </div>
    </section>
  );
};

export default Card;
