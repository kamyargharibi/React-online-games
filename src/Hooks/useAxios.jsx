import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL =
  "https://free-to-play-games-database.p.rapidapi.com/api/";

const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const result = await axios.request(axiosParams);
      setResponse(result.data);
      console.log(response);
      console.log(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, loading, error };
};

export default useAxios;
