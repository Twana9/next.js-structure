//Data Fetching

// 1. Server Side Rendering (SSR) :- the content is always up to date
// 2. Static Site Generation (SSG) :- default of next.js
// 3. Incremental Static ReGeneration (ISR) :- refreshing in interval time

async function Page() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${3}`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();

  return (
    <div>
      <h1> {data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
export default Page;
