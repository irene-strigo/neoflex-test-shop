import { NavButton, NavButtonCounter } from './CommonStyles';

type Props = {
  link: string;
  image?: string;
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  count?: number;
};

const NavigationButton = ({ link, label, image, onClick, count }: Props) => {
  return (
    <NavButton to={link} onClick={onClick}>
      {label}
      {!label && (
        <>
          <NavButtonCounter>{count}</NavButtonCounter>
          <img src={image}></img>
        </>
      )}
    </NavButton>
  );
};

export default NavigationButton;
