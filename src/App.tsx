
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonList from './PersonList';
import GenreFilter from './Filter';
import { GenreFilterProps } from './Filter';



interface Person {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const App: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [selectedGenres] = useState<number[]>([]);

  const handleGenreChange = () => {
    // Lógica para manejar cambios en los géneros seleccionados
    // Puedes actualizar el estado de selectedGenres aquí
  };

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const apiKey = '27a9be0637d87bcec6bd25a6c0f97a70';
        const apiUrl = 'https://api.themoviedb.org/3/discover/movie';

        const response = await axios.get(apiUrl, {
          params: {
            api_key: apiKey,
            with_genres: selectedGenres.join(','), // Convierte el array en una cadena separada por comas
          },
          headers: {
            accept: 'application/json',
          },
        });

        setPeople(response.data.results);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };

    fetchPeople();
  }, [selectedGenres]);

  const genreButtons = [
    { genre_ids: 28, name: 'Action' },
    { genre_ids: 12, name: 'Adventure' },
    { genre_ids: 16, name: 'Animation' },
    // Agrega más géneros según tus necesidades
  ];

  // Proporciona una estructura que cumpla con GenreFilterProps
  const genreFilterProps: GenreFilterProps = {
    genres: genreButtons,
    selectedGenres: selectedGenres,
    onGenreChange: handleGenreChange,
    genre_ids: [], // ¡Asegúrate de proporcionar un valor para genre_ids!
  };

  return (
    <div className='app'>
      <h1>Movie Challenge</h1>
      <GenreFilter {...genreFilterProps} />
      <PersonList people={people} filterByGenre={handleGenreChange} />
    </div>
  );
};

export default App;
