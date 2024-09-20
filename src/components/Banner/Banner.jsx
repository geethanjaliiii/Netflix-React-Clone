import React, { useEffect, useState } from "react";
import axios from "../../axios"; //this is the custom axios we created, nit the installed one
import "./Banner.css";
const imgUrl = import.meta.env.VITE_IMG_URL

const Banner = () => {
  //array of trending movies will store in  'trending'
  const [trending, setTrending] = useState();

  //function to fetch
  const fetchTrendingMovie = async function () {
    try {
      // const response = await axios.get("trending/all/day?language=en-US");
      const response = await axios.get("discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc");
      
      //selecting random movie to display
      const randomMovie =
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ];

      setTrending(randomMovie);
      console.log(randomMovie);
    } catch (error) {
      console.log("error fetching data", error);
    }
  };

  //FETCH MOVIE DATA ON COMPONENT MOUNT------------------
  useEffect(() => {
    fetchTrendingMovie();
  }, []);

  return (
    <div className="banner" style={{backgroundImage: `url(${trending?imgUrl+trending.backdrop_path:""})`}}>
      <div className="content">
        <h1 className="banner-title">{trending ? trending?.title: "Movie Name"}</h1>

        <h1 className="description">  {trending?trending?.overview: "overview"}  </h1>
        <div className="buttons">
          <button className="button"><i className="fa-solid fa-play"></i>Play</button>
          <button className="button">More Info</button>
        </div>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
};

export default Banner;
