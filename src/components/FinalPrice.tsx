import { FinalPriceBtn, FinalPriceContainer, FinalPriceTotal } from './CommonStyles';

type Props = {
  finalPrice: number;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const FinalPrice = ({ finalPrice, onClick }: Props) => {
  return (
    <FinalPriceContainer>
      <FinalPriceTotal>
        ИТОГО:<div>{`₽${finalPrice}`}</div>
      </FinalPriceTotal>
      <FinalPriceBtn onClick={onClick}>Перейти к оформлению</FinalPriceBtn>
    </FinalPriceContainer>
  );
};

export default FinalPrice;
