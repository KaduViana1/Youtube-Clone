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
import Home_D from '../../assets/home_D.png';
import Shorts from '../../assets/shorts.png';
import Shorts_D from '../../assets/shorts_D.png';
import Subscritpion from '../../assets/subscribe.png';
import Subscritpion_D from '../../assets/subscribe_D.png';
import Originals from '../../assets/original.png';
import Originals_D from '../../assets/original_D.png';
import Library from '../../assets/library.png';
import Library_D from '../../assets/library_D.svg';
import History from '../../assets/history.png';
import History_D from '../../assets/history_D.png';
import YourVids from '../../assets/yours.png';
import YourVids_D from '../../assets/yours_D.png';
import Clock from '../../assets/clock.png';
import Clock_D from '../../assets/clock_D.png';
import Favorites from '../../assets/favorite.svg';
import Favorites_D from '../../assets/favorite_D.svg';
import Liked from '../../assets/liked.png';
import Liked_D from '../../assets/liked_D.png';
import Trending from '../../assets/trending.png';
import Trending_D from '../../assets/trending_D.png';
import MusicNote from '../../assets/music_note.png';
import MusicNote_D from '../../assets/music_note_D.png';
import Claquete from '../../assets/claquete.png';
import Claquete_D from '../../assets/claquete_D.png';
import Live from '../../assets/live.png';
import Live_D from '../../assets/live_D.png';
import Gaming from '../../assets/controller.png';
import Gaming_D from '../../assets/controller_D.png';
import News from '../../assets/news.png';
import News_D from '../../assets/news_D.png';
import Trophy from '../../assets/trophy.png';
import Trophy_D from '../../assets/trophy_D.png';
import Lightbulb from '../../assets/lightbulb.png';
import Lightbulb_D from '../../assets/lightbulb_D.png';
import Creator from '../../assets/creator.png';
import YouTubeMusic from '../../assets/youtube_music.png';
import Kids from '../../assets/kids.png';
import TV from '../../assets/tv.png';
import Settings from '../../assets/settings.png';
import Settings_D from '../../assets/settings_D.png';
import Report from '../../assets/report.png';
import Report_D from '../../assets/report_D.png';
import Help from '../../assets/help.png';
import Help_D from '../../assets/help_D.png';
import Feedback from '../../assets/feedback.png';
import Feedback_D from '../../assets/feedback_D.svg';
import { useNavigate } from 'react-router-dom';
import { OpenMenuContext } from '../../context/menuContext';
import { UserContext } from '../../context/userContext';

function Menu() {
  const { openMenu } = useContext(OpenMenuContext);
  const { darkMode } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Container className="menu" openMenu={openMenu} darkMode={darkMode}>
      <MenuItem
        openMenu={openMenu}
        darkMode={darkMode}
        onClick={() => navigate('/')}
      >
        <ButtonIcon alt="hamburger" src={darkMode ? Home_D : Home} />
        <span>Home</span>
      </MenuItem>
      <MenuItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="shorts" src={darkMode ? Shorts_D : Shorts} />
        <span>Shorts</span>
      </MenuItem>
      <MenuItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon
          alt="subscriptions"
          src={darkMode ? Subscritpion_D : Subscritpion}
        />
        <span>Subscriptions</span>
      </MenuItem>
      <MenuItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="originals" src={darkMode ? Originals_D : Originals} />
        <span>Originals</span>
      </MenuItem>
      <Separator darkMode={darkMode} openMenu={openMenu} />
      <MenuItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="library" src={darkMode ? Library_D : Library} />
        <span>Library</span>
      </MenuItem>
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="history" src={darkMode ? History_D : History} />
        <span>History</span>
      </ModalItem>
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="your-videos" src={darkMode ? YourVids_D : YourVids} />
        <span>Your Videos</span>
      </ModalItem>
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="watch-later" src={darkMode ? Clock_D : Clock} />
        <span>Watch Later</span>
      </ModalItem>
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="favorites" src={darkMode ? Favorites_D : Favorites} />
        <span>Favorites</span>
      </ModalItem>
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="liked-videos" src={darkMode ? Liked_D : Liked} />
        <span>Liked Videos</span>
      </ModalItem>
      <Separator darkMode={darkMode} openMenu={openMenu} />
      <Title openMenu={openMenu}>Subscritions</Title>
      <Separator darkMode={darkMode} openMenu={openMenu} />
      <Title openMenu={openMenu}>Explore</Title>
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="trending" src={darkMode ? Trending_D : Trending} />
        <span>Trending</span>
      </ModalItem>
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="music" src={darkMode ? MusicNote_D : MusicNote} />
        <span>Music</span>
      </ModalItem>
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="movies" src={darkMode ? Claquete_D : Claquete} />
        <span>Movies</span>
      </ModalItem>
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="live" src={darkMode ? Live_D : Live} />
        <span>Live</span>
      </ModalItem>
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="gaming" src={darkMode ? Gaming_D : Gaming} />
        <span>Gaming</span>
      </ModalItem>
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="news" src={darkMode ? News_D : News} />
        <span>News</span>
      </ModalItem>
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="sports" src={darkMode ? Trophy_D : Trophy} />
        <span>Sports</span>
      </ModalItem>
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="learning" src={darkMode ? Lightbulb_D : Lightbulb} />
        <span>Learning</span>
      </ModalItem>
      <Separator darkMode={darkMode} openMenu={openMenu} />
      <Title openMenu={openMenu}>More from YouTube</Title>
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="creator-studio" src={Creator} />
        <span>Creator Studio</span>
      </ModalItem>
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="youtube-music" src={YouTubeMusic} />
        <span>YouTube Music</span>
      </ModalItem>
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="youtube-kids" src={Kids} />
        <span>YouTube Kids</span>
      </ModalItem>
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="youtube-tv" src={TV} />
        <span>YouTube TV</span>
      </ModalItem>
      <Separator darkMode={darkMode} openMenu={openMenu} />
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="settings" src={darkMode ? Settings_D : Settings} />
        <span>Settings</span>
      </ModalItem>
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="report-history" src={darkMode ? Report_D : Report} />
        <span>Report history</span>
      </ModalItem>
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon alt="Help" src={darkMode ? Help_D : Help} />
        <span>Help</span>
      </ModalItem>
      <ModalItem openMenu={openMenu} darkMode={darkMode}>
        <ButtonIcon
          alt="send-feedback"
          src={darkMode ? Feedback_D : Feedback}
        />
        <span>Send feedback</span>
      </ModalItem>
      <Separator darkMode={darkMode} openMenu={openMenu} />
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
