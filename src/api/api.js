import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do/";

export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log("Error is ", e);
  }
};

export const fetchNewAlbums = async ()=>{
  try {
      const res=await axios.get(`${BACKEND_ENDPOINT}/albums/new`)
      return res.data
  }catch(e){
    console.log("Error is ", e);
  }
}
export const fetchAllSongs = async ()=>{
  try {
      const res=await axios.get(`${BACKEND_ENDPOINT}/songs`)
      return res.data
  }catch(e){
    console.log("Error is ", e);
  }
}