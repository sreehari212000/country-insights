import Filter from "@/components/Filter";
import SingleCountry from "@/components/Countries";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Head from "next/head";

export default function Home({ countries }) {
  const [data, setData] = useState(countries);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    let fetchUrl = "";
    if (searchTerm === "") {
      setData(countries);
      return;
    } else {
      fetchUrl = `https://restcountries.com/v3.1/name/${searchTerm}`;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(fetchUrl);
        const fetchedData = await res.json();
        setData(fetchedData);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [searchTerm]);


  useEffect(()=>{

    if(filter === 'all'){
      setData(countries)
      return
    }
    const fetchData = async ()=>{
      const res = await fetch(`https://restcountries.com/v3.1/region/${filter}`)
      const fetchedData = await res.json()
      setData(fetchedData)
    }
    fetchData()

  }, [filter])



  return (<>
  <Head>
      <title>Country Insights</title>
  </Head>
    <div
      className={`max-w-[1440px] mx-auto ${
        darkMode ? "bg-[#202c37]" : "bg-[#fafafa]"
      }`}
    >
      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} filter={filter} setFilter={setFilter}/>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mt-12">
        {data.status ? (
          <h1 className="col-span-4 text-center mt-24 md:mt-44 text-3xl font-bold ">
            Not Found!!
          </h1>
        ) : (
          data.map((country) => (
            <SingleCountry key={country.name.common} details={country} />
          ))
        )}
      </div>
    </div>
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return {
    props: {
      countries: data,
    },
  };
}
