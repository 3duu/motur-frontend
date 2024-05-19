import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEndpointConfigs } from '../actions/endpointConfigActions';

const HomePage = () => {
    const dispatch = useDispatch();
    const endpointConfig = useSelector(state => state.endpointConfig);

    useEffect(() => {
        dispatch(fetchEndpointConfigs());
    }, [dispatch]);

    return (
        <div>
            <h1>Home Page</h1>
            {endpointConfig.loading ? (
                <p>Loading...</p>
            ) : endpointConfig.error ? (
                <p>Error: {endpointConfig.error}</p>
            ) : (
                <ul>
                    {endpointConfig.endpointConfigs.map(config => (
                        <li key={config.id}>{config.url}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HomePage;
