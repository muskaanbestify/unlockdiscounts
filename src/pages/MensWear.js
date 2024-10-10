// MensWear.js
import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import axios from "axios";

const lazyLoad = (Component) => (props) =>
  (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );

const FashionLayout = lazyLoad(lazy(() => import("./LinkedPageLayout")));

function MensWear() {
  const title = "MENS";
  const category = "Men's Wear";

  const pathName = useLocation();

  const { dispatch, state } = useContext(ProductContext);
  const [extraPage, setExtraPage] = useState(1);
  const [page, setPage] = useState(1);

  const pageFromQuery = new URLSearchParams(pathName.search).get("page");

  const fetchMensWear = async (query = "", banner = "") => {
    // console.log("banner", banner);
    let res;
    if (banner === "latest") {
      // console.log("banner", banner);
      res = await axios.get(
        `https://product-gallery.onrender.com/api/banner/latest?${query}&mainCategory=menswear`
      );
    } else {
      res = await axios.get(
        `https://product-gallery.onrender.com/api/menswear?${query}`
      );
    }
    const data = res.data;
    setPage(parseInt(pageFromQuery) || 1);

    if (data.success) {
      // console.log("data", data.menswear);
      // console.log("extraPage", data.extraPages);
      if (banner === "latest") {
        dispatch({ type: "SET_PRODUCTS", payload: data?.products });
      } else {
        dispatch({ type: "SET_PRODUCTS", payload: data.menswear });
      }
      setExtraPage(data.extraPages);
    }

    if (!data.success) {
      dispatch({ type: "FETCH_ERROR", payload: data.message });
    }
    // console.log("res", res.data);
  };

  useEffect(() => {
    const url = window.location.href;
    const queryString = url ? url.split("?")[1] : "";
    const checkBanner = url.split("?")[0].split("/");
    // console.log("checkBanner", checkBanner);
    // console.log("queryString", queryString);

    // console.log("queryString", queryString);
    fetchMensWear(queryString, checkBanner[checkBanner.length - 1]);
  }, [pathName]);

  // Checking if the category is available in the database
  return (
    <FashionLayout
      category={category}
      title={title}
      page={page}
      extraPage={extraPage}
      handleLoadMoreProducts={fetchMensWear}
    />
  );
}

export default MensWear;
