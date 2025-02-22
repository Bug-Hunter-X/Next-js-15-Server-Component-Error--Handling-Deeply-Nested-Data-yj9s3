// pages/index.js (Server Component)
export default async function Home() {
  try {
    const data = await fetchData();
    return (
      <div>
        {data?.nested?.deeply?.nested?.value || 'Data not available'}
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div>Error fetching data. Please try again later.</div>
    );
  }
}

async function fetchData() {
  try {
    const res = await fetch('/api/data');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    // throw error to trigger the catch in the main component
    throw error;
  }
}
// pages/api/data.js (remains unchanged) 