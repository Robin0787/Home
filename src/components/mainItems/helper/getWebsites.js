import axios from 'axios';

const getWebsites = async () => {
    const url = import.meta.env.VITE_BASE_SERVER_URL + '/websites';
    const res = await axios.get(url);
    return res.data;
};

export default getWebsites;