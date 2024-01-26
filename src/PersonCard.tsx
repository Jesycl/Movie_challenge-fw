//import React from "react";


export interface PersonProps {
    title:string;
    poster_path:string;
    release_date:string;

}

function PersonCard({ poster_path, title, release_date }: PersonProps) {

    const baseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <section className="person-card">
      <img src={`${baseUrl}${poster_path}`} alt="" />
      <h4>{title}</h4>
      <p>{release_date}</p>
    </section>
  );
}
 export default PersonCard