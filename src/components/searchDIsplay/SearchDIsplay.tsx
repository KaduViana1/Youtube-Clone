import Icon from '../../assets/channel_imgs/chanImg_05.jpg';

import {
  ChannelInfo,
  CoverImg,
  InfoContainer,
  VideoContainer,
  VideoInfo,
  VideoTitle,
} from './searchdisplaystyles';

type VideoProps = {
  title: string;
  card_image: string;
  views: number;
  upload_date: Date;
  description?: string;
};

function SearchDisplay({
  title,
  card_image,
  views,
  upload_date,
  description,
}: VideoProps) {
  function setDescription(description?: string) {
    const last = description?.substring(0, 130).lastIndexOf(' ');
    const desc = description?.substring(0, 130).slice(0, last) + '...';
    return desc;
  }

  return (
    <>
      <VideoContainer>
        <CoverImg alt="Video Cover" src={card_image} />
        <InfoContainer>
          <VideoTitle>{title}</VideoTitle>
          <VideoInfo>
            <>
              {views} Views - {upload_date}
            </>
          </VideoInfo>
          <ChannelInfo>
            <img src={Icon} alt="Channel Icon" />
            <span>Web Dev Simplified</span>
          </ChannelInfo>
          <p>{setDescription(description)}</p>
        </InfoContainer>
      </VideoContainer>
    </>
  );
}

export default SearchDisplay;
