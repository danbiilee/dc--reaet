import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/pages/main';
import Detail from './components/pages/detail';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/videos?key=${process.env.REACT_APP_API_KEY}&part=snippet&chart=mostPopular&maxResults=25`
    )
      .then((res) => res.json())
      .then((data) => {
        setList(data.items);
      })
      .catch(console.log);
  }, []);

  return (
    <Router>
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
