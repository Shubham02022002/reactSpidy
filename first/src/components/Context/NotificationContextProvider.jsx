import React, { useState, useContext } from "react";
import NotificationContext from "./NotificationContext";
const NotificationContextProvider = () => {
  const [notification, setNotification] = useState(null);

  const showNotificationHandler = (notification) => {
    setNotification(notification);
  };

  const hideNotificationHandler = () => {
    setNotification(null);
  };

  return (
    <NotificationContext.Provider
      value={{
        notification: notification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler,
      }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
};
export default NotificationContextProvider;
