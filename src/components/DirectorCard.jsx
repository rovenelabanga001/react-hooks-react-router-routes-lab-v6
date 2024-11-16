import React from "react";

function DirectorCard() {
  const [directors, setDirectors] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((r) => r.json())
      .then((directors) => setDirectors(directors))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  const renderDirectors = directors.map((director) => {
    return (
      <article key={director.id}>
        <h1>{director.name}</h1>
        <ul>
          {director.movies.map((movie, index) => (
           <li>
             <a href="#" key={index}>
              {movie}
            </a>
           </li>
          ))}
        </ul>
      </article>
    );
  });
  return <>{renderDirectors}</>;
}

export default DirectorCard;
