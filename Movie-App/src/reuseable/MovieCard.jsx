import React from 'react'

const ImageBaseUrl = "https://image.tmdb.org/t/p/w500";

const MovieCard = (props) => {
  const {data, isLoading} = props.data
    console.log(data)  
    console.log(isLoading)

  if(isLoading){
    return (
      <div>Loading...</div>
    )
  }
    
  return (
    <div>
      {
        data?.results.map((result) => (
          <div key={result.id}>
            <img src={`${ImageBaseUrl}${result.poster_path}`} alt="image" />
            <p>{result.overview}</p>
            <p>{result.title}</p>
            <p>{result.vote_count}</p>
            <p>{result.vote_average}</p>
          </div>
        ))
      }
    </div>
  )
   
}   
  

export default MovieCard;