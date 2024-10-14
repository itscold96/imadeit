import CreateNewItemButton from 'components/@shared/CreateNewItemButton';
import { useToggle } from 'hooks/useToggle';
import Modal from 'react-modal';
import CreateNewWorkoutForm from './CreateNewWorkoutForm';

const customModalFrameStyles: Modal.Styles = {
  overlay: {
    backgroundColor: ' rgba(0, 0, 0, 0.3)',
  },
  content: {
    backgroundColor: 'black',
    border: '1px solid #52525b',
    height: 'fit-content',
    maxWidth: '768px',
    width: '90%',
    padding: '30px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '15px',
  },
};

export default function CreateNewWorkout() {
  const { toggleValue: isOpen, toggleDispatch } = useToggle();

  return (
    <>
      <CreateNewItemButton text={'새로운 운동 추가하기..'} onCreateClick={() => toggleDispatch({ type: 'switch' })} />
      <Modal
        isOpen={isOpen}
        onRequestClose={() => toggleDispatch({ type: 'off' })}
        contentLabel="신규 운동을 생성하는 모달" // 스크린 리더 사용자를 위한 라벨
        style={customModalFrameStyles}
        ariaHideApp={false}
      >
        <CreateNewWorkoutForm />
      </Modal>
    </>
  );
}
