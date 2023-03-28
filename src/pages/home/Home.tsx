import { useContext } from 'react';
import VideoCard from '../../components/videoComponent/VideoCard';
import ShortsCard from '../../components/videoComponent/ShortsCard';

import {
  Container,
  Icon,
  Separator,
  ShortsHeader,
  ShortsContainer,
  SeparatorContainer,
} from './homestyles';
import Img01 from '../../assets/video_covers/image_01.webp';
import Img02 from '../../assets/video_covers/image_02.webp';
import Img03 from '../../assets/video_covers/image_03.webp';
import Img04 from '../../assets/video_covers/image_04.webp';
import Img05 from '../../assets/video_covers/image_05.webp';
import Img06 from '../../assets/video_covers/image_06.webp';
import Img07 from '../../assets/video_covers/image_07.webp';
import Img08 from '../../assets/video_covers/image_08.webp';
import Img09 from '../../assets/video_covers/image_09.webp';
import Img10 from '../../assets/video_covers/image_10.webp';
import chanImg01 from '../../assets/channel_imgs/chanImg_01.jpg';
import chanImg02 from '../../assets/channel_imgs/ign.jpg';
import chanImg03 from '../../assets/channel_imgs/chanImg_03.jpg';
import chanImg04 from '../../assets/channel_imgs/chanImg_04.jpg';
import chanImg05 from '../../assets/channel_imgs/chanImg_05.jpg';
import chanImg06 from '../../assets/channel_imgs/chanImg_06.jpg';
import chanImg07 from '../../assets/channel_imgs/chanImg_07.jpg';
import chanImg08 from '../../assets/channel_imgs/chanImg_08.jpg';
import ShortsIcon from '../../assets/youtube_shorts.png';
import Short01 from '../../assets/shorts_cover/short_01.webp';
import Short02 from '../../assets/shorts_cover/short_02.webp';
import Short03 from '../../assets/shorts_cover/short_03.webp';
import Short04 from '../../assets/shorts_cover/short_04.webp';
import Short05 from '../../assets/shorts_cover/short_05.webp';
import Short06 from '../../assets/shorts_cover/short_06.webp';
import Short07 from '../../assets/shorts_cover/short_07.webp';
import Short08 from '../../assets/shorts_cover/short_08.webp';
import Short09 from '../../assets/shorts_cover/short_09.webp';
import Short10 from '../../assets/shorts_cover/short_10.webp';
import { OpenMenuContext } from '../../context/menuContext';
import { UserContext } from '../../context/userContext';
import CategoriesBar from '../../components/categorybar/CategoriesBar';

const videos = [
  {
    coverImg: Img01,
    channelImg: chanImg01,
    videoTitle: 'Millio W + Jinx Q is AMAZING!',
    channelName: 'Vandiril',
    views: '203K views - 12 hours ago',
  },
  {
    coverImg: Img02,
    channelImg: chanImg02,
    videoTitle: 'Paint - Official Trailer (2023) Owen Wilson',
    channelName: 'IGN',
    views: '72K views - 11 hours ago',
  },
  {
    coverImg: Img04,
    channelImg: chanImg03,
    videoTitle: 'AGENT ELVIS | Official Trailer | Netflix',
    channelName: 'Netflix',
    views: '226K views - 6 days ago',
  },
  {
    coverImg: Img03,
    channelImg: chanImg02,
    videoTitle:
      'The Flash - Officeial Trailer (2023) Michael Keaton, Ezra Miller, Sasha Calle',
    channelName: 'IGN',
    views: '965K views - 3 weeks ago',
  },
  {
    coverImg: Img05,
    channelImg: chanImg04,
    videoTitle: '3 super small changes to improve your css',
    channelName: 'Kevin Powell',
    views: '21K views - 22 hours ago',
  },
  {
    coverImg: Img06,
    channelImg: chanImg05,
    videoTitle: 'Are You Building Projects Wrong',
    channelName: 'Web Dev Simplified',
    views: '56K views - 2 years ago',
  },
  {
    coverImg: Img07,
    channelImg: chanImg06,
    videoTitle: 'Resident Evil 4 – 3.º trailer',
    channelName: 'PlayStation',
    views: '1,6M views - 12 days ago',
  },
  {
    coverImg: Img08,
    channelImg: chanImg05,
    videoTitle: 'These Mistakes Almost Stopped Me From Learning To Code',
    channelName: 'Web Dev Simplified',
    views: '156K views - 1 year ago',
  },
  {
    coverImg: Img09,
    channelImg: chanImg07,
    videoTitle: 'React for the Haters in 100 seconds',
    channelName: 'Fireship',
    views: '1M views - 10 months ago',
  },
  {
    coverImg: Img10,
    channelImg: chanImg08,
    videoTitle: "Oliver Tree - I'm Gone [Music VIdeo]",
    channelName: 'Oliver Tree',
    views: '25M views - 2 years ago',
  },
];

const shorts = [
  {
    coverImg: Short01,
    shortTitle: 'Three great gadgets for every man!',
    views: '43M views',
  },
  {
    coverImg: Short02,
    shortTitle: 'pseudo-classes can do more than you...',
    views: '42K views',
  },
  {
    coverImg: Short03,
    shortTitle: 'Will It Re-Render? React Game Show',
    views: '37K views',
  },
  {
    coverImg: Short04,
    shortTitle: 'Tommy Kills Nucky | Boardwalk Empire',
    views: '2.3M views',
  },
  {
    coverImg: Short05,
    shortTitle: 'Perspective Text | HTML CSS',
    views: '12K views',
  },
  {
    coverImg: Short06,
    shortTitle: 'How is Reacher so big? |REACHER|',
    views: '16M views',
  },
  {
    coverImg: Short07,
    shortTitle: 'Memes from the Internet',
    views: '3.7M views',
  },
  {
    coverImg: Short08,
    shortTitle: 'Chris Rock on Getting SMACKED...',
    views: '5.3M views',
  },
  {
    coverImg: Short09,
    shortTitle: 'How Would You Solve This Code...',
    views: '21K views',
  },
  {
    coverImg: Short10,
    shortTitle: 'Jumping Text | HTML CSS',
    views: '40K views',
  },
];

function Home() {
  const { openMenu } = useContext(OpenMenuContext);
  const { darkMode } = useContext(UserContext);

  function videoShower(): any {
    if (openMenu) {
      return videos
        .slice(0, 8)
        .map(video => (
          <VideoCard
            key={video.videoTitle}
            coverImg={video.coverImg}
            channelImg={video.channelImg}
            videoTitle={video.videoTitle}
            channelName={video.channelName}
            views={video.views}
          />
        ));
    } else {
      return videos.map(video => (
        <VideoCard
          key={video.videoTitle}
          coverImg={video.coverImg}
          channelImg={video.channelImg}
          videoTitle={video.videoTitle}
          channelName={video.channelName}
          views={video.views}
        />
      ));
    }
  }

  function shortsShower(): any {
    if (openMenu) {
      return shorts
        .slice(0, 8)
        .map(short => (
          <ShortsCard
            key={short.shortTitle}
            coverImg={short.coverImg}
            shortTitle={short.shortTitle}
            views={short.views}
          ></ShortsCard>
        ));
    } else {
      return shorts.map((short, i) => (
        <ShortsCard
          key={short.shortTitle}
          coverImg={short.coverImg}
          shortTitle={short.shortTitle}
          views={short.views}
        ></ShortsCard>
      ));
    }
  }

  return (
    <>
      <CategoriesBar></CategoriesBar>
      <Container darkMode={darkMode} openMenu={openMenu}>
        {videoShower()}
      </Container>
      <SeparatorContainer openMenu={openMenu}>
        <Separator darkMode={darkMode} />
      </SeparatorContainer>
      <ShortsHeader openMenu={openMenu} darkMode={darkMode}>
        <Icon src={ShortsIcon} />
        <span>Shorts</span>
      </ShortsHeader>
      <ShortsContainer darkMode={darkMode} openMenu={openMenu}>
        {shortsShower()}
      </ShortsContainer>

      <SeparatorContainer openMenu={openMenu}>
        <Separator darkMode={darkMode} />
      </SeparatorContainer>
    </>
  );
}

export default Home;
