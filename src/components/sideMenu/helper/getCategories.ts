import axios from "axios";

const getCategories = async () => {
  const url: string =
    import.meta.env.VITE_BASE_SERVER_URL + `/api/v1/categories`;
  const res = await axios.get(url);
  return res.data;
};

export default getCategories;
