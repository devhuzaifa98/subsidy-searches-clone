import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useForm from './hooks/useForm';
import ConsentForm from './pages/consent_form';
import Form from './pages/form';
import Home from './pages/home';
import Plans from './pages/plans';
import PrivacyPolicy from './pages/privacy_policy';
import TermsAndConditions from './pages/terms_and_conditions';
import ThankYou from './pages/thank_you';
import './style.css';

const App = () => {
    const queryClient = new QueryClient();
    const { initializeForm } = useForm();
    useEffect(() => {
        initializeForm();
    }, []);
    return (
        <Router>
            <div className="overflow-y-auto bg-gray-100">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/form" element={<Form />} />
                    <Route
                        path="/plans"
                        element={
                            <QueryClientProvider client={queryClient}>
                                <Plans />
                            </QueryClientProvider>
                        }
                    />
                    <Route path="/consent" element={<ConsentForm />} />
                    <Route
                        path="/terms-and-conditions"
                        element={<TermsAndConditions />}
                    />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/thank-you" element={<ThankYou />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
