import React from 'react';
import { Routes } from './routes';
import AuthWrapper from './hooks/useAuth';

const App = () => (
    <AuthWrapper>
        <Routes />
    </AuthWrapper>
);

export default App;
