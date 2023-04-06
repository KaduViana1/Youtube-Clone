import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import {
  BannerContainer,
  ChannelImage,
  Container,
  ImageBanner,
  TextCard,
  TextContainer,
  Title,
  TitleContainer,
  VideoDuration,
} from './videocardstyle';

interface VideoProps {
  coverImg: string;
  channelImg: string;
  videoTitle: string;
  channelName: string;
  views: string;
  videoDuration?: string;
}

function VideoCard({
  coverImg,
  channelImg,
  videoTitle,
  channelName,
  views,
  videoDuration,
}: VideoProps) {
  const { darkMode } = useContext(UserContext);

  return (
    <>
      <Container>
        <BannerContainer>
          <ImageBanner src={coverImg} />
          <VideoDuration>{videoDuration}</VideoDuration>
        </BannerContainer>
        <TitleContainer>
          <ChannelImage src={channelImg}></ChannelImage>
          <TextContainer>
            <Title darkMode={darkMode}>{videoTitle}</Title>
            <TextCard>{channelName}</TextCard>
            <TextCard>{views}</TextCard>
          </TextContainer>
        </TitleContainer>
      </Container>
    </>
  );
}

export default VideoCard;
