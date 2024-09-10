'use client'; // Ensure strict mode

import React from 'react';
export default function Home() {

  // Function to handle sending notifications
  const handleSendNotification = async () => {
    // Request permission for notifications
    let permission = await Notification.requestPermission();
    
    // Check if the browser supports notifications and permission is granted
    if (permission === 'granted') {
      // Notification options
      let notificationOptions = {
        body: 'Some Notification information',
        icon: '/notification-icon.png'
      };
      // Create a new notification
      let notif = new Notification('My New Notification', notificationOptions);

      // Event handler for notification click
      notif.onclick = () => {
        console.log('Notification clicked');
      };
    } else {
      alert('Notification Permission Denied! kindly Allow Permission to send Notification.');
      console.log('Notification permission not granted.');
    }
  };

  // Render the component
  return (
    <div className="text-4xl font-bold text-white">
      {/* Section for displaying images */}
      <div className="flex flex-row justify-between gap-6 m-3">
        <div>
          <img src="/basic.png" alt="Time and Location" />
        </div>
        <div>
          <img src="/indicators.png" alt="Network and Battery" />
        </div>
      </div>
      {/* Section for displaying text */}
      <div>
        <p className="font-inter font-semibold text-[29px] text-center text-white mt-6">Lorem Ipsum...</p>
        <p className="font-inter font-normal text-white text-[19px] text-opacity-40 text-center pt-4">Lorem ipsum dolor sit amet.</p>
      </div>

      {/* Section for displaying notification  */}
      <div className="m-2 mt-12">
        <div className="relative">
          <img src="/Illustration.png" alt="waves around bell" className="m-auto relative" />
          <img src="/ri_notification-2-line.png" alt="Notification" className="m-auto absolute inset-0" />
        </div>
      </div>

      {/* Section for sending notifications */}
      <div className="flex items-center justify-center mt-16 mb-6 ml-10 mr-10">
        <button onClick={handleSendNotification} className="relative w-[327px] h-[42px] rounded-md p-0 shadow-md overflow-hidden bg-gradient-to-r from-transparent via-red-600 to-transparent font-inter font-semibold text-[16px] text-center text-white small-screen  md:w-[280px] md:h-[38px] lg:w-[300px] lg:h-[38px]">
          <span className="absolute inset-0 z-[-1] bg-gradient-to-r from-transparent via-red-600 to-transparent  border-solid border-[1.4px] rounded-md"></span>
          <span className="text-sm">Send Notification</span>
        </button>
      </div>
    </div>
  );
}

