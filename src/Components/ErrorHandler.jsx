import React, { useEffect, useState } from "react";

function ErrorHandler({ apiData, city }) {
  const [isError, setisError] = useState(false);

  useEffect(() => {
    if (apiData.cod === "404") {
      setisError(true);
    }
  }, [apiData.cod, city]);

  return <div>{isError && <h2>{apiData.message}</h2>}</div>;
}

export default ErrorHandler;
