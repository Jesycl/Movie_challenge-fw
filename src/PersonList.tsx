//import React from "react";
import PersonCard, { PersonProps } from "./PersonCard";

interface ApiResponse {
    page: number;
    results: PersonProps[];
}

interface PersonListProps {
    apiResponse: ApiResponse
}

function PersonList({ apiResponse }: PersonListProps) {
  return (
    <section className="person-list-container">
      {apiResponse.results.map((person) => (
          <PersonCard
            key={person.title}
            title={person.title}
            poster_path={person.poster_path}
            release_date={person.release_date}
          />
        ))}
    </section>
  );
}

export default PersonList;
