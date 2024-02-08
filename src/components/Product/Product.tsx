import { Button, Card } from 'react-bootstrap';
import { ProductProps } from './types';
import { useAppDispatch } from '../../redux/hooks';
import { CartItem, addCartItem } from '../../redux/features/cart/cartSlice';
import { truncateText } from '../../utils/text';

const Product: React.FC<ProductProps> = ({
  id,
  name,
  description,
  image,
  price,
}) => {
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    const newItem: CartItem = {
      product: { id, title: name, description, image, price },
      qty: 1,
    };
    dispatch(addCartItem(newItem));
  };

  return (
    <Card style={{ width: '18rem', height: '100%' }}>
      <Card.Img
        height='200px'
        style={{ objectFit: 'contain', padding: '20px 0' }}
        variant='top'
        src={image}
      />
      <Card.Body>
        <Card.Title>{truncateText(name, 40)}</Card.Title>
        <Card.Text>{truncateText(description, 50)}</Card.Text>
        <Button variant='primary' onClick={onClickHandler}>
          Add to cart!
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
