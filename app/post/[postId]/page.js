export default function Page({ params }) {
  const { postId } = params;

  return <h1>{postId}</h1>;
}
