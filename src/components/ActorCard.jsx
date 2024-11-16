import React from "react";

function ActorCard() {
  const [actors, setActors] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((r) => r.json())
      .then((actors) => {
        setActors(actors);
      })
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  const renderActors = actors.map((actor) => {
    return (
      <article key={actor.id}>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </article>
    );
  });
  return <>{renderActors}</>;
}

export default ActorCard;
