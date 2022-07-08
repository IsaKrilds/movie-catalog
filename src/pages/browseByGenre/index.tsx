import { MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BannersList from '../../components/BannersList';
import StyledHeader from '../../components/StyledHeader';
import StyledSelectInput from '../../components/StyledSelectInput';
import { useMovies } from '../../hooks/useMovies';
import { Container, FiltersContainer } from './styles';

const BrowseByGenre: React.FC = () => {
  const [allGenres, setAllGenres] = useState() as any;
  const [selectedGenre, setSelectedGenre] = useState(0);
  const [movies, setMovies] = useState() as any;
  const [loading, setLoading] = useState(true);

  const { getAllGenres, getMovies } = useMovies();

  useEffect(() => {
    const handleGenres = async () => {
      try {
        const genres = await getAllGenres();

        setAllGenres(genres);
      } catch (err) {
        console.log(err);
      }
    };

    handleGenres();
  }, []);

  useEffect(() => {
    const handleGenres = async () => {
      try {
        const id = selectedGenre !== 0 ? selectedGenre : undefined;
        const allMovies = await getMovies(id);

        setMovies(allMovies);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    handleGenres();
  }, [selectedGenre]);

  const handleChange = (e: any) => {
    setSelectedGenre(e.target.value);
  };

  if (loading) {
    return null;
  }

  return (
    <Container>
      <StyledHeader />
      <FiltersContainer>
        <StyledSelectInput
          label="Genres"
          size="small"
          value={selectedGenre}
          onChange={handleChange}>
          {allGenres &&
            allGenres.map((item: any, index: number) => (
              <MenuItem value={item.id} key={index}>
                {item.name}
              </MenuItem>
            ))}
        </StyledSelectInput>
      </FiltersContainer>

      <BannersList movies={movies} />
    </Container>
  );
};

export default BrowseByGenre;
