import { selectItems } from '../../redux/features/cart/cartSlice';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import CartItem from '../CartItem/CartItem';

const Cart: React.FC = ({}) => {
  const items = useAppSelector((state: RootState) => selectItems(state));

  console.log(items);

  return (
    <>
      {items.map((item) => (
        <CartItem
          id={item.product.id}
          image={item.product.image}
          name={item.product.title}
          price={item.product.price}
          qty={item.qty}
        />
      ))}
    </>
  );
};

export default Cart;
