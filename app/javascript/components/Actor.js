import React from "react"

export default (props) => {
    const {actor} = props
    const renderMovie = () => {
        return( 
          <div className='actor-container'>
            <h1>{actor.name}</h1>
          </div>
        )
    }
    return(
        <>
          <h1>Clint Eastwood
          </h1>
          <div className='actor-container'>
          {renderMovie()}
          </div>
        </>
   )
}  