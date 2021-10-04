import React, { useState, useEffect } from 'react';

import Form from './components/Form';
import ContainerImages from './components/ContainerImages';


function App() {
  const [Search, setSearch] = useState("");
  const [Results, setResults] = useState([]);
  const [Page, setPage] = useState(1);
  const [Pages, setPages] = useState(1);
  const [Initial, setInitial] = useState(true)


  useEffect(() => {
    const requestAPI = async () => {
      if (Search === "") {
        return;
      }
      const imagesOnPage = 30;
      const key = "23686731-d7a837d5f9b30045c039ab2a7"
      const url = `https://pixabay.com/api/?key=${key}&q=${Search.replace(" ", "+")}&per_page=${imagesOnPage}&page=${Page}`;
      const response = await fetch(url);
      const results = await response.json();
      setInitial(false);
      setResults(results.hits);
      setPages(Math.ceil(results.totalHits / imagesOnPage));
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" })

    }
    requestAPI();
  }, [Search, Page])

  const previousPage = () => {
    const newPage = Page - 1;

    if (newPage === 0) {
      return;
    }
    setPage(newPage);
  }

  const nextPage = () => {
    const newPage = Page + 1;

    if (newPage > Pages) {
      return;
    }
    setPage(newPage);
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="h1 text-center">PIXABAY</p>
        <br />
        <Form
          setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <ContainerImages Results={Results} />

        {(Page === 1 || Initial) ? null :
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={previousPage}>

            &#8592; Previous
          </button>}
        {(Page === Pages || Initial) ? null :
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={nextPage}>
            Next &#8594;
          </button>}
      </div>
    </div>
  );
}

export default App;
