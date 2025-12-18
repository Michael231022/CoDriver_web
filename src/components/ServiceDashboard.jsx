import React from 'react';

function ServiceDashboard() {
    const services = [
        { 
        id: 1, 
        name: 'Ride Booking', 
        image: '/image/icons/ride-booking.png',
        description: 'Book a ride with ease and convenience.' 
        },
        { 
        id: 2, 
        name: 'Driver Tracking',
        image: '/image/icons/driver-tracking.png',
        description: 'Track your driver in real-time.' 
        },
        { 
        id: 3, 
        name: 'Payment Management',
        image: '/image/icons/payment-management.png', 
        description: 'Manage your payment methods securely.' 
        },
        { 
        id: 4, 
        name: 'Ride History', 
        image: '/image/icons/ride-history.png', 
        description: 'View your past rides and receipts.' 
        },
    ];

    return (
        <div className="service-dashboard">
        <h1>Service Dashboard</h1>
        {/* Additional dashboard content can be added here */}
        </div>
    );
}

export default ServiceDashboard;