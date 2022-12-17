import axios from "axios";

export function getFilms (){
    return new Promise(async (resolve, reject) => {
        axios.get("https://swapi.dev/api/films")
            .then((data) => {
                resolve(data.data.results)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export function getStarships (){
    return new Promise(async (resolve, reject) => {
        axios.get("https://swapi.dev/api/starships")
            .then((data) => {
                resolve(data.data.results)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export function getPeoples (){
    return new Promise(async (resolve, reject) => {
        axios.get("https://swapi.dev/api/people")
            .then((data) => {
                resolve(data.data.results)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export function getPlanets (){
    return new Promise(async (resolve, reject) => {
        axios.get("https://swapi.dev/api/planets")
            .then((data) => {
                resolve(data.data.results)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export function getSpecies (){
    return new Promise(async (resolve, reject) => {
        axios.get("https://swapi.dev/api/species")
            .then((data) => {
                resolve(data.data.results)
            })
            .catch((error) => {
                reject(error)
            })
    })
}