import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const CustomerInvoicePage = () => {

    const { orderId } = useParams();
    const [invoiceData, setInvoiceData] = useState(null);
    const [loading, setLoading] = useState(true);
    const invoiceRef = useRef();

    useEffect(() => {
        const fetchInvoice = async () => {
            try {
                const res = await axiosInstance.get(`/customer/invoice/${orderId}`);
                setInvoiceData(res.data);
            } catch (error) {
                console.error('Error fetching customer invoice:', error);
            } finally {
                setLoading(false);
            }
        };

        if (orderId) fetchInvoice();
    }, [orderId]);

    const handleDownloadPDF = async () => {
        const element = invoiceRef.current;
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const margin = 10;

        const usableWidth = pdfWidth - margin * 2;
        const usableHeight = pdfHeight - margin * 2;

        const imgProps = pdf.getImageProperties(imgData);
        const imgRatio = imgProps.height / imgProps.width;
        const imgHeight = usableWidth * imgRatio;

        pdf.addImage(imgData, 'PNG', margin, margin, usableWidth, imgHeight > usableHeight ? usableHeight : imgHeight);
        pdf.save(`customer_invoice_${orderId}.pdf`);
    };

    if (loading) return <p>Loading...</p>;
    if (!invoiceData) return <p>No invoice found.</p>;

    const { invoiceDetails } = invoiceData;
    const { orderId: id, customer, product, gstAmount, totalAmount } = invoiceDetails;

    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
            <button onClick={handleDownloadPDF} style={{ marginBottom: '1rem' }} className="btn btn-success">
                Download Invoice PDF
            </button>

            <div ref={invoiceRef}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h3>Robotic Sys Info</h3>
                    <h4>Kissan Growth</h4>
                    <p >GST: 06CDBPS7489B1ZB</p>
                    <hr style={{ marginTop: '1rem' }} />
                </div>

                <h6>Customer Details</h6>
                <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
                    <tbody>
                        <tr>
                            <td style={cellStyle}><strong>Name:</strong></td>
                            <td style={cellStyle}>{customer.name}</td>
                        </tr>
                        <tr>
                            <td style={cellStyle}><strong>Phone:</strong></td>
                            <td style={cellStyle}>{customer.phoneNumber}</td>
                        </tr>
                        <tr>
                            <td style={cellStyle}><strong>Email:</strong></td>
                            <td style={cellStyle}>{customer.email}</td>
                        </tr>
                        <tr>
                            <td style={cellStyle}><strong>Address:</strong></td>
                            <td style={cellStyle}>{customer.address}</td>
                        </tr>
                    </tbody>
                </table>

                <h6 style={{ marginTop: '1.5rem' }}>Order Details</h6>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', border: '1px solid #ccc' }}>
                    <thead>

                        <tr style={{ backgroundColor: '#f2f2f2' }}>
                            <th style={cellStyle}>Order ID</th>
                            <th style={cellStyle}>Product</th>
                            <th style={cellStyle}>Price</th>
                            <th style={cellStyle}>GST</th>
                            <th style={cellStyle}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={cellStyle}>{id}</td>
                            <td style={cellStyle}>{product.name}</td>
                            <td style={cellStyle}>₹{product.priceValue}</td>
                            <td style={cellStyle}>₹{gstAmount}</td>
                            <td style={cellStyle}>₹{totalAmount}</td>
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

export default CustomerInvoicePage;
