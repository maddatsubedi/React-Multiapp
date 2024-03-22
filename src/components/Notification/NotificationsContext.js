import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NotificationsContext = createContext();

export const useNotifications = () => useContext(NotificationsContext);

export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notice) => {
    const Id = uuidv4();
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      {
        ...notice,
        id: Id
      }
    ]);
    setTimeout(() => {
      removeNotification(Id);
    }, notice.duration || 5000);
  };

  const removeNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notice) => notice.id !== id)
    );
  };

  return (
    <NotificationsContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationsContext.Provider>
  );
};
