
const API_KEY = '8c0eebbe91c1f17e54e567747469a055';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();

    return json;
}
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Produzidos pela netflix',
                items:await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomentados para você',
                items:await basicFetch(`/trending/all/week?&language=pt-BR&api_key=${API_KEY}`)
            },
            // {
            //     slug: 'toprated',
            //     title: 'Em alta',
            //     items:await basicFetch(`/movie/toprated?language=pt-BR&api_key=${API_KEY}`)
            // },
            {
                slug: 'action',
                title: 'Ação',
                items:await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items:await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items:await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items:await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items:await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
            }
        ];
    },

    getMovieInfo : async (movieId, type)=> {
        let info = {};
        if (movieId){
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
                 
            }
        }
        return info;
    }
}
