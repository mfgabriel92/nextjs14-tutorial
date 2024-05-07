interface Props {
  params: {
    productId: string;
  };
}

export default function ProductDetailPage({ params }: Props) {
  return <h1>Product details page #{params.productId}</h1>;
}
