import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { DialogContentText, DialogContent, Rating } from '@mui/material';
import {
  Dialog,
  ImageContainer,
  DescriptionContainer,
  AboutTitle,
  StyledRow,
  StyledDialogText,
  StyledColumn,
  StyledTitle,
} from './styles';
import { useMovies } from '../../hooks/useMovies';
import { Close } from '@material-ui/icons';

interface Props {
  open: boolean;
  handleDialog: () => void;
  movieInfo: any;
}

interface GenreModel {
  id: string;
  name: string;
}

const StyledDialog: React.FC<Props> = ({ open, handleDialog, movieInfo }) => {
  const [credits, setCredits] = useState() as any;
  const [filteredGenres, setFilteredGenres] = useState() as any;
  const [loading, setLoading] = useState(true);

  const imageURL = movieInfo.backdrop_path
    ? `https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`
    : 'https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/2496/not-found-image-15383864787lu.jpg';

  const { getCredits, getAllGenres } = useMovies();

  const handleGenres = (allGenres: GenreModel[]) => {
    return allGenres.filter((item: GenreModel) => movieInfo.genre_ids.includes(item.id));
  };

  useEffect(() => {
    if (open) {
      const handleRequest = async () => {
        try {
          const creditsById = await getCredits(movieInfo.id);
          await getAllGenres().then((item: any) => {
            const filtered = handleGenres(item);
            setFilteredGenres(filtered);
          });

          setCredits(creditsById);

          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };

      handleRequest();
    }
  }, [open]);

  if (loading) {
    return null;
  }

  const formatedDate = movieInfo.release_date
    ? format(new Date(movieInfo.release_date), 'yyyy')
    : '';

  return (
    <Dialog
      open={open}
      onClose={handleDialog}
      scroll="body"
      maxWidth="sm"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description">
      <StyledTitle>
        <StyledRow style={{ justifyContent: 'space-between' }}>
          {movieInfo.original_title}
          <Close onClick={handleDialog} />
        </StyledRow>
      </StyledTitle>

      <DialogContent>
        <ImageContainer $imageLink={imageURL} />
        <DescriptionContainer>
          <StyledColumn>
            <StyledRow>
              <DialogContentText>
                <b>{formatedDate}</b>
              </DialogContentText>
            </StyledRow>
            <StyledRow>
              <Rating
                value={movieInfo.vote_average / 2}
                precision={0.2}
                readOnly
                size="small"
              />
            </StyledRow>
            <StyledRow>
              <StyledDialogText>Vote counts:</StyledDialogText>
              <DialogContentText>{movieInfo.vote_count}</DialogContentText>
            </StyledRow>
            <StyledRow>
              <StyledDialogText>Popularity:</StyledDialogText>
              <DialogContentText>{movieInfo.popularity.toFixed(1)}</DialogContentText>
            </StyledRow>
          </StyledColumn>

          <StyledColumn style={{ width: '50%', alignItems: 'flex-end' }}>
            <div>
              <StyledRow style={{ alignItems: 'flex-start' }}>
                <StyledDialogText>Cast:</StyledDialogText>
                <DialogContentText>
                  {credits.cast.map((item: any, index: number) => {
                    if (index < 3) {
                      return `${item.name}, `;
                    }
                  })}
                  more
                </DialogContentText>
              </StyledRow>
              <StyledRow>
                <StyledDialogText>Genres:</StyledDialogText>
                <DialogContentText>
                  {filteredGenres.map((item: any) => `${item.name}, `)}
                </DialogContentText>
              </StyledRow>
            </div>
          </StyledColumn>
        </DescriptionContainer>

        <DialogContentText tabIndex={-1}>{movieInfo.overview}</DialogContentText>

        <AboutTitle>
          About <b>{movieInfo.original_title}</b>
        </AboutTitle>
        <DescriptionContainer>
          <StyledColumn style={{ alignItems: 'flex-start' }}>
            <StyledRow style={{ alignItems: 'flex-start' }}>
              <StyledDialogText>Cast:</StyledDialogText>
              <DialogContentText>
                {credits.cast.map((item: any, index: number) => {
                  if (index < 10) {
                    return `${item.name}, `;
                  }
                })}
                ...
              </DialogContentText>
            </StyledRow>

            <StyledRow>
              <StyledDialogText>Genres:</StyledDialogText>
              <DialogContentText>
                {filteredGenres.map((item: any) => `${item.name}, `)}
              </DialogContentText>
            </StyledRow>
          </StyledColumn>
        </DescriptionContainer>
      </DialogContent>
    </Dialog>
  );
};

export default StyledDialog;
