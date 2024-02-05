import React from 'react'
import { useParams } from 'react-router-dom'

const OneMovie = ({getDataFrom}) => {
  const para = useParams();
  const OneMov= getDataFrom.filter((film)=> film.id == para.id)[0]; 
  console.log(OneMov)
  console.log()
  return (
    <div>
    <h1>{OneMov.title}</h1> 
    <img src={OneMov.image} alt="" />
    <p>{OneMov.decr}</p> 
    <h4>{OneMov.stream}</h4> 
    
    </div>
  )
}

export default OneMovie
