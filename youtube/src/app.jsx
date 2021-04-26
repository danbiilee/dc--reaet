import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/pages/main";
import Detail from "./components/pages/detail";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBjIAYGsiQrBH95bOoyt8cNbo7kKX5-7F8"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.items);
        setList(data.items);
      })
      .catch(console.log);
  }, []);

  return (
    <Router>
      <Route path="/" exact>
        <Main list={list} />
      </Route>
      <Route path={`/v=:topicId`}>
        <Detail />
      </Route>
    </Router>
  );
}

export default App;
