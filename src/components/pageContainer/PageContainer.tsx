import { useContext } from 'react';
import { OpenMenuContext } from '../../context/menuContext';
import { UserContext } from '../../context/userContext';
import { MainContainer } from './pageContainerstyles';

function PageContainer({ children }: any) {
  const { openMenu } = useContext(OpenMenuContext);
  const { darkMode } = useContext(UserContext);

  return (
    <MainContainer openMenu={openMenu} darkMode={darkMode}>
      {children}
    </MainContainer>
  );
}

export default PageContainer;
