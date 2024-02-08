import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { truncateText } from '../../utils/text';
import { useAppDispatch } from '../../redux/hooks';
import { removeItemFromCart } from '../../redux/features/cart/cartSlice';

interface ICartItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
  qty: number;
}

const CartItem: React.FC<ICartItemProps> = ({
  id,
  name,
  image,
  price,
  qty,
}) => {
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <Container>
      <Card style={{ width: '18rem', height: '100%' }}>
        <Card.Img
          height='200px'
          style={{ objectFit: 'contain', padding: '20px 0' }}
          variant='top'
          src={image}
        />
        <Card.Body>
          <Card.Title>{truncateText(name, 40)}</Card.Title>
          <Card.Text>Quantity: {qty}</Card.Text>
          <Button variant='danger' onClick={onClickHandler}>
            Remove from cart!
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CartItem;
