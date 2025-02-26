import { useEffect, useState } from 'react'
import Card from './Card'
import Footer from './Footer';

const Newsapp = () => {

  const [search, setSearch] = useState("movie");
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "11a843e5340f48d180c707096c2bce14";
  // const API_KEY = import.meta.env.VITE_API_KEY;
  // console.log('API Key:', import.meta.env.VITE_API_KEY);



  const getData = async() => {
  try{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles)
   }
   catch (error){
    console.error("ERROR fetching news:", error);
   }
   
  };

  const handleInput = (e) =>{
      // console.log(e.target.value);
      setSearch(e.target.value)
  };

  useEffect(()=>{
    getData()
  },[search]);

  
  const userInput = (e) =>{
    setSearch(e.target.value)
  };


  return (
    <div>
      <nav>
        <div>
          <h1>InTrend Times</h1>
        </div>
        <ul>
          <a>All News</a>
          <a>Trending</a>
        </ul>
        <div className='searchBar'>
          <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div>
        <p className='head'>News That Keeps You in the Know</p>
      </div>

      <div className='categoryBtn'>
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
      </div>

      <div>
        {newsData? <Card data={newsData}/> : null}
      </div>
      <Footer/>
    </div>
  )
}

export default Newsapp
