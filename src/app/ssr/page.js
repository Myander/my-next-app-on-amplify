import Image from 'next/image';

// pages/ssr.js
export default async function SSR() {
  const data = await getData();
  console.log('data', data);
  return (
    <main>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Image
          src={data.images[4]}
          alt="iPhone"
          width={250}
          height={132}
          style={{ objectFit: 'cover' }}
        />
        <div>
          <h1>{data.title}</h1>
          <h3>{data.description}</h3>
          <p>price: ${data.price}</p>
          <p>rating: {data.rating}</p>
        </div>
      </div>
    </main>
  );
}

async function getData() {
  const res = await fetch('https://dummyjson.com/products/1');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
