import "./MovieCard.css";

const MovieCard = ({title, posterURL, rating, releaseDate}) => {
    return (
        <div className="card">
            <img className="poster" src={posterURL} alt={title}/>
            <b className="title">{title}</b>
            <span className="subTitle">
                {rating}
                <span>{releaseDate}</span>
            </span>
        </div>
    );
};

export default MovieCard;
