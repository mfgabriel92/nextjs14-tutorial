import { notFound } from "next/navigation";

interface Props {
  params: {
    productId: string;
    reviewId: string;
  };
}

export default function ProductDetailsReviewPage({ params }: Props) {
  if (parseInt(params.reviewId) > 100) {
    return notFound();
  }

  return (
    <h1>
      Product details page #{params.productId} review #{params.reviewId}
    </h1>
  );
}
