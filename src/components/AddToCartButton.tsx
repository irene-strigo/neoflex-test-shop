import { AddButton } from './CommonStyles';

type Props = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const AddToCartButton = ({ label, onClick }: Props) => {
  return <AddButton onClick={onClick}>{label}</AddButton>;
};

export default AddToCartButton;
