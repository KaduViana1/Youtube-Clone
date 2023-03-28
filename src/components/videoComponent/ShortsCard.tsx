import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
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
  shortTitle: string;
  views: string;
}

function ShortsCard({ coverImg, shortTitle, views }: ShortsProps) {
  const { darkMode } = useContext(UserContext);

  return (
    <>
      <Container>
        <ImageBanner src={coverImg} />
        <TitleContainer>
          <TextContainer>
            <Title darkMode={darkMode}>{shortTitle}</Title>
            <TextCard>{views}</TextCard>
          </TextContainer>
        </TitleContainer>
      </Container>
    </>
  );
}

export default ShortsCard;
