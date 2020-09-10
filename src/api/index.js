import axios from 'axios';

const fetchEnum = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',

    APPLICATION_JSON: 'application/json',
    APPLICATION_X_WWW_FORM_URL_ENCODED: 'application/x-www-form-urlencoded',
    MULTIPART_FORM_DATA: 'multipart/form-data',
    TEXT_PLAIN: 'text/plain',
    SCOPE: "public read_photos write_photos write_likes write_collections",
};

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 12000,
    // withCredentials: true,
    headers: {
        'Accept': fetchEnum.APPLICATION_JSON,
        'Content-Type': fetchEnum.APPLICATION_JSON,
        'Authorization': process.env.REACT_APP_ACCESS_KEY,
        "scope": fetchEnum.SCOPE,
    }
});

const request = async (method, url, data) => {
    const config = {
        method,
        url,
        data
    };

    if(data){
        if(method === 'get'){
            config.params = data
        } else {
            config.data = data;
        }
    }

    try{
        const result = await axiosInstance(config);
        // console.log('@@ result', result);
        return result;
    }catch (e) {
        if(e.response){
            if(e.response.status === 401){
                console.log('@@ 로그인실패로 이동');
            }
        }
    }
};

const API = {
    fetchXXX: () => request('get', `/...`),
}

export default API