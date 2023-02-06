import { Resource, component$, useStore } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { useEndpoint } from "@builder.io/qwik-city";
import { DocumentHead } from '@builder.io/qwik-city';

interface ProductData {
  skuId: string;
  price: number;
  description: string;
}

export const onGet: RequestHandler<ProductData> = async ({ params }) => {
  // put your DB access here, we are hard coding a response for simplicity.
  return {
    skuId: params.skuId,
    price: 123.45,
    description: `Description for ${params.skuId}`,
  };
};

export default component$(() => {
  const productData = useEndpoint<ProductData>();
  return (
    <Resource
      value={productData}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <div>Error</div>}
      onResolved={(product) => (
        <>
          <h1>Product: {product.skuId}</h1>
          <p>Price: {product.price}</p>
          <p>{product.description}</p>
        </>
      )}
    />
  );
});

export const head: DocumentHead = {
  title: 'Product Details',
};
