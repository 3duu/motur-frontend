import { combineReducers } from '@reduxjs/toolkit';
import endpointConfigReducer from './endpointConfigReducer';
import providerReducer from './providerReducer';

const rootReducer = combineReducers({
    endpointConfig: endpointConfigReducer,
    provider: providerReducer
});

export default rootReducer;
