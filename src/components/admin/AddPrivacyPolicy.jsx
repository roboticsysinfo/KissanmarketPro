import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { fetchSiteDetails, updatePrivacyPolicy } from '../../redux/slices/siteDeatilsSlice'; // path dhyan se lagana
import toast from 'react-hot-toast';

const AddPrivacyPolicy = () => {
    const dispatch = useDispatch();

    const { data: siteDetails, siteDetailsLoading } = useSelector((state) => state.siteDetails);

    const [privacyContent, setPrivacyContent] = useState('');

    // Fetch site details
    useEffect(() => {
        if (!siteDetails) {
            dispatch(fetchSiteDetails());
        } else if (siteDetails.privacyPolicy) {
            setPrivacyContent(siteDetails.privacyPolicy);
        }
    }, [dispatch, siteDetails]);

    // Content change
    const handleContentChange = (value) => {
        setPrivacyContent(value);
    };

    // Submit form
    const handlePrivacySubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(updatePrivacyPolicy(privacyContent)).unwrap();
            toast.success('Privacy Policy updated successfully!');
        } catch (error) {
            console.error(error);
            toast.error('Failed to update Privacy Policy');
        }
    };

    return (
        <div className="p-5 border rounded">
            <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
            <hr className="mb-4" />
            <Form onSubmit={handlePrivacySubmit}>
                <Form.Group controlId="privacyContent" className="mb-4">
                    <Form.Label>Content</Form.Label>
                    <ReactQuill
                        value={privacyContent}
                        onChange={handleContentChange}
                        theme="snow"
                        style={{ height: '400px', marginBottom: '50px' }}
                    />
                </Form.Group>

                <Form.Group>
                    <Button variant="success" type="submit" disabled={siteDetailsLoading}>
                        {siteDetailsLoading ? 'Updating...' : 'Submit'}
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default AddPrivacyPolicy;
