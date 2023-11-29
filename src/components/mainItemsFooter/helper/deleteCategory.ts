import axios from "axios";

const deleteCategory = async (query: string) => {
  const url: string =
    import.meta.env.VITE_BASE_SERVER_URL + `/api/v1/delete-category/${query}`;
  const result = await axios.delete(url);
  return result.data;
};

export default deleteCategory;
