import styles from "./page.module.css";
import AdvisorCard from './components/AdvisorCard'
async function getData() {
  let data = undefined
  try {
    const res = await fetch(
      "https://demo2255213.mockable.io/listings",
      {
        next: { revalidate: 60 },
      }
    );
    if (!res?.ok) {
      return "error"
      throw new Error("Failed to fetch data");
    }
    data = await res.json()
    return data
  }

  catch (error) {
    return "error"
    // throw new Error("Failed to fetch data");
  }
}

export default async function Home() {
  let advisorData = undefined
  advisorData = await getData();
  return (
    <main className={styles.main}>
      <h1 style={{ margin: '1rem 0 5rem 0', color: "var(--dark-color)" }}>Advisor Availability</h1>
      {
        advisorData == "error" && <h1>Error loading advisors</h1>
      }
      {
        advisorData !== undefined && advisorData?.data?.map((advisor) => {
          return (
            <AdvisorCard {...advisor} />
          )
        })
      }
    </main>
  );
}
