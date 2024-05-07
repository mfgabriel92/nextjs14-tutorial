interface Props {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: Props) {
  return <h1>Product details page #{params.id}</h1>;
}
