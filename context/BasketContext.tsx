import produce from 'immer';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Product } from '../@types/entities/Product';

export type BasketProduct = {
  product: Product;
  count: number;
};

type BasketContextType = {
  products: BasketProduct[];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  deleteProduct: (product: Product) => void;
};

type Props = {
  children: ReactNode;
};

export const BasketContext = createContext<BasketContextType>({
  products: [],
  addProduct: (product: Product) => {},
  removeProduct: (product: Product) => {},
  deleteProduct: (product: Product) => {},
});

export const BasketProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<BasketProduct[]>([]);

  const addProduct = (product: Product) => {
    setProducts(
      produce<typeof products>(draft => {
        const foundIndex = draft.findIndex(it => it.product.id === product.id);

        if (foundIndex > -1) {
          const foundCartProduct = draft[foundIndex];
          draft.splice(foundIndex, 1, {
            ...foundCartProduct,
            count: foundCartProduct.count + 1,
          });
        } else {
          draft.push({
            product,
            count: 1,
          });
        }
      })
    );
  };

  const removeProduct = (product: Product) => {
    setProducts(
      produce<typeof products>(draft => {
        const foundIndex = draft.findIndex(it => it.product.id === product.id);
        const foundCartProduct = draft[foundIndex];

        if (!foundCartProduct) return;

        if (foundCartProduct.count! > 1) {
          draft.splice(foundIndex, 1, {
            ...foundCartProduct,
            count: foundCartProduct.count! - 1,
          });
        } else {
          draft.splice(foundIndex, 1);
        }
      })
    );
  };

  const deleteProduct = (product: Product) => {
    console.log(product.id);

    setProducts(
      produce<typeof products>(draft => {
        return draft.filter(
          basketField => basketField.product.id !== product.id
        );
      })
    );
  };

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <BasketContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        deleteProduct,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
