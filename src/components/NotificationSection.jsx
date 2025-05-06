import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotifications, markNotificationAsRead } from '../redux/slices/notificationsSlice';
import moment from "moment";
// import noNotification from "../../assets/no_notification.png";


const NotificationSection = () => {

    const dispatch = useDispatch();
    const notifications = useSelector((state) => state.notifications.items);
    const [refreshing, setRefreshing] = useState(false);

    const loadNotifications = async () => {
        setRefreshing(true);
        await dispatch(fetchNotifications());
        setRefreshing(false);
    };

    useEffect(() => {
        loadNotifications();
    }, []);

    const handleNotificationClick = (item) => {
        if (!item.read) {
            dispatch(markNotificationAsRead(item._id));
        }

        // Route to different pages
        if (item.type === "order") {
            window.location.href = `/orders/${item.orderId}`;
        } else if (item.type === "review") {
            window.location.href = `/shop-reviews/${item.reviewId}`;
        } else if (item.type === "familyRequest") {
            window.location.href = `/family-farmer-requests/${item.requestId}`;
        }
    };

    return (
        <div className="notifications-container">
            {notifications.length === 0 ? (
                <div className="empty-container">
                    <h3>No Notifications</h3>
                    <p>We’ll let you know when there is something to update you.</p>
                </div>
            ) : (
                <div className="notification-list">
                    {notifications.map((item) => (
                        <div
                            key={item._id || Math.random().toString()}
                            className={`notification-item ${item.read ? "read" : "unread"}`}
                            onClick={() => handleNotificationClick(item)}
                        >
                            <img
                                src={item.profileImage || "https://avatar.iran.liara.run/public/boy"}
                                alt="Avatar"
                                className="notification-avatar"
                            />
                            <div className="notification-content">
                                <h4>From: {item.userName}</h4>
                                <p>{item.message}</p>
                            </div>
                            <span className="notification-time">{moment(item.createdAt).fromNow()}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


export default NotificationSection