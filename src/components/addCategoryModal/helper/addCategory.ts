import axios from "axios";

interface Data {
  name: string;
  query: string;
  icon: string;
  iconSize: number;
  isDeleted: boolean;
}

const addCategory = async (data: Data) => {
  const url = `${import.meta.env.VITE_BASE_SERVER_URL}/api/v1/add-category`;
  const result = await axios.post(url, { data });
  return result.data;
};

export default addCategory;
