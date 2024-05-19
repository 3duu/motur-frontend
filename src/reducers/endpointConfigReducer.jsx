import {
    FETCH_ENDPOINT_CONFIGS_REQUEST,
    FETCH_ENDPOINT_CONFIGS_SUCCESS,
    FETCH_ENDPOINT_CONFIGS_FAILURE
} from '../actions/endpointConfigActions';

const initialState = {
    loading: false,
    endpointConfigs: [],
    error: ''
};

const endpointConfigReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ENDPOINT_CONFIGS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_ENDPOINT_CONFIGS_SUCCESS:
            return {
                loading: false,
                endpointConfigs: action.payload,
                error: ''
            };
        case FETCH_ENDPOINT_CONFIGS_FAILURE:
            return {
                loading: false,
                endpointConfigs: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export default endpointConfigReducer;
