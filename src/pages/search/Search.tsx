import { useEffect, useContext } from 'react';
import { VideosContext } from '../../context/videosContext';
import { Container, Filters, Separator } from './searchstyles';
import SearchDisplay from '../../components/searchDIsplay/SearchDIsplay';
import { UserContext } from '../../context/userContext';
import FiltersIcon from '../../assets/filters.svg';
import FiltersIcon_D from '../../assets/filters_D.svg';

type PropsTypes = {
  searchParams: string;
  setSearchParams: React.Dispatch<React.SetStateAction<any>>;
  search: string;
};

function Search({ searchParams, setSearchParams, search }: PropsTypes) {
  const { getVideos, searchInputValue, videos, formatDate } =
    useContext(VideosContext);
  const { darkMode } = useContext(UserContext);
  search = searchInputValue;

  const uploadDate = (videoDate: Date) => {
    return new Date(videoDate);
  };

  useEffect(() => {
    setSearchParams({ search: search });
    getVideos(searchParams);
  }, [searchParams]);

  type VideoProps = {
    video_id: string;
    user_id: string;
    title: string;
    card_image: string;
    views: number;
    upload_date: Date;
    description: string;
  };

  return (
    <Container>
      <Filters darkMode={darkMode}>
        <img src={darkMode ? FiltersIcon_D : FiltersIcon} alt="Filters" />{' '}
        Filters
      </Filters>
      <Separator darkMode={darkMode}></Separator>
      {videos.map((video: VideoProps) => (
        <SearchDisplay
          key={video.video_id}
          title={video.title}
          card_image={video.card_image}
          views={video.views}
          upload_date={formatDate(uploadDate(video.upload_date))}
          description={video.description}
        ></SearchDisplay>
      ))}
    </Container>
  );
}

export default Search;
