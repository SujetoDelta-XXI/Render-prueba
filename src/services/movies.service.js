import axios from 'axios';

export const getMovies = async () => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular',
        {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
            }
        }
    );
    return response.data.results;

    } catch(error) {
        console.error("Hubo un error", error);
        return [];
    }
};