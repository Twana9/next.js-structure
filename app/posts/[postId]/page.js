export default function page({ params }) {
  const { postId } = params;

  return <h1>{postId}</h1>;
}
