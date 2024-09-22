import { DeleteButton } from './CommonStyles';

type Props = {
  image: string;
  label?: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const DeleteFromCartBtn = ({ image, onClick }: Props) => {
  return (
    <DeleteButton onClick={onClick}>
      <img src={image} />
    </DeleteButton>
  );
};

export default DeleteFromCartBtn;
