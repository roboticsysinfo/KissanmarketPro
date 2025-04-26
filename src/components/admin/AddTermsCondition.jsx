import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { fetchSiteDetails, updateTermsAndConditions } from '../../redux/slices/siteDeatilsSlice'; // correct path lagana
import toast from 'react-hot-toast';

const AddTermsCondition = () => {
    const dispatch = useDispatch();

    const { data: siteDetails, siteDetailsLoading } = useSelector((state) => state.siteDetails);

    const [termsContent, setTermsContent] = useState('');

    // Site details fetch karne ke liye
    useEffect(() => {
        if (!siteDetails) {
            dispatch(fetchSiteDetails());
        } else if (siteDetails.termsAndConditions) {
            setTermsContent(siteDetails.termsAndConditions);
        }
    }, [dispatch, siteDetails]);

    // Editor content change
    const handleContentChange = (value) => {
        setTermsContent(value);
    };

    // Form submit
    const handleTermsSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(updateTermsAndConditions(termsContent)).unwrap();
            toast.success('Terms & Conditions updated successfully!');
        } catch (error) {
            console.error(error);
            toast.error('Failed to update Terms & Conditions');
        }
    };

    return (
        <div className="p-5 border rounded">
            <h2 className="text-xl font-bold mb-4">Terms & Conditions</h2>
            <hr className="mb-4" />
            <Form onSubmit={handleTermsSubmit}>
                <Form.Group controlId="termsContent" className="mb-4">
                    <Form.Label>Content</Form.Label>
                    <ReactQuill
                        value={termsContent}
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

export default AddTermsCondition;
