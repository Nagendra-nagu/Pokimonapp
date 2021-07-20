import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from "./Card";
import Footer from "./Footer";

function App() {
const [num,setnum]=useState()
const [realnum,setrealnum]=useState(1)
const [allpoki,setallpoki]=useState([])


useEffect(()=>{
  function getpoki(value) {
    value.forEach(async (val) => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${val.name}`
      );
      const data = await res.json();
      setallpoki((prevpoki) => [...prevpoki, data]);
    });
  }
  
  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${realnum}&offset=0`).then((res)=>{
    // console.log(res.data.results);
    getpoki(res.data.results);
  })

document.getElementById('submit').addEventListener('submit',(e)=>{
e.preventDefault();
document.getElementById('main-cardid').innerHTML='<h1 id="loading-fake">loading</h1>'
let data=e.target[0].value;
setrealnum(data)
})
},[realnum])

const chage=(e)=>{
setnum(e.target.value);
}

  return (
    <>
      <div className='form'>
      <form id='submit'>
    <input type='text' placeholder='How many pokimon do you want?' onChange={chage} id='change' value={num}/>
    <input type='submit' value='Search' id='btn' />
    </form>
      </div>


    <div className='main-card' id='main-cardid'>
      {
        allpoki.map((val)=>
        
        <Card 
          name={val.name}
          move={val.moves.length}
          height={val.height}
          weight={val.weight}
          exp={val.base_experience}
          img={val.sprites.other.dream_world.front_default}
          id={val.id}
          type={val.types[0].type.name}

        />
        )
      }
      </div>
     <Footer />
    </>
  );
}

export default App;
