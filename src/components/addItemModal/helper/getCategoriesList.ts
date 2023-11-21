import axios from "axios";

const getCategoriesList = async () => {
  const url: string =
    import.meta.env.VITE_BASE_SERVER_URL + `/api/v1/categories-list`;
  const res = await axios.get(url);
  return res.data;
};

export default getCategoriesList;
