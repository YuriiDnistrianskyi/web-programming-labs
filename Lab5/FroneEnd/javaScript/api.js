const BASE_URL = 'http://127.0.0.1:5000';
const RESOURSE_URL = `${BASE_URL}/stadium`;

const baseRequest = async ({urlPath = '', method = 'GET', body = null}) => {
    try {
        const reqParams = {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body)
        }

        return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
    } catch (error) {

    }
}

export const getStadiums = async () => {
    const rawResponse = await baseRequest({ method: "GET"});

    return rawResponse.json();
}

export const postStadium = (body) => baseRequest({method: "POST", body});

export const putStadium = async (id, body) => baseRequest({urlPath: `/${id}`, method: "PUT", body});

export const deleteStadium = (id) => baseRequest({urlPath: `/${id}`, method: "DELETE", id});
