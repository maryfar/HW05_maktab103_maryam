function showNotification(message, position, cssClass = '') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.classList.add('notification', position, cssClass);
    document.body.appendChild(notification);
  
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
  
  // Example:
  const message = 'This is a notification message.';
  const position = 'top-right';
  const cssClass = 'custom-notification';
  
  showNotification(message, position, cssClass);