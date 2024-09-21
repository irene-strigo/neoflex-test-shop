type Props = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const AddToCartButton = ({ label, onClick }: Props) => {
  return <div onClick={onClick}>{label}</div>;
};

export default AddToCartButton;
