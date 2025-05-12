import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosInstance from '../../utils/axiosInstance';
import { useParams } from 'react-router-dom';

const FarmerInvoicePage = () => {

    const { orderId } = useParams();
    const [invoiceData, setInvoiceData] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log("orderid", orderId)

    useEffect(() => {
        const fetchInvoice = async () => {
            try {
                const res = await axiosInstance.get(`/farmer/invoice/${orderId}`);
                setInvoiceData(res.data);
            } catch (error) {
                console.error('Error fetching invoice:', error);
            } finally {
                setLoading(false);
            }
        };

        if (orderId) {
            fetchInvoice();
        }
    }, [orderId]);

    if (loading) return <p>Loading...</p>;
    if (!invoiceData) return <p>No invoice found.</p>;

    const { invoice, farmer } = invoiceData;

    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h1>Robotic Sys Info</h1>
                <h2>Kissan Growth</h2>
                <hr style={{ marginTop: '1rem' }} />
            </div>

            {/* Invoice Info Table */}
            <table
                style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginBottom: '2rem',
                    border: '1px solid #ccc'
                }}
            >
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th style={cellStyle}>Order ID</th>
                        <th style={cellStyle}>Date</th>
                        <th style={cellStyle}>Product</th>
                        <th style={cellStyle}>Price</th>
                        <th style={cellStyle}>GST</th>
                        <th style={cellStyle}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={cellStyle}>{invoice.orderId}</td>
                        <td style={cellStyle}>{new Date(invoice.billGeneratedAt).toLocaleString()}</td>
                        <td style={cellStyle}>{invoice.productName}</td>
                        <td style={cellStyle}>₹{invoice.priceValue}</td>
                        <td style={cellStyle}>₹{invoice.gstAmount}</td>
                        <td style={cellStyle}>₹{invoice.totalAmount}</td>
                    </tr>
                </tbody>
            </table>

            {/* Farmer Info */}
            <h3>Farmer Details</h3>
            <table
                style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    border: '1px solid #ccc'
                }}
            >
                <tbody>
                    <tr>
                        <td style={cellStyle}><strong>Name:</strong></td>
                        <td style={cellStyle}>{farmer.name}</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}><strong>Phone:</strong></td>
                        <td style={cellStyle}>{farmer.phoneNumber}</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}><strong>Email:</strong></td>
                        <td style={cellStyle}>{farmer.email}</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}><strong>State:</strong></td>
                        <td style={cellStyle}>{farmer.state}</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}><strong>City/District:</strong></td>
                        <td style={cellStyle}>{farmer.city_district}</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}><strong>Address:</strong></td>
                        <td style={cellStyle}>{farmer.address}</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}><strong>Registration #:</strong></td>
                        <td style={cellStyle}>{farmer.registrationNumber}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const cellStyle = {
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'left',
};

export default FarmerInvoicePage;
