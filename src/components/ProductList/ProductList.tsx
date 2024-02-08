import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/hooks';

import { useEffect } from 'react';
import { fetchProducts } from '../../redux/features/products/productsSlice';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { RootState } from '../../redux/store';

import styles from './ProductList.module.css';
import Product from '../Product/Product';
import { useNavigate } from 'react-router-dom';

const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();

  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);

  const navigate = useNavigate();

  console.log(products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <Spinner />;
  } else if (status === 'success') {
    content = (
      <div className={styles.wrapper}>
        <div className={styles.list}>
          {products.map((product: any) => (
            <div key={product.id}>
              <Product
                description={product.description}
                id={product.id}
                image={product.image}
                name={product.title}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <Button onClick={() => navigate('/cart')}>Go to cart</Button>
      {content}
    </>
  );
};

export default ProductList;
