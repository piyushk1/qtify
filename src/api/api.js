import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do/";

export const getTopAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log("Error is ", e);
  }
};
