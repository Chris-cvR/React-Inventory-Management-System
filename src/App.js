import './App.css';
import SearchBar from './SearchBar';
import { useState } from 'react';

function App() {

  const [data, setData] = useState({});

  const updateData = (searchParams) => {
    setData(searchParams);
  }

  return (
    <div className="App">
      <SearchBar callback = {updateData}/>
      <p>Name: { "name" in data ? data["name"] : "No Data to display"}</p>
      <p>Name: { "price" in data ? data["price"] : "No Data to display"}</p>
      <p>Name: { "type" in data ? data["type"] : "No Data to display"}</p>
      <p>Name: { "brand" in data ? data["brand"] : "No Data to display"}</p>
    </div>
  ); 
}

export default App;