import { useEffect, useState } from "react";

function useFetch(url = "", options = {}) {
  const [fetchData, setFetchData] = useState({
    data: null,
    isLoading: true,
    error: null,
  });
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((res) =>
        setFetchData({ ...fetchData, data: res, isLoading: false })
      )
      .catch((err) =>
        setFetchData({ ...fetchData, isLoading: false, error: err })
      );
  }, [url,options,fetchData]);
  return [fetchData.data, fetchData.isLoading, fetchData.error];
}

export default useFetch;
