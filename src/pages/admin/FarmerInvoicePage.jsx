import React, { useEffect, useState, useRef } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const FarmerInvoicePage = () => {
    const { orderId } = useParams();
    const [invoiceData, setInvoiceData] = useState(null);
    const [loading, setLoading] = useState(true);
    const invoiceRef = useRef(); // 👈 for capturing PDF

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


    const handleDownloadPDF = async () => {
        const element = invoiceRef.current;
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        const margin = 10; // mm
        const usableWidth = pdfWidth - margin * 2;
        const usableHeight = pdfHeight - margin * 2;

        const imgProps = pdf.getImageProperties(imgData);
        const imgRatio = imgProps.height / imgProps.width;
        const imgHeight = usableWidth * imgRatio;

        pdf.addImage(
            imgData,
            'PNG',
            margin,
            margin,
            usableWidth,
            imgHeight > usableHeight ? usableHeight : imgHeight
        );

        pdf.save(`farmer_invoice_${orderId}.pdf`);
    };


    if (loading) return <p>Loading...</p>;
    if (!invoiceData) return <p>No invoice found.</p>;

    const { invoice, farmer } = invoiceData;

    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
            {/* Download Button */}
            <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
                <button onClick={handleDownloadPDF} className="btn btn-success">
                    Download PDF
                </button>
            </div>

            {/* Invoice Section to convert to PDF */}
            <div ref={invoiceRef}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h3>Robotic Sys Info</h3>
                    <h4>Kissan Growth</h4>
                    <p>GST: 06CDBPS7489B1ZB</p>
                    <hr style={{ marginTop: '1rem' }} />
                </div>

                <h6 style={{ marginTop: '2rem' }}> Details</h6>
                <table style={tableStyle}>
                    <tbody>
                        <tr><td style={cellStyle}><strong>Name:</strong></td><td style={cellStyle}>{farmer.name}</td></tr>
                        <tr><td style={cellStyle}><strong>Phone:</strong></td><td style={cellStyle}>{farmer.phoneNumber}</td></tr>
                        <tr><td style={cellStyle}><strong>Email:</strong></td><td style={cellStyle}>{farmer.email}</td></tr>
                        <tr><td style={cellStyle}><strong>State:</strong></td><td style={cellStyle}>{farmer.state}</td></tr>
                        <tr><td style={cellStyle}><strong>City/District:</strong></td><td style={cellStyle}>{farmer.city_district}</td></tr>
                        <tr><td style={cellStyle}><strong>Address:</strong></td><td style={cellStyle}>{farmer.address}</td></tr>
                        <tr><td style={cellStyle}><strong>Registration No #:</strong></td><td style={cellStyle}>{farmer.registrationNumber}</td></tr>
                    </tbody>
                </table>

                <h6 style={{ marginTop: '2rem' }}>Order Details</h6>
                <table style={tableStyle}>
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

            </div>
        </div>
    );
};

const cellStyle = {
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'left',
};

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '2rem',
    border: '1px solid #ccc',
};

export default FarmerInvoicePage;
