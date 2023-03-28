import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { VideosContext } from '../../context/videosContext';
import { OpenMenuContext } from '../../context/menuContext';
import FeedBackIcon from '../../assets/feedback.png';
import FeedBackIcon_D from '../../assets/feedback_D.svg';
import CloseIcon from '../../assets/close.png';
import CloseIcon_D from '../../assets/close_D.png';

import {
  ButtonIcon,
  Form,
  FormContainer,
  FormHeader,
  HeaderButton,
  ModalContainer,
  SubmitButton,
} from './createvideostyles';

function CreateVideo() {
  const [formData, setFormData] = useState({
    title: '',
    cardImage: '',
    description: '',
  });
  const { createVideo } = useContext(VideosContext);
  const { user, darkMode } = useContext(UserContext);
  const { createVideoModal, handleModal } = useContext(OpenMenuContext);
  const userId = user.id;

  return (
    <>
      <ModalContainer createVideoModal={createVideoModal}>
        <FormContainer darkMode={darkMode}>
          <FormHeader darkMode={darkMode}>
            <span>Upload Video</span>
            <HeaderButton darkMode={darkMode} style={{ marginLeft: 'auto' }}>
              <ButtonIcon src={darkMode ? FeedBackIcon_D : FeedBackIcon} />
            </HeaderButton>
            <HeaderButton darkMode={darkMode} onClick={() => handleModal()}>
              <ButtonIcon src={darkMode ? CloseIcon_D : CloseIcon} />
            </HeaderButton>
          </FormHeader>
          <Form
            darkMode={darkMode}
            onSubmit={e => {
              e.preventDefault();
              createVideo(userId, formData.title, formData.cardImage);
              handleModal();
            }}
          >
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              required
              autoComplete="off"
              value={formData.title}
              onChange={e =>
                setFormData(prev => ({ ...prev, title: e.target.value }))
              }
            />
            <label htmlFor="cardimg">Card Image</label>
            <input
              id="cardimg"
              type="text"
              required
              autoComplete="off"
              value={formData.cardImage}
              onChange={e =>
                setFormData(prev => ({ ...prev, cardImage: e.target.value }))
              }
            />
            <label htmlFor="description">Description</label>
            <textarea
              className="textArea"
              name="description"
              id="description"
              cols={50}
              rows={20}
              value={formData.description}
              onChange={e =>
                setFormData(prev => ({ ...prev, description: e.target.value }))
              }
            ></textarea>
            <SubmitButton
              type="submit"
              onSubmit={e => {
                e.preventDefault();
                createVideo(
                  userId,
                  formData.title,
                  formData.cardImage,
                  formData.description
                );
                handleModal();
              }}
            >
              Create Video
            </SubmitButton>
          </Form>
        </FormContainer>
      </ModalContainer>
    </>
  );
}

export default CreateVideo;
