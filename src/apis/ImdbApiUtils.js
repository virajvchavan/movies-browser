import * as Constants from './../constants.js';

const callImdbApi = async (endpoint) => {
    let response = await fetch(Constants.IMDB_ENDPINT + endpoint + "api_key=" + Constants.API_KEY);
    if (response.status === 200) {
        return response.json();
    } else {
        console.log("Error calling IMDB API for endpoint: " + endpoint);
        console.log("Response Status: " + response.status);
        return {};
    }
}

export const fetchCategories = async () => {
    let response = await callImdbApi("genre/movie/list?");
    if (response && response.genres) {
        return response.genres;
    } else {
        return [];
    }
}

export const fetchMoviesForACategory = async (categoryId) => {
    let response = await callImdbApi(`discover/movie?with_genres=${categoryId}&`);
    if (response && response.results) {
        return response.results;
    } else {
        return [];
    }
}
