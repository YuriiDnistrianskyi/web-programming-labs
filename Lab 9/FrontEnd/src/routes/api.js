import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:5000';
const EXTRA_URL = `${BASE_URL}/stadium`

async function requestItems(filters = {}) {
    const params = new URLSearchParams(filters).toString()
    const response = await axios.get(`${EXTRA_URL}?${params}`);
    return response;
}

export default requestItems;
