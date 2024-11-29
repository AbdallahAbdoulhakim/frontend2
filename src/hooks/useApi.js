import { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

const useApi = (endpoint, method = "GET", body = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance({
          url: endpoint,
          method: method,
          data: body,
        });
        setData(response.data);
        setError(null);
      } catch (error) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, method, body]); // Re-run the effect if dependencies change

  return { data, error, loading };
};

export default useApi;
