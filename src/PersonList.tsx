// PersonList.tsx
import React from "react";
import PersonCard from "./PersonCard";

interface Person {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

interface PersonListProps {
  people: Person[];
  filterByGenre: (genreId: number) => void;
}

const PersonList: React.FC<PersonListProps> = ({ people }) => {
  return (
    <div className="person-list">
      {people.map((person) => (
        <div key={person.id} className="person-card-container">
          <PersonCard person={person} />
        </div>
      ))}
    </div>
  );
};

export default PersonList;
