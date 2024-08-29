export async function generateMetadata({ params, searchParams }) {
  const product = await getProduct(params.id);
  return { title: product.title };
}
export default function page({ params }) {
  const { postId } = params;

  return <h1>{postId}</h1>;
}
