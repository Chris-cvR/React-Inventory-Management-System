import './App.css';
import {PropTypes} from "prop-types";
import Info from "./info.js";

function App() { //Main component for our application
  return (
    <div className="App">
      <Info />
      <AddItem text="Chris" />
      <AddItem text="Josh" />
      <AddItem />
    </div>
  ); 
}

function AddItem(props) { //Props are constructed like JS objects
  return (
    <form>
      <label for="text-form">Type Somthing: </label>
      <input type="text" value={props.text} id="text-form" />
      <p>{props.number}</p>
    </form>
  )
}

AddItem.defaultProps = {
  number:33,
  text: "Default"
}

AddItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
} 
//This is not enforcing that it is supposed to be this way
//However it provides a warning in the console that its the wrong props


export default App;