import React from 'react'

function CardComp(movie) {
    let img_path="https://image.tmdb.org/t/p/w500"
  return (
    <>
        <div className="movie text-light">
            <button className="play border-0"><i class="fa-solid fa-play"></i></button>
            <img src={img_path+movie.info.poster_path} className="poster" alt="" />
            <div className="movie-details">
                <div className="box">
                    <div className="original_language">{movie.info.original_language}</div>
                    <div className="">
                        <h3 className="title ">{movie.info.title}</h3>
                        <h4 className="release_date mt-3">{movie.info.release_date}</h4>
                    </div>
                    <p className="rating me-2">{movie.info.vote_average}</p>
                </div>
                <div className="overview">
                    <h1 className=''>Overview</h1>
                    {movie.info.overview}
                </div>
            </div>
        </div>
    </>
  )
}

export default CardComp