import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { UserContext } from './userContext';

export const VideosContext = createContext({} as any);

export const VideoStorage = ({ children }: any) => {
  const { token } = useContext(UserContext);
  const [videos, setVideos] = useState([{}]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const navigate = useNavigate();

  const createVideo = (
    user_id: string,
    title: string,
    card_image: string,
    description: string
  ) => {
    api
      .post(
        '/videos/create-video',
        {
          user_id,
          title,
          card_image,
          description,
        },
        { headers: { Authorization: token } }
      )
      .then(() => {
        navigate('/');
      })
      .catch(error => console.log('Unable to create video', error));
  };

  const getVideos = (search: string) => {
    api
      .get(`/videos/results?${search}`)
      .then(({ data }) => {
        setVideos(data.videos);
      })
      .catch(error => console.log('Unable to get videos', error));
  };

  const formatter = new Intl.RelativeTimeFormat('en-us', {
    numeric: 'auto',
  });

  const DIVISIONS = [
    { amount: 60, name: 'seconds' },
    { amount: 60, name: 'minutes' },
    { amount: 24, name: 'hours' },
    { amount: 7, name: 'days' },
    { amount: 4.34524, name: 'weeks' },
    { amount: 12, name: 'months' },
    { amount: Number.POSITIVE_INFINITY, name: 'years' },
  ];

  function formatDate(date: any) {
    const newDate: any = new Date();
    let duration = (date - newDate) / 1000;

    for (let i = 0; i < DIVISIONS.length; i++) {
      const division = DIVISIONS[i];
      if (Math.abs(duration) < division.amount) {
        return formatter.format(Math.round(duration), division.name as any);
      }
      duration /= division.amount;
    }
  }

  return (
    <VideosContext.Provider
      value={{
        createVideo,
        getVideos,
        videos,
        searchInputValue,
        setSearchInputValue,
        formatDate,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};
