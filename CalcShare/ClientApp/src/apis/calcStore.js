import axios from 'axios'

export default (baseurl) => {
    return axios.create(
        {
            baseURL: `${baseurl}/api`
        });
}



