import axios from "axios";

const API_KEY=import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL="https://youtube138.p.rapidapi.com"

const options = {
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  console.log("API Key:", API_KEY);

export const fetchData=async(url)=>{
    try{
        const {data} = await axios.get(`${BASE_URL}/${url}`,options);
        return data;
    }catch(error){
        console.error("error fetching api data: ",error);
        throw error;
    }
}