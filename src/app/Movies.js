export class Movies {

    constructor(type) {
        this.apiKey = '13a9810709396d46190a426868190652'
        this.type = type;
    }

    async getMovies() {
        const URI = `https://api.themoviedb.org/3/movie/${this.type}?api_key=${this.apiKey}&language=es-ES`;
        const data = await axios.get(URI);
        return data;
    }

    async changeMovies(type) {
        this.type = type;
    }

}