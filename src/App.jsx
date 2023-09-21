import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Login from "./pages/Login/Login";
import AppPage from "./pages/AppPage/AppPage";
import NotFound from "./pages/NotFound";
import Cities from "./components/Cities/Cities";
import Countries from "./components/Countries/Countries";
import { useEffect, useState } from "react";
import City from "./components/City/City";
import CityForm from "./components/CityForm/CityForm";

const BASE_URL = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        setCities(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppPage />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route
            path="cities"
            element={<Cities cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<Countries cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<CityForm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
