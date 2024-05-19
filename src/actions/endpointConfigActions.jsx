import axios from 'axios';

export const FETCH_ENDPOINT_CONFIGS_REQUEST = 'FETCH_ENDPOINT_CONFIGS_REQUEST';
export const FETCH_ENDPOINT_CONFIGS_SUCCESS = 'FETCH_ENDPOINT_CONFIGS_SUCCESS';
export const FETCH_ENDPOINT_CONFIGS_FAILURE = 'FETCH_ENDPOINT_CONFIGS_FAILURE';

export const fetchEndpointConfigs = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_ENDPOINT_CONFIGS_REQUEST });
        axios.get('/api/endpoint-configs')
            .then(response => {
                dispatch({ type: FETCH_ENDPOINT_CONFIGS_SUCCESS, payload: response.data });
            })
            .catch(error => {
                dispatch({ type: FETCH_ENDPOINT_CONFIGS_FAILURE, payload: error.message });
            });
    };
};