export interface MovieParent {
    results: Movie[];
}

export interface Movie {
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    id: number;
    original_language: string;
}