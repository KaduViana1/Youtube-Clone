import {
  ChannelImage,
  Container,
  ImageBanner,
  TextCard,
  TextContainer,
  Title,
  TitleContainer,
} from './videocardstyle';

interface VideoProps {
  coverImg: string;
  channelImg: string;
  videoTitle: string;
  channelName: string;
  views: string;
}

function VideoCard({
  coverImg,
  channelImg,
  videoTitle,
  channelName,
  views,
}: VideoProps) {
  return (
    <>
      <Container>
        <ImageBanner src={coverImg} />
        <TitleContainer>
          <ChannelImage src={channelImg}></ChannelImage>
          <TextContainer>
            <Title>{videoTitle}</Title>
            <TextCard>{channelName}</TextCard>
            <TextCard>{views}</TextCard>
          </TextContainer>
        </TitleContainer>
      </Container>
    </>
  );
}

export default VideoCard;
