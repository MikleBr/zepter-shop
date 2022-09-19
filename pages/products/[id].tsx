import { useRouter } from 'next/router';
import React from 'react';
import { products } from '../../constants/products';
import { ShopLayout } from '../../layout/Shop/Shop';

type Props = {};

const ProductPage = (props: Props) => {
  const router = useRouter();

  const { id } = router.query;
  const productId = id ? +id : 0;

  const product = products.find(product => product.id === productId);

  return (
    <ShopLayout>
      {product?.title} {product?.description}
    </ShopLayout>
  );
};

export default ProductPage;
