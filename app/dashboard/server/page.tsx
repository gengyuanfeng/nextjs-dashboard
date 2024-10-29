import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

// type Repo = {
//   name: string;
//   stargazers_count: number;
// };

// export const getServerSideProps = (async () => {
//   // Fetch data from external API
//   const res = await fetch('https://api.github.com/repos/vercel/next.js');
//   const repo: Repo = await res.json();
//   // Pass data to the page via props
//   return { props: { repo } };
// }) satisfies GetServerSideProps<{ repo: Repo }>;

import { use } from 'react';

export default function Page() {
  const data = use(fetchData());

  return (
    <div>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
async function fetchData() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js'); // 假设这是Java后端提供的API
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
