export default function Home({ formattedDate }) {
  const data = getData();

  return (
    <>
      <h1>Static page</h1>
      <p>This page is static. It was built on {data.formattedDate}.</p>
      <p>
        <a href="/ssr">View a server-side rendered page.</a>
      </p>
    </>
  );
}

function getData() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeStyle: 'long',
  }).format(buildDate);

  return { formattedDate };
}
