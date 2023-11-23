import axios from "axios";

type Data = {
  name: string;
  logo: string;
  url: string;
  category: string[];
  ring: boolean;
};

const postWebsiteToDB = async (data: Data) => {
  const url: string =
    import.meta.env.VITE_BASE_SERVER_URL + `/api/v1/add-website`;
  const res = await axios.post(url, { ...data });
  return res.data;
};

export default postWebsiteToDB;
