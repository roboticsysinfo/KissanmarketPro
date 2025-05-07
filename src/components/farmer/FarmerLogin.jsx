import React, { useState } from 'react';
import { Form, Button, } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import api from '../../utils/api'; // Make sure to adjust the import path of API.js
import { Helmet } from 'react-helmet-async';
import ReCAPTCHA from 'react-google-recaptcha';

const FarmerLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // To handle loading state
    const [captchaValue, setCaptchaValue] = useState(null); // ✅ Captcha state
    const navigate = useNavigate();

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value); // ✅ Set captcha response
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!captchaValue) {
            toast.error("Please Complete CAPTCHA");
            return;
        }

        try {
            const response = await api.post('/farmer/login', { email, password, captchaValue });

            // Check if the response contains farmer data
            if (!response.data.farmer || !response.data.farmer.id) {
                throw new Error("Farmer data is missing in response");
            }

            // Save token, role, and farmer ID in localStorage
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userRole', 'farmer');
            localStorage.setItem('farmerId', response.data.farmer.id); // Store only farmer ID
            localStorage.setItem('farmerName', response.data.farmer.name);

            // Show success message
            toast.success('Login successful! Redirecting...');

            // Redirect to the farmer dashboard
            navigate('/farmer/farmer-dashboard');
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Login failed. Please try again.';
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };


    return (

        <>

            {/* SEO Meta Tags */}
            <Helmet>
                <title>Farmer Login | KissanGrowth – Access Your Farming Dashboard</title>
                <meta name="description" content="Log in to your KissanGrowth account to manage your shop, check points, and stay updated with the latest farming tools. Easy access for farmers." />
                <meta name="keywords" content="farmer login, KissanGrowth login, farming dashboard, digital farming India, shop management for farmers, agriculture platform login, farmer points system, KissanGrowth account" />
                <meta property="og:title" content="Farmer Login | KissanGrowth – Access Your Farming Dashboard" />
                <meta property="og:description" content="Log in to your KissanGrowth account to manage your shop, check points, and stay updated with the latest farming tools. Easy access for farmers." />
                <meta property="og:keywords" content="farmer login, KissanGrowth login, farming dashboard, digital farming India, shop management for farmers, agriculture platform login, farmer points system, KissanGrowth account" />
                <meta property="og:type" content="website" />
            </Helmet>


            <div className='container-fluid ps-0'>
                <div className='row'>
                    <div className='col-lg-7 col-xs-12 col-sm-12'>
                        <img src='/assets/images/bg/bg-banner-kg.jpg' style={styles.register_img} alt='Kisaan Growth' />
                    </div>

                    <div className='col-lg-5 col-xs-12 col-sm-12'>


                        <div className='form_container'>

                            <h4 className="text-start mb-4">
                                Farmer Login – Access Your KissanGrowth Account
                            </h4>
                            <p className='text-muted small'>Log in to manage your shop, view your orders, and explore farming tools</p>

                            <hr />
                            <Form onSubmit={handleLogin}>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                {/* ✅ reCAPTCHA Box */}
                                <div className="mb-30">
                                    <ReCAPTCHA
                                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} // ✅ Correct way
                                        onChange={handleCaptchaChange}
                                    />
                                </div>

                                <Button variant="success" className='btn btn-block w-100 mt-20' type="submit" block disabled={loading}>
                                    {loading ? 'Logging in...' : 'Login'}
                                </Button>

                                <Form.Group>
                                    <p className='p'>Don't have an account? <Link className='a' to="/farmer/register">Register Here</Link></p>
                                </Form.Group>
                            </Form>

                        </div>

                    </div>

                </div>

                <Link to="/" className="go-back-btn" >
                    ← Go Back to Website
                </Link>

            </div>


        </>

    );
};

const styles = {
    register_img: {
        width: "100%",
        height: "100vh",
    },
};

export default FarmerLogin;
