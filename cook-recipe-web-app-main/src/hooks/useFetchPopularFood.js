import { useQuery } from "react-query";

const useFetchPopularFood = (pageNumber, pageSize) => {
 
  const API_KEY = "31eba22ff8524ef1b164cd9fe83b2322";

  const fetchPopularFood = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&sort=popularity&sortDirection=desc&number=${pageSize}&offset=${
        (pageNumber - 1) * pageSize
      }`
    );

    const data = await response.json();
    return data.results;
  };
  return useQuery(["popularFood", pageNumber, pageSize], fetchPopularFood, {
    refetchOnWindowFocus: false,
    staleTime: 60000, // cache for 1 minute
  });
};

export default useFetchPopularFood;
