import CardList from "../components/CardList";
import { getMovies } from "../services/movies.service";
import { useEffect, useState } from "react";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const moviesData = await getMovies();
            setMovies(moviesData);
        };
        fetchMovies();
    }, []);

    return (
        <section className="bg-dark text-white py-5">
            <div className="container">
                <h2>Hola Mundo</h2>
                <CardList movies={movies} />
            </div>
        </section>
    )
}

export default Home;