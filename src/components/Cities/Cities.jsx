import { Link } from "react-router-dom";

import Snipper from "../Snipper/Spinner";
import styles from "./Cities.module.css";

function Cities({ cities, isLoading }) {
  if (isLoading) return <p>Loading...</p>;

  if (!cities.length) return <p>No data</p>;

  return (
    <div>
      {cities.map((city) => (
        <li key={city.id}>
          <Link
            to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
          >
            {city.cityName}
          </Link>
        </li>
      ))}
    </div>
  );
}

export default Cities;
