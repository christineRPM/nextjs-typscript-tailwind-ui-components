import React, { useEffect, useState } from 'react';

interface MessageProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  backgroundColor?: string;
  textColor?: string;
  duration?: number;
}

const Message: React.FC<MessageProps> = ({
  message,
  setMessage,
  backgroundColor = 'bg-gray/10',
  textColor = 'text-red',
  duration = 3000
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setMessage('');
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, setMessage, duration]);

  if (!visible || !message) return null;

  return (
    <div className={`${textColor} text-sm py-2 px-4 rounded w-auto ${backgroundColor} mt-1`}>
      {message}
    </div>
  );
};

export default Message;