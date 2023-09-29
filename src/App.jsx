import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import  webfontloader from "webfontloader"
import Yt_dl from './components/Yt_dl'
import Card from './components/Card'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let Instru = [ 
  {
    img: "https://cdn-icons-png.flaticon.com/128/2356/2356708.png",
    text: "Paste link Twitter Link into the search box."
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/1481/1481125.png",
    text: "Click on Get Video"
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/9502/9502265.png",
    text: "if the link is valid, download button will show"
  },
]


function App() {
  
  webfontloader.load({
    google: {
      families: ["Montserrat"]
    },
  })  
  document.title ="X video-dl"
  return (
    <div className="app">
      <ToastContainer/>
      <nav>
        <div className="left">
          X video-dl
        </div>
        <div className="right">
          <a href="#">Link</a>
          <a href="#">Link</a>
          <a href="#">Link</a>
        </div>
      </nav>

      <h1>
        X / Twitter video downloader
      </h1>
      <p className="desc">Download Twitter videos in MP4 for free</p>
      <Yt_dl/>
      
      <div className="Instructions">
        {Instru.map(({text,img},index)=>{
          return(
            <Card text={text} img={img}  key={index} />
          )
        })}
      </div>
      <Footer/>
    </div>
  )
}

export default App