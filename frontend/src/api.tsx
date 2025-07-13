import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    console.log("Searching for companies with query:", query);
    console.log("API Key:", process.env.REACT_APP_API_KEY);
    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("axios error message: ", error.message);
      console.log("error: ", error);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An expected error has occured.";
    }
  }
};
