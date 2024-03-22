addNotification(
    {
        title: "Title",
        description: "Description",
        text: "Text",
        status: "success" || "failed" || "warning",
        background: "purple" || "#800080", // Can use any color name or hex code
        color: "white" || "#FFFFFF", // Can use any color name or hex code
        icon: "✅" || <FaCheckCircle />,
        duration : '5s',
        iconColor: "white" || "#FFFFFF", // Can use any color name or hex code
        titleColor: "white" || "#FFFFFF", // Can use any color name or hex code
        textColor: "white" || "#FFFFFF", // Can use any color name or hex code
        descriptionColor: "white" || "#FFFFFF", // Can use any color name or hex code
        fixed: true, // If true, the notification remains fixed and does not automatically clear
        progressColor: "gray" || "#808080", // Can use any color name or hex code
    }
);