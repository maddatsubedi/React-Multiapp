import React, { useEffect } from 'react'
import { useNotifications } from '../Notification/NotificationContext';
import { FaGithub } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

import 'highlight.js/styles/default.css';
import hljs from "highlight.js";

import './NotificationPage.css';

const primarySuccessMarkdown = `addNotification(
  {
    text: "Text",
    status: "success",
  }
);
`;
const primaryFailMarkdown = `addNotification(
  {
    text: "Text",
    status: "fail",
  }
);
`;
const primaryWarningMarkdown = `addNotification(
  {
    text: "Text",
    status: "warning",
  }
);
`;
const titleDescriptionMarkdown = `addNotification(
  {
    title: "Title",
    description : "Description",
    status: "success",
  }
);
`;

const onlyTextMarkdown = `addNotification(
  {
    text: "Text",
  }
);
`;

const customIconMarkdown = `addNotification(
  {
    text: "Text",
    icon: "✅"
  }
);
`;
const closeRotateMarkdown = `addNotification(
  {
    text: "Text",
    status : "success",
    closeButtonRotate: true,
  }
);
`;
const customDurationMarkdown = `addNotification(
  {
    text: "Text",
    duration: "2s",
  }
);
`;
const customBackgroundMarkdown = `addNotification(
  {
    text: "Text",
    status: "success",
    background: "skyblue"
  }
);
`;
const customColorMarkdown = `addNotification(
  {
    text: "Text",
    status: "success",
    color: "orange"
  }
);
`;
const fixedMarkdown = `addNotification(
  {
    text: "Text",
    status: "success",
    fixed: true,
  }
);
`;

const NotificationPage = () => {
  const { addNotification } = useNotifications();

  useEffect(() => {
    hljs.highlightAll();
  });

  const NotificationSection = ({ children, onClick, info }) => {
    return (
      <>
        <div className="notification-section">
          <div className="notification-info">
            {info}
          </div>
          <div className="code">
            <pre>
              <code className="language-javascript">
                {children}
              </code>
            </pre>
          </div>
          <div className="button">
            <button onClick={onClick}>
              Click Me
            </button>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="notificationPage-main">
        <div className="notificationPage">
          <div className="info">
            <div className="header">
              <div className="header-text">
                React Notification
              </div>
              <div className="header-icon">
                <IoNotifications />
              </div>
            </div>
            <div className="description">
              Dynamic React notification component with easy customization and rich feature set.
            </div>
            <div className="github">
              <p className="text">
                For more information and to learn how to use our notification component, visit our GitHub repository.
              </p>
              <div className="github-link">
                <div className="icon">
                  <FaGithub />
                </div>
                <a target='_blank' rel="noreferrer" href="https://github.com/ritoncharlox/React-Notification">
                  https://github.com/ritoncharlox/React-Notification
                </a>
              </div>
              <div className="github-link-info">
                Feel free to explore the source code, contribute, or integrate it into your React projects!
              </div>
            </div>
          </div>
          <div className="demo">
            <div className="header">
              Notifications Demo
            </div>
            <div className="demo-section">
              <div className="demos">
                <NotificationSection info={
                  `
                Primary Success
                `
                } onClick={() => {
                  addNotification(
                    {
                      text: "Text",
                      status: "success",
                    }
                  );
                }}>
                  {primarySuccessMarkdown}
                </NotificationSection>
                <NotificationSection info={
                  `
                Primary Fail
                `
                } onClick={() => {
                  addNotification(
                    {
                      text: "Text",
                      status: "fail",
                    }
                  );
                }}>
                  {primaryFailMarkdown}
                </NotificationSection>
                <NotificationSection info={
                  `
                Primary Warning
                `
                } onClick={() => {
                  addNotification(
                    {
                      text: "Text",
                      status: "warning",
                    }
                  );
                }}>
                  {primaryWarningMarkdown}
                </NotificationSection>
                <NotificationSection info={
                  `
                Custom Duration
                `
                } onClick={() => {
                  addNotification(
                    {
                      text: "Text",
                      duration: "2s",
                    }
                  );
                }}>
                  {customDurationMarkdown}
                </NotificationSection>
                <NotificationSection info={
                  `
                Fixed (No Autoclose)
                `
                } onClick={() => {
                  addNotification(
                    {
                      text: "Text",
                      status: "success",
                      fixed: true,
                    }
                  );
                }}>
                  {fixedMarkdown}
                </NotificationSection>
                <NotificationSection info={
                  `
                Title and Description
                `
                } onClick={() => {
                  addNotification(
                    {
                      title: "Title",
                      description: "Description",
                      status: "success",
                    }
                  );
                }}>
                  {titleDescriptionMarkdown}
                </NotificationSection>
                <NotificationSection info={
                  `
                Only Text
                `
                } onClick={() => {
                  addNotification(
                    {
                      text: "Text",
                    }
                  );
                }}>
                  {onlyTextMarkdown}
                </NotificationSection>
                <NotificationSection info={
                  `
                Custom Icon
                `
                } onClick={() => {
                  addNotification(
                    {
                      text: "Text",
                      icon: "✅"
                    }
                  );
                }}>
                  {customIconMarkdown}
                </NotificationSection>
                <NotificationSection info={
                  `
                Close Rotate
                `
                } onClick={() => {
                  addNotification(
                    {
                      text: "Text",
                      status: "success",
                      closeButtonRotate: true,
                    }
                  );
                }}>
                  {closeRotateMarkdown}
                </NotificationSection>
                <NotificationSection info={
                  `
                Custom Background
                `
                } onClick={() => {
                  addNotification(
                    {
                      text: "Text",
                      status: "success",
                      background: "skyblue"
                    }
                  );
                }}>
                  {customBackgroundMarkdown}
                </NotificationSection>
                <NotificationSection info={
                  `
                Custom Color
                `
                } onClick={() => {
                  addNotification(
                    {
                      text: "Text",
                      status: "success",
                      color: "orange"
                    }
                  );
                }}>
                  {customColorMarkdown}
                </NotificationSection>
              </div>
              <div className="demo-info">
                These are just a few examples of the customization options available. For more advanced customization options and usage instructions, visit our <a className='demo-info-github-link' target='_blank' rel="noreferrer" href="https://github.com/ritoncharlox/React-Notification">
                GitHub repository
                </a>.
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default NotificationPage