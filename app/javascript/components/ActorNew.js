import React from "react";
import { render } from "react-dom";
export default (props) =>  {
    const { actor } = props;
    console.log(actor);
    const { name } = actor;
    const defaultName = name ? name : "";
render(){
    if (!(actor && actor.name)){
        return <div> loading... </div>;
    } else{

        return (
            <React.Fragment>
              <h1>Actor New</h1>
              {errors && errors}
              <form action={`/actors/create`} method="post">
                <p>Name</p>
                <input defaultValue={defaultName} name="name" type="text" />
                <br />
                <button type="submit">add</button>
              </form>
            </React.Fragment>
          );
    }

}
  
}