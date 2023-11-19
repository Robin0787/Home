import axios from 'axios';

const getWebsites = async (queryName) => {
    let url;
    if (queryName) {
       url = import.meta.env.VITE_BASE_SERVER_URL + `/api/v1/websites/${queryName}`;
    } else {
        url = import.meta.env.VITE_BASE_SERVER_URL + `/api/v1/websites/home`;
    }
    const res = await axios.get(url);
    return res.data;
};

export default getWebsites;