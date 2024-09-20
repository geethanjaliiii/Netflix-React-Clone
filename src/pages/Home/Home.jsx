import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import RowPost from '../../components/RowPost/RowPost'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='container'>
      <NavBar/>
      <Banner/>
      <RowPost title={"Now Playing"} category={"top_rated"}/>
      <div className='more-cards'>
      <RowPost  category={"popular"}/>
      <RowPost title={"Only on Netflix"} category={"now_playing"}/>
      <RowPost title={"Upcoming"} category={"top_rated"} />
      <RowPost title={"Top Picks for You"} category={"popular"}/>
      </div>
     <Footer/>
    </div>
  )
}

export default Home
