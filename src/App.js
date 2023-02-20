import { useState } from 'react';
import './App.css';
import User from './User';
const API_URL = "https://api.github.com";

async function fetchResults(query){
  try {
    const response = await fetch(`${API_URL}/search/users?q=${query}`);
    const json = await response.json();
    return json.items || [];
  }catch(e){
    throw new Error(e);
  }
}

 function App() {

  const [query,setQuery] = useState("");
  const [results, setResults] = useState([]);

  function onChange(event){
    setQuery(event.target.value);
  }

  async function onSubmit(event){
    event.preventDefault();
    const results = await fetchResults(query);   
    setResults(results);
  }

  return (
    <div className="App">
      <h2>Github User Search</h2>
      <form className="search-form" onSubmit={onSubmit}>
        <input id = "search" 
        type="text" 
        value={query}
        onChange={onChange}
        placeholder="Enter username"/>
        <button type="submit" >Search</button>
      </form>
      <h3>Search Results</h3>
      <div className='results'>
        {results.map((user)=> (
        <User key = {user.login}
        avatar ={user.avatar_url}
        url ={user.html_url}
        username= {user.login}/>

      ))}</div>
      
      
    </div>
  );
}

export default App;
