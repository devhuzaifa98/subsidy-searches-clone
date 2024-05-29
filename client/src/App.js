import React, { useEffect } from 'react';
import Home from './pages/home';
import Form from './pages/form';
import Plans from './pages/plans';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import "./style.css"
import ConsentForm from './pages/consent_form';
import TermsAndConditions from './pages/terms_and_conditions';
import PrivacyPolicy from './pages/privacy_policy';
import ThankYou from './pages/thank_you';
import useForm from './hooks/useForm';

const App = () => {
    const queryClient = new QueryClient()
    const { initializeForm } = useForm()
    useEffect(() => {
        initializeForm()
    }, [])
    return (
        <Router>
            <div className="bg-gray-100 overflow-y-auto">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/form" element={
                            <Form />
                    } />
                    <Route path="/plans" element={
                        <QueryClientProvider client={queryClient}>
                            <Plans />
                        </QueryClientProvider>
                    } />
                    <Route path="/consent" element={
                        <ConsentForm />
                    } />
                    <Route path="/terms-and-conditions" element={
                        <TermsAndConditions />
                    } />
                    <Route path="/privacy-policy" element={
                        <PrivacyPolicy />
                    } />
                    <Route path="/thank-you" element={
                        <ThankYou />
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
