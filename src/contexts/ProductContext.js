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

  const fetchProducts = async (url) => {
    try {
      const response = await axios.get(`${url}&page=${page}&limit=21`);
      if (response.data.length === 0) {
        setHasMore(false);
      }

      dispatch({
        type: "FETCH_SUCCESS",
        payload: [...state.products, ...response.data],
      });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  useEffect(() => {
    setPage(1); // Reset page to 1 on initial render
  }, []);

  const handleLoadMore = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <ProductContext.Provider value={{ state, dispatch, fetchProducts, handleLoadMore }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
