import { useState, useEffect } from "react";

const useCurrenctinfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(async () => {
    const response = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    );
    const data = await response.json();
    return data;
  }, [currency]);
  console.log(data);
  return data;
};

export default useCurrenctinfo;
