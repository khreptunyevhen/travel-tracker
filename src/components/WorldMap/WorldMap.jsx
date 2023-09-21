import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./WorldMap.module.css";

function WorldMap() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const lng = searchParams.get("lng");
  const lat = searchParams.get("lat");

  return (
    <div className={styles.map} onClick={() => navigate("form")}>
      WorldMap lat: {lat}, lng: {lng}
      <button
        onClick={() => {
          setSearchParams({
            lat: 50,
            lng: 60,
          });
        }}
      >
        change pos
      </button>
    </div>
  );
}

export default WorldMap;
