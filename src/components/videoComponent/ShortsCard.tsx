import {
  Container,
  ImageBanner,
  TextCard,
  TextContainer,
  Title,
  TitleContainer,
} from './shortcardstyle';

interface ShortsProps {
  coverImg: string;
  videoTitle: string;
  views: string;
}

function ShortsCard({ coverImg, videoTitle, views }: ShortsProps) {
  return (
    <>
      <Container>
        <ImageBanner src={coverImg} />
        <TitleContainer>
          <TextContainer>
            <Title>{videoTitle}</Title>
            <TextCard>{views}</TextCard>
          </TextContainer>
        </TitleContainer>
      </Container>
    </>
  );
}

export default ShortsCard;
