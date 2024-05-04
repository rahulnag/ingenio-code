import styles from "./page.module.css";
import AdvisorCard from './components/AdvisorCard'

//fetch advisor data
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
    }
    data = await res.json()
    return data
  }

  catch (error) {
    return "error"
  }
}

export default async function Home() {
  let advisorData = undefined
  advisorData = await getData();
  return (
    <main className={styles.main}>
      <h1 style={{ margin: '1rem 0 5rem 0', color: "var(--dark-color)" }}>Advisors Availability</h1>

      {/* show error message if any error happened */}
      {
        advisorData == "error" && <h1>Error loading advisors</h1>
      }

      {/* show advisor list  */}
      {
        advisorData !== undefined && advisorData?.data?.map((advisor) => {
          return (
            <AdvisorCard {...advisor} key={advisor?.id} />
          )
        })
      }
    </main>
  );
}
