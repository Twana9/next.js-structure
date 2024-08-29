//Data Fetching

// 1. Server Side Rendering (SSR) :- the content is always up to date
// 2. Static Site Generation (SSG) :- default of next.js
// 3. Incremental Static ReGeneration (ISR) :- refreshing in interval time

function Page() {
  return <div>page</div>;
}
export default Page;

// 1 :-
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${1}`, {
//   cache : 'no-store',
// });
// const data = await res.json();

// 2 :-
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${1}`);
// const data = await res.json();

// 3 :-
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${1}`, {
//   next: { revalidate: 10 },
// });
// const data = await res.json();
