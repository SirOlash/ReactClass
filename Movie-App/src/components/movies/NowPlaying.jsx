import React from 'react'
import { useGetNowPlayingMoviesQuery } from '../../service/movieAPI'
import MovieCard from "../../reuseable/MovieCard"


const NowPlaying = () => {

  const data = useGetNowPlayingMoviesQuery()
  console.log(data)
  return (
    <div>
      <MovieCard data={data}/>
       
    </div>
  )
}

export default NowPlaying