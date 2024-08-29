function Page() {
  return <div>page</div>;
}
export default Page;

///////////Data Fetching//////////////////////////////////////////////////////

// 1. Server Side Rendering (SSR) :- the content is always up to date
// 2. Static Site Generation (SSG) :- default of next.js
// 3. Incremental Static ReGeneration (ISR) :- refreshing in interval time

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

//////////////We can define Metadata in two ways: Static and Dynamic.//

// 1. Static Metadata
// 2. Dynamic Metadata

// 1 :-
// export const metadata = {
//   title: "Home",
// };

// 2 :-
// export async function generateMetadata({ params, searchParams }) {
//   const product = await getProduct(params.id);
//   return { title: product.title };
// }
