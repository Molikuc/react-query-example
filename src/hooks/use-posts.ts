import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Data {
  //interface if needed example:
  //id: number;
  // title:string
}

//if interface needed don't forget to put the needed params in the function params
//this function will get the data from the api
export const usePost = () => {
  return useQuery({
    //queryKey are required check the documentation
    queryKey: ["todos"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/`
      );
      return data;
      //return data as Data if interface needed
    },
  });
};
