
import React ,{useRef, useEffect, useState} from 'react'
import card from '../../assets/card1.jpg'
import './RowPost.css'
import axios from '../../axios'
const imgUrl = import.meta.env.VITE_IMG_URL
import ReactPlayer from 'react-player'

const RowPost = ({title,category}) => {

  const[apiData, setApiData] = useState([])
  const[videoUrl,setVideoUrl]=useState('')
  const[showPlayer,setShowPlayer]=useState(false)
    const postRef= useRef();
    
    const handleWheel=(event)=>{
        event.preventDefault();
        postRef.current.scrollLeft+= event.deltaY
    }
    async function fetchMovieTrailer(movieId) {
      try {
        const response = await axios.get(`movie/${movieId}/videos?language=en-US`);
        const trailers=response.data.results.filter((video)=>video.type==='Trailer'&&video.site==='YouTube')
        if(trailers.length>0){
          setVideoUrl(`https://www.youtube.com/watch?v=${trailers[0].key}`);
          setShowPlayer(true)
        }
      } catch (error) {
        console.log(error.message);
        
      }
    }
async function fetchApiData(){
  try {
    const response= await(axios.get(`movie/${category}?language=en-US&page=4`))
    setApiData(response.data.results)
    console.log("api data fetched"+response.data.results);
    
  } catch (error) {
    console.log(error);
    
  }

}
    useEffect(()=>{
      fetchApiData();
        postRef.current.addEventListener('wheel', handleWheel)
    },[])
  return (
    <div className='row-post'>
      <h1 className='title'>{title?title:"Popular on Netflix"}</h1>
      <div className='posters' ref={postRef} >
        {apiData.map((poster)=>{
        return <img className='poster'
         src={imgUrl+poster.backdrop_path}
          alt="card1"
           key={poster.id} 
           onClick={()=>{fetchMovieTrailer(poster.id)}}/>
      })}
      </div>
      {showPlayer &&(
        <div className='video-player'>
           <button className='close-player' onClick={()=>{setShowPlayer(false)}}>Close</button>
          <ReactPlayer url={videoUrl} controls playing width="100%" height="100%"/>
         
      </div>) }
    </div>
  )
}

export default RowPost
