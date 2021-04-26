import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/pages/main';
import Detail from './components/pages/detail';
import Header from './components/layout/header';

function App() {
  const [list, setList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleChange = e => setSearchKeyword(e.target.value);

  const handleSearch = e => {
    e.preventDefault();
    fetch(
      `${process.env.REACT_APP_BASE_URL}/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&maxResults=25&q=${searchKeyword}`
    )
      .then(res => res.json())
      .then(data => setList(data.items))
      .catch(console.log);
  };

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/videos?key=${process.env.REACT_APP_API_KEY}&part=snippet&chart=mostPopular&maxResults=25`
    )
      .then(res => res.json())
      .then(data => setList(data.items))
      .catch(console.log);
  }, []);

  return (
    <Router>
      <Header
        searchKeyword={searchKeyword}
        handleChange={handleChange}
        handleSearch={handleSearch}
      />
      <Route path="/" exact>
        <Main list={list} />
      </Route>
      <Route path={`/v=:videoId`}>
        <Detail list={list} />
      </Route>
    </Router>
  );
}

export default App;
