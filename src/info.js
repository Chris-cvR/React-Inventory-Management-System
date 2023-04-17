import React from "react";

class Info extends React.Component {
    constructor(props){
        super(props); //Very important to call super, as you are calling from the class you are inheriting from
        console.log(props)
    
    }

    render() {
        const title = this.props.title;
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


//Default props for class components
Info.defaultProps = {
    title: "Default",
}

export default Info;