import { createContext, useState } from 'react';

export const OpenMenuContext = createContext({} as any);

export const MenuContext = ({ children }: any) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [createVideoModal, setCreateVideoModal] = useState(false);

  const handleModal = () => {
    if (createVideoModal === false) {
      document.body.style.overflow = 'hidden';
      setCreateVideoModal(true);
    } else {
      document.body.style.overflow = 'visible';
      setCreateVideoModal(false);
    }
  };

  return (
    <OpenMenuContext.Provider
      value={{
        openMenu,
        dropdown,
        setOpenMenu,
        setDropdown,
        createVideoModal,
        setCreateVideoModal,
        handleModal,
      }}
    >
      {children}
    </OpenMenuContext.Provider>
  );
};
