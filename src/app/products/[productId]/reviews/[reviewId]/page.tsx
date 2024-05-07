interface Props {
  params: {
    productId: string;
    reviewId: string;
  };
}

export default function ProductDetailsReviewPage({ params }: Props) {
  return (
    <h1>
      Product details page #{params.productId} review #{params.reviewId}
    </h1>
  );
}
