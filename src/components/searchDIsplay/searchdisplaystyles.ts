import styled from 'styled-components';

export const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  cursor: pointer;
`;

export const CoverImg = styled.img`
  width: auto;
  height: 200px;
  border-radius: 10px;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    font-size: 0.8rem;
  }
`;

export const VideoTitle = styled.h3`
  margin: 0 0 0 2px;
`;

export const VideoInfo = styled.span`
  margin-left: 3px;
  margin-bottom: 10px;
  font-size: 0.8rem;
`;

export const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  img {
    width: 30px;
    border-radius: 50%;
  }

  span {
    font-size: 0.9rem;
  }
`;
