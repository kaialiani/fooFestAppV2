import Head from 'next/head'
import fs from 'fs';

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>fooFest</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className='Home'>
  <article>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </article>
</div>
    </>
  );
}



export async function getStaticProps() {
  // Read the JSON file that we made
  const fileContents = fs.readFileSync('../tickets.json', 'utf8');
  const data = JSON.parse(fileContents);
  return {
    props: {
      data: data,
    },
  };
}
// export async function getStaticProps() {
//   // get the data from api
//  const res = await fetch('./tickets.json');
//  const data = await res.json();
//   return {
//     props: {
//       data: data,
//     },
//   };
// }