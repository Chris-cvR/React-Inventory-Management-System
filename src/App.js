import './App.css';
import Info from "./info.js";

function App() { //Main component for our application
  return (
    <div className="App">
      <Info />
      <AddItem />
    </div>
  ); 
}

function AddItem() {
  const value = "Chris is Great!";

  return (
    <form>
      <label for="text-form">Type Somthing: </label>
      <input type="text" value={value} id="text-form" />
    </form>
  )
}


export default App;
