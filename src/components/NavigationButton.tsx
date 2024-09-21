import { NavButton } from './CommonStyles';

type Props = {
  link: string;
  image?: string;
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

const NavigationButton = ({ link, label, image, onClick }: Props) => {
  return (
    <NavButton to={link} onClick={onClick}>
      {label}
      <img src={image}></img>
    </NavButton>
  );
};

export default NavigationButton;
