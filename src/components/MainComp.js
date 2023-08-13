import React from 'react'
import CardComp from './CardComp'
import { useState } from 'react'
import { useEffect } from 'react'
import NavbarComp from './NavbarComp'
import FooterComp from './FooterComp'

function MainComp() {

    let base_url = 'http://api.themoviedb.org/3'
    let API_key = '&api_key=db95773a7fb212ba790d71f6adac0e7e'
    let url = base_url + '/discover/movie?sort_by=popularity.desc' + API_key

    const [movieData, setData] = useState([])
    const [url_set, setUrl] = useState(url)
    const [search, setSearch] = useState('')
    
    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            setData(data.results)
            console.log(data.results) 
        })
    },[url_set])

    const searchMovie = (evt) => {
        if(evt.key==='Enter'){
            url = base_url + '/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query=' + search
            setUrl(url)
            setSearch('')
        }
    }

    const getDataForNav = (movieType) => {
        if(movieType==="Popular")
        {
            url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
        }
        if(movieType==="Theatre")
        {
            url=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+API_key;
        }
        if(movieType==="Kids")
        {
            url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_key;
        }
        if(movieType==="Drama")
        {
            url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_key;
        }
        if(movieType==="Comedie")
        {
            url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key;
        }
        setUrl(url);
    }

  return (
    <>
        <NavbarComp getDataForNav={getDataForNav} searchMovie={searchMovie} search={search} setSearch={setSearch}/>

        <div className='movie-container'>
            {
                (movieData===0)?<p>Not Found</p>:movieData.map((res,pos)=>{
                    return(
                        <CardComp info={res} key={pos} />
                    )
                })
            }
        </div>

        <FooterComp />
    </>
  )
}

export default MainComp