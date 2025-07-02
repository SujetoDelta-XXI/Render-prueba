const CardList = ({ movies }) => {
    return (
        <div className="row">
            {movies.map(movie => (
                <div className="col-md-3 mb-4" key={movie.id}>
                    <div className="card">
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.title} 
                            className="card-img-top" 
                        />
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text">{movie.overview.slice(0, 128)}...</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardList;