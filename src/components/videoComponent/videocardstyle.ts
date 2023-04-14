import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  cursor: pointer;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 210px;
  border-radius: 12px;
  position: relative;
  margin-bottom: 10px;
`;

export const VideoDuration = styled.span`
  border-radius: 5px;
  padding-inline: 4px;
  position: absolute;
  background-color: hsl(0, 0%, 5%);
  color: white;
  font-size: 0.85rem;
  bottom: 5px;
  right: 5px;
`;

export const ImageBanner = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const ChannelImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span<{ darkMode: boolean }>`
  font-weight: 600;
  color: ${({ darkMode }) => (darkMode ? 'white' : '0f0f0f')};
`;

export const TextCard = styled.span`
  color: #8c8c8c;
  font-size: 14px;
`;
