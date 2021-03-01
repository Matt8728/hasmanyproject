// import React from "react"

// export default (props) => {
//     const {actors} = props
//     const renderMovies = () => {
//       return actor.map(actor => {
//         return( 
//           <div className='actor-container'>
//             <h1>{actor.name}</h1>
//             <a href={`/actor/${actor.id}`}>show</a>
//           </div>
//         )
//       })
//     }
//     return(
//         <>
//           <h1>Clint Eastwood</h1>
//           <div className='actor-container'>
//           {renderMovies()}
//           </div>
//         </>
//    )
// }  


import React from "react";

export default (props) => {

  const { actors} = props;

  const renderActors = () => {
    return actors.map(actor => {
      return (
        <div>{actor.name}</div>
      )
      //(
      // <div key={`actor-${actor.id}`}>
      //   <h3>{actor.title}</h3>
      //   <a href={`${actor.id}`}>show</a>
      //   <a href={`${actor.id}/edit`}>edit</a>
      //   <a href={`delete/${actor.id}`} data-method="delete">
      //      delete
      //   </a>
      // </div>
    //);
      })
  }

  return (
    <>
    <h1>Actors</h1>
    <div>
      {renderActors()}
    </div>
    </>
    )

  };

  {/* const renderActors = () => {
    return actors
    .map((actor) => {
      return renderActor(actor);
    });
  };

  return (
    <>
      <h1>actors
         here {actors
      .length}</h1>
      <a href='/actors
      /new'>New Actor</a>
      {renderActors()}
    </>
  );

};
export default Actor; */}