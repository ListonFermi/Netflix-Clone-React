import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from 'axios'
import tmdb from '../../../helpers/tmdbURLs'

function Banner() {

    const [movie, setMovie] = useState()

    async function fetchData(){
        try{
            const response = await axios(tmdb.baseURL+tmdb.trending)

            /*response will have data of 20 movies. We are choosing one random among that 20*/
            const randomIndex =  Math.floor(Math.random()*100)%20 
            setMovie(response.data.results[randomIndex])
            console.log(response.data.results[randomIndex])
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className="banner" style={{backgroundImage: `url(${tmdb.imageURLOriginal+movie?.backdrop_path})`}}>
            <div className="title">
                <h1>{movie?.original_title}</h1>
                <p>{movie?.overview}</p>
                <button>Play</button>
                <button>More Info</button>
            </div>
        </div>
    )
}

export default Banner
