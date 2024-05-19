import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProviders } from '../actions/providerActions';

const ProviderList = () => {
    const dispatch = useDispatch();
    const providerState = useSelector(state => state.provider);

    useEffect(() => {
        dispatch(fetchProviders());
    }, [dispatch]);

    return (
        <div>
            <h1>Gerenciar Integradores</h1>
            {providerState.loading ? (
                <p>Loading...</p>
            ) : providerState.error ? (
                <p>Error: {providerState.error}</p>
            ) : (
                <ul>
                    {providerState.providers.map(provider => (
                        <li key={provider.id}>{provider.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProviderList;
