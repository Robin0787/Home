import axios from "axios";

const deleteItem = async (id: string) => {
  const url = `${
    import.meta.env.VITE_BASE_SERVER_URL
  }/api/v1/delete-item/${id}`;
  const result = await axios.delete(url);
  return result.data;
};

export default deleteItem;
