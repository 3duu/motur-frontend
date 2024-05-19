import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEndpointConfigs } from '../actions/endpointConfigActions';

const EndpointConfigList = () => {
    const dispatch = useDispatch();
    const endpointConfigState = useSelector(state => state.endpointConfig);

    useEffect(() => {
        dispatch(fetchEndpointConfigs());
    }, [dispatch]);

    return (
        <div>
            <h1>Configurar Endpoints</h1>
            {endpointConfigState.loading ? (
                <p>Loading...</p>
            ) : endpointConfigState.error ? (
                <p>Error: {endpointConfigState.error}</p>
            ) : (
                <ul>
                    {endpointConfigState.endpointConfigs.map(config => (
                        <li key={config.id}>{config.url}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EndpointConfigList;
