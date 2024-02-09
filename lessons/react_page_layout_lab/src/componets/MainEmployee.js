import React from 'react'

export default function MainEmployee(props) {
 const info=Object.keys(props.person)?.map((key, index)=>{
    return(
    <>
        <h4>{key}: </h4>
        <p> {props.person[key]}</p>  
    </>
    )
 })
    
 
    return (
    <div className='info'>{info}</div>
  )
}
