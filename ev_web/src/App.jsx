import {  useEffect, useState } from "react"
import Background from "./Components/background/background";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/hero/hero";



 const App = () => {
  let heroData=[
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"give in to",text2:"your passions"},
  ]
  const [heroCount,setHeroCount]=useState(1);
  const [playStatus,setPlayStatus]=useState(false);
  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
  },3000);
},[]);
  return (
    
   <div>
<Background playStatus={playStatus} heroCount={heroCount}/>
<Navbar />
<Hero setPlayStatus={setPlayStatus} heroData={heroData[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus}/>
   </div>
  )
}

export default App;