import React from "react";

class Info extends React.Component {
    render() {
        const title = "This is my title.";
        const showTitle = true;

        if (showTitle){
            return ( //Wrapping the children inside the div component
            <div>
              <h1>{title}</h1>
              <p>Manage your stuff.</p>
            </div>
           );
          } else {
            return <p>Empty</p>
          }
    }
}

//What we have constructed here now is a React Class, which uses
//the React.Component and render function with the function inside it


export default Info;