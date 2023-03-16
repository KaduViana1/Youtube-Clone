import {
  ButtonIcon,
  Container,
  Footer,
  MenuItem,
  ModalItem,
  Separator,
  Title,
} from './styles';
import { useContext } from 'react';
import Home from '../../assets/home.png';
import Shorts from '../../assets/shorts.png';
import Subscritpion from '../../assets/subscribe.png';
import Originals from '../../assets/original.png';
import Library from '../../assets/library.png';
import History from '../../assets/history.png';
import YourVids from '../../assets/yours.png';
import Clock from '../../assets/clock.png';
import Favorites from '../../assets/favorite.png';
import Liked from '../../assets/liked.png';
import Trending from '../../assets/trending.png';
import MusicNote from '../../assets/music_note.png';
import Claquete from '../../assets/claquete.png';
import Live from '../../assets/live.png';
import Gaming from '../../assets/controller.png';
import News from '../../assets/news.png';
import Trophy from '../../assets/trophy.png';
import Lightbulb from '../../assets/lightbulb.png';
import Creator from '../../assets/creator.png';
import YouTubeMusic from '../../assets/youtube_music.png';
import Kids from '../../assets/kids.png';
import TV from '../../assets/tv.png';
import Settings from '../../assets/settings.png';
import Report from '../../assets/report.png';
import Help from '../../assets/help.png';
import Feedback from '../../assets/feedback.png';
import { useNavigate } from 'react-router-dom';
import { OpenMenuContext } from '../../context/menuContext';

function Menu() {
  const { openMenu } = useContext(OpenMenuContext);
  const navigate = useNavigate();

  return (
    <Container className="menu" openMenu={openMenu}>
      <MenuItem openMenu={openMenu} onClick={() => navigate('/')}>
        <ButtonIcon alt="hamburger" src={Home} />
        <span>Home</span>
      </MenuItem>
      <MenuItem openMenu={openMenu}>
        <ButtonIcon alt="shorts" src={Shorts} />
        <span>Shorts</span>
      </MenuItem>
      <MenuItem openMenu={openMenu}>
        <ButtonIcon alt="subscriptions" src={Subscritpion} />
        <span>Subscriptions</span>
      </MenuItem>
      <MenuItem openMenu={openMenu}>
        <ButtonIcon alt="originals" src={Originals} />
        <span>Originals</span>
      </MenuItem>
      <Separator openMenu={openMenu} />
      <MenuItem openMenu={openMenu} onClick={() => navigate('/library')}>
        <ButtonIcon alt="library" src={Library} />
        <span>Library</span>
      </MenuItem>
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="history" src={History} />
        <span>History</span>
      </ModalItem>
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="your-videos" src={YourVids} />
        <span>Your Videos</span>
      </ModalItem>
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="watch-later" src={Clock} />
        <span>Watch Later</span>
      </ModalItem>
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="favorites" src={Favorites} />
        <span>Favorites</span>
      </ModalItem>
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="liked-videos" src={Liked} />
        <span>Liked Videos</span>
      </ModalItem>
      <Separator openMenu={openMenu} />
      <Title openMenu={openMenu}>Subscritions</Title>
      <Separator openMenu={openMenu} />
      <Title openMenu={openMenu}>Explore</Title>
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="trending" src={Trending} />
        <span>Trending</span>
      </ModalItem>
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="music" src={MusicNote} />
        <span>Music</span>
      </ModalItem>
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="movies" src={Claquete} />
        <span>Movies</span>
      </ModalItem>
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="live" src={Live} />
        <span>Live</span>
      </ModalItem>
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="gaming" src={Gaming} />
        <span>Gaming</span>
      </ModalItem>
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="news" src={News} />
        <span>News</span>
      </ModalItem>
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="sports" src={Trophy} />
        <span>Sports</span>
      </ModalItem>
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="learning" src={Lightbulb} />
        <span>Learning</span>
      </ModalItem>
      <Separator openMenu={openMenu} />
      <Title openMenu={openMenu}>More from YouTube</Title>
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="creator-studio" src={Creator} />
        <span>Creator Studio</span>
      </ModalItem>
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="youtube-music" src={YouTubeMusic} />
        <span>YouTube Music</span>
      </ModalItem>
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="youtube-kids" src={Kids} />
        <span>YouTube Kids</span>
      </ModalItem>
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="youtube-tv" src={TV} />
        <span>YouTube TV</span>
      </ModalItem>
      <Separator openMenu={openMenu} />
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="settings" src={Settings} />
        <span>Settings</span>
      </ModalItem>
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="report-history" src={Report} />
        <span>Report history</span>
      </ModalItem>
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="Help" src={Help} />
        <span>Help</span>
      </ModalItem>
      <ModalItem openMenu={openMenu}>
        <ButtonIcon alt="send-feedback" src={Feedback} />
        <span>Send feedback</span>
      </ModalItem>
      <Separator openMenu={openMenu} />
      <Footer openMenu={openMenu}>
        <a href="https://www.youtube.com/about/">About</a>
        <a href="https://www.youtube.com/about/press/">Press</a>
        <a href="https://www.youtube.com/about/copyright/">Copyright</a>
        <a href="https://www.youtube.com/t/contact_us/">Contact us</a>
        <a href="https://www.youtube.com/creators/">Creators</a>
        <a href="https://www.youtube.com/ads/">Advertise</a>
        <a href="https://developers.google.com/youtube">Developers</a>
        <a href="https://www.youtube.com/t/terms">Terms</a>
        <a href="https://www.youtube.com/t/privacy">Privacy</a>
        <a href="https://www.youtube.com/about/policies/">Policy & Safety</a>
        <a href="https://www.youtube.com/howyoutubeworks?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen">
          How YouTube works
        </a>
        <a href="https://www.youtube.com/new">Test new features</a>
        <p>© 2023 Google LLC</p>
      </Footer>
    </Container>
  );
}

export default Menu;
