// GenreFilter.tsx
import React from "react";

interface Genre {
  
  name: string;
  genre_ids: number;
}

export interface GenreFilterProps {
  genres: Genre[];
  selectedGenres: number[];
  onGenreChange: (genre_ids: number) => void;
  genre_ids: number[];
}

const GenreFilter: React.FC<GenreFilterProps> = ({
  genres,
  selectedGenres,
  onGenreChange,
}) => {
  return (
    <div className="genre-filter">
      <h2>Filter by Genre</h2>
      {genres.map((genre) => (
        <button
          key={genre.genre_ids}
          className={selectedGenres.includes(genre.genre_ids) ? "active" : ""}
          onClick={() => onGenreChange(genre.genre_ids)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
