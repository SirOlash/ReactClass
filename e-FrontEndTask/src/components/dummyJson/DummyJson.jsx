const NowPlaying = () => {

  const data = useGetNowPlayingMoviesQuery()
  console.log(data)
  return (
    <div>
      <MovieCard data={data}/>
       
    </div>
  )
}