import React from "react";

interface Person {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  
}

interface PersonCardProps {
  person: Person;
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${person.poster_path}`;
  
  return (
    
      <div className="person-card"> 
        <img src={imageUrl} alt={person.title} />
        <h3>{person.title}</h3>
        <p>Release Date: {person.release_date}</p>
        
      </div>
      
  );
};

export default PersonCard;
