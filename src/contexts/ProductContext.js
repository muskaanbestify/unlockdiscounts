import React, { createContext, useReducer, useEffect, useState } from "react";
import axios from "axios";
import productReducer from "../reducers/productReducer";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const initialState = {
    products: [],
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async () => {
    dispatch({ type: "FETCH_INIT" }); // Start loading

    try {
      const response = await axios.get(
        `https://products2-tt3o.onrender.com/api/products?page=${page}&limit=21`
      );

      if (response.data.length === 0) {
        setHasMore(false);
      } else {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data,
        });
      }
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
      console.error(error);
    }
  };

  const handleLoadMore = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <ProductContext.Provider
      value={{ state, dispatch, handleLoadMore, hasMore }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
