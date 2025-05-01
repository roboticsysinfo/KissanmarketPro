import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../utils/api'; // Ensure this path is correct

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: '',
        agreedToPrivacyPolicyAndTermsAndConditions: false, // NEW
        agreementTimestamp: '', // NEW
    });
    const [loading, setLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const payload = {
                ...formData,
                agreementTimestamp: new Date().toISOString(), // Set current time
            };

            const response = await api.post('/auth/customer_register', payload);
            toast.success('Registration successful! Please log in.');
            navigate('/login');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };


    return (

        <section className="account py-80">
            <div className="container container-lg">
                <form onSubmit={handleSubmit}>
                    <div className="row justify-content-center gy-4">
                        {/* Register Card Start */}
                        <div className="col-xl-6">
                            <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40">

                                <h6 className="text-xl ">Register as a Customer</h6>
                                <p className="text-muted mb-32">
                                    Register now to join Kissan Growth and start shopping fresh, locally-sourced produce directly from farmers.
                                </p>

                                <div className="mb-24">
                                    <label htmlFor="name" className="text-neutral-900 text-lg mb-8 fw-medium">
                                        Name <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="common-input"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                <div className="mb-24">
                                    <label htmlFor="email" className="text-neutral-900 text-lg mb-8 fw-medium">
                                        Email Address <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="common-input"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter Email Address"
                                        required
                                    />
                                </div>

                                <div className="mb-24">
                                    <label htmlFor="password" className="text-neutral-900 text-lg mb-8 fw-medium">
                                        Password <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        className="common-input"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter Password"
                                        required
                                    />
                                </div>

                                <div className="mb-24">
                                    <label htmlFor="phoneNumber" className="text-neutral-900 text-lg mb-8 fw-medium">
                                        Phone Number <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="common-input"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        maxLength={10}
                                        onChange={handleChange}
                                        placeholder="Enter Phone Number"
                                        required
                                    />
                                </div>

                                <div className="mb-24">
                                    <label htmlFor="address" className="text-neutral-900 text-lg mb-8 fw-medium">
                                        Address <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="common-input"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="Enter Address"
                                        required
                                    />
                                </div>

                                <div className="mb-24 form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="agreedToPrivacyPolicyAndTermsAndConditions"
                                        name="agreedToPrivacyPolicyAndTermsAndConditions"
                                        checked={formData.agreedToPrivacyPolicyAndTermsAndConditions}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label className="form-check-label ms-2" htmlFor="agreedToPrivacyPolicyAndTermsAndConditions">
                                        I agree to the{' '}
                                        <Link to="/privacy-policy" className="text-main-600 text-decoration-underline">
                                            Privacy Policy
                                        </Link>{' '}
                                        and{' '}
                                        <Link to="/terms-and-conditions" className="text-main-600 text-decoration-underline">
                                            Terms and Conditions
                                        </Link>
                                    </label>
                                </div>


                                <div className="mt-48">
                                    <button type="submit" className="btn btn-success py-18 px-40" disabled={loading}>
                                        {loading ? (
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        ) : (
                                            'Register'
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Register Card End */}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;
