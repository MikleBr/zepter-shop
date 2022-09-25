import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { ProductCharacteristics } from '../../components/Products/Characteristics/Characteristics';
import { ImagesSlider } from '../../components/Products/ImagesSlider/ImagesSlider';
import { getCategoryById } from '../../helpers/getCategoryById';
import { products } from '../../constants/products';
import { ShopLayout } from '../../layout/Shop/Shop';
import { SingleValue } from 'react-select';

import { SelectOption } from '../../components/UI/Select/Select';
import { Information } from '../../components/Products/Information/Information';
import s from './products.module.scss';
import { BasketContext } from '../../context/BasketContext';
import { BlockWrapper } from '../../components/BlockWrapper/BlockWrapper';
import { getRecommendedProducts } from '../../helpers/getRecommendedProducts';
import { ProductCard } from '../../components/Products/Card/Card';

function ProductPage() {
  const router = useRouter();

  const {
    products: basketProducts,
    addProduct,
    removeProduct,
  } = useContext(BasketContext);
  const [selectValue, setSelectValue] = useState<SelectOption | null>(null);

  const { id } = router.query;
  const productId = id ? +id : 0;

  const product = products.find(product => product.id === productId);

  const handleMoveToProduct = (productId: number) => {
    router.replace(`/products/${productId}`);
  };

  useEffect(() => {
    if (!product) return;
    const productVariant = product.variant?.list[0];
    if (!productVariant) return;
    const formattedVariant = {
      value: productVariant.price.toString(),
      label: productVariant.title,
    };

    setSelectValue(formattedVariant);
  }, [product]);

  const handleChangeSelect = (value: SingleValue<SelectOption>) => {
    setSelectValue(value);
  };

  if (!product) return;

  const productCartCount =
    basketProducts.find(
      basketProduct => basketProduct.product.id === product.id
    )?.count || 0;

  const categoryId = product.categoryId;
  const category = getCategoryById(categoryId);

  const recommendedProducts = getRecommendedProducts(product);

  const breadcrumbs = [
    {
      label: 'Главная',
      path: `/`,
    },
    {
      label: category?.title || '',
      path: `/categories/${category?.id || 0}`,
    },
    {
      label: product.title,
    },
  ];

  return (
    <ShopLayout breadcrumbs={breadcrumbs}>
      <div className={s.product}>
        <div className={s.top}>
          <div className={s.slider}>
            <ImagesSlider images={product?.images || []} />
          </div>
          <div className={s.information}>
            <Information
              product={product}
              countInBasket={productCartCount}
              price={Number(selectValue?.value) || product.price}
              selectValue={selectValue}
              onChangeSelect={handleChangeSelect}
              onAddToBasket={() => addProduct(product)}
              onRemoveFromBasket={() => removeProduct(product)}
            />
          </div>
        </div>
        <div className={s.divider}></div>
        <p className={s.subtitle}>Описание</p>

        <p className={s.description}>
          Кухонный гарнитур «Сити» — прекрасный выбор для малогабаритной
          квартиры. Два ряда напольных и навесных шкафов займут минимум
          пространства, вместив, при этом, всю необходимую кухонную утварь.
          Защитная пленка на фасадах уберегает модули от воздействия влаги и
          жира, легко очищается от загрязнений неабразивными моющими средствами.
          Обладает прочной цельной столешницей, поверхность которой устойчива к
          механическим повреждениям и истиранию.
        </p>

        {product.characteristics && (
          <>
            <p className={s.subtitle}>Характеристики</p>
            <div className={s.characteristics}>
              <ProductCharacteristics
                characteristics={product.characteristics}
              />
            </div>
          </>
        )}
      </div>
      {!!product.recommendedProductIds?.length && (
        <BlockWrapper title="Рекомендуемые товары">
          {recommendedProducts.map(recommendedProduct => (
            <ProductCard
              key={recommendedProduct.id}
              img={recommendedProduct.images?.[0] || ''}
              title={recommendedProduct.title}
              price={recommendedProduct.price}
              onMoveToProduct={() => handleMoveToProduct(recommendedProduct.id)}
              onAddToBasket={() => addProduct(recommendedProduct)}
              onRemoveFromBasket={() => removeProduct(recommendedProduct)}
            />
          ))}
        </BlockWrapper>
      )}
    </ShopLayout>
  );
}

export default ProductPage;
