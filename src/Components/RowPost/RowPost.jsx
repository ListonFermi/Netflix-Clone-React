import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from 'axios'
import tmdb from '../../../helpers/tmdbURLs.js'

function RowPost({rowTitle, tag}) {

    const [movie, setMovie] = useState([])

    async function fetchData(){
        try {
            const response = await axios.get(tmdb.baseURL+tmdb[tag])
            setMovie(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData(tag)
    },[])


    return (
        <div className='row'>
            <h1>{rowTitle}</h1>
            <div className="row-content">
                {movie?.map((current)=>{
                    return <img src={tmdb.imageURLSmall+current.backdrop_path} alt=""/>
                } ) }
            </div>
        </div>
    )
}

export default RowPost
