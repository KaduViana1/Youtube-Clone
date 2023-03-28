import { useContext, useRef, useState, useEffect } from 'react';
import { OpenMenuContext } from '../../context/menuContext';
import { UserContext } from '../../context/userContext';
import {
  CategoryBar,
  CategoryItem,
  ScrollButtonL,
  ScrollButtonR,
} from './categorybar';
import RighArrow from '../../assets/right.png';
import LeftArrow from '../../assets/left.png';
import RighArrow_D from '../../assets/right_D.png';
import LeftArrow_D from '../../assets/left_D.svg';

const categories = [
  'All',
  'Gaming',
  'Music',
  'Live',
  'Albums',
  'Motivation',
  'Podcasts',
  'Playlists',
  'Islands',
  'Comedy',
  'Learning',
  'History',
  'Rock Music',
  'Mixes',
  'Trailers',
  'Recently uploaded',
  'Nature',
  'Ambient Music',
  'Animals',
  'Forgiveness',
  'Thoughts',
  'Stages',
  'Chill-out music',
];

function CategoriesBar() {
  const { darkMode } = useContext(UserContext);
  const { openMenu } = useContext(OpenMenuContext);
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(true);
  const category: any = useRef();

  function setArrows() {
    const scrollPosition = category.current.scrollLeft;
    const x = category.current.offsetWidth;
    const y = category.current.scrollWidth;
    const scrollEnd = y - x;

    if (scrollPosition >= 50) {
      setLeftArrow(true);
    } else {
      setLeftArrow(false);
    }

    if (scrollPosition >= scrollEnd - 50) {
      setRightArrow(false);
    } else {
      setRightArrow(true);
    }
  }

  return (
    <>
      <CategoryBar
        onScroll={() => setArrows()}
        ref={category}
        darkMode={darkMode}
        openMenu={openMenu}
      >
        <ScrollButtonL
          contentText="Previous"
          leftArrow={leftArrow}
          darkMode={darkMode}
          onClick={() =>
            category.current.scrollBy({
              top: 0,
              left: -200,
              behavior: 'smooth',
            })
          }
        >
          <img src={darkMode ? LeftArrow_D : LeftArrow} alt="arrow" />
        </ScrollButtonL>
        {categories.map(categorie => (
          <CategoryItem darkMode={darkMode} key={categorie}>
            {categorie}
          </CategoryItem>
        ))}
        <ScrollButtonR
          contentText="Next"
          rightArrow={rightArrow}
          darkMode={darkMode}
          onClick={() =>
            category.current.scrollBy({ top: 0, left: 200, behavior: 'smooth' })
          }
        >
          <img src={darkMode ? RighArrow_D : RighArrow} alt="arrow" />
        </ScrollButtonR>
      </CategoryBar>
    </>
  );
}

export default CategoriesBar;
