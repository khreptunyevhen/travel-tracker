import styles from "./Countries.module.css";

function Countries({ cities, isLoading }) {
  const countries = Array.from(new Set(cities.map((city) => city.country)));

  if (isLoading) return <p>Loading...</p>;

  if (!countries.length) return <p>No data</p>;

  return (
    <ul>
      {countries.map((country) => (
        <li key={country}>{country}</li>
      ))}
    </ul>
  );
}

export default Countries;
