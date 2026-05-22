// src/hooks/usePhoneSettings.js
import { useState } from 'react';

export function usePhoneSettings() {
  const [time, setTime] = useState('12:00');
  const [period, setPeriod] = useState('PM');
  const [is12HourFormat, setIs12HourFormat] = useState(true);
  const [isIOS, setIsIOS] = useState(true);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isFrame, setIsFrame] = useState(false);
  const [povType, setPovType] = useState('customer');
  const [isRead, setIsRead] = useState(true);

  const handleTimeChange = (e) => {
    let newTime = e.target.value.replace(/[^\d:]/g, '');

    if (newTime.includes(':')) {
      const [hours, minutes] = newTime.split(':');
      let h = parseInt(hours);

      if (is12HourFormat) {
        if (h < 1) h = 1;
        if (h > 12) h = 12;
      } else {
        if (h < 0) h = 0;
        if (h > 23) h = 23;
      }

      if (minutes.length > 0) {
        let m = parseInt(minutes);
        if (m > 59) m = 59;
        newTime = `${h}:${m.toString().padStart(2, '0')}`;
      } else {
        newTime = `${h}:${minutes}`;
      }
    } else if (newTime.length > 2) {
      const hours = newTime.substring(0, 2);
      const minutes = newTime.substring(2);
      let h = parseInt(hours);
      if (is12HourFormat) { if (h < 1) h = 1; if (h > 12) h = 12; }
      else { if (h < 0) h = 0; if (h > 23) h = 23; }
      newTime = `${h}:${minutes}`;
    }

    setTime(newTime);
  };

  const togglePeriod = () => {
    if (is12HourFormat) setPeriod(p => (p === 'AM' ? 'PM' : 'AM'));
  };

  const toggleTimeFormat = () => {
    setIs12HourFormat(prev => !prev);
    const btn = document.getElementById('inputGroup-sizing-default');
    if (btn) btn.style.cursor = is12HourFormat ? 'not-allowed' : 'pointer';
  };

  /** Returns the formatted time string ready to stamp on a message */
  const getFormattedTime = () => {
    if (is12HourFormat) return `${time} ${period}`;
    const [hours, minutes] = time.split(':');
    let h = parseInt(hours);
    if (period === 'PM' && h < 12) h += 12;
    else if (period === 'AM' && h === 12) h = 0;
    return `${h}:${minutes}`;
  };

  const handlePlatformChange = (e) => {
    const isAndroidSelected = e.target.id === 'btnradio2';
    setIsIOS(!isAndroidSelected);
    setIsAndroid(isAndroidSelected);

    const header = document.getElementById('main-header');
    if (!header) return;
    if (isAndroidSelected) {
      header.style.background = 'white';
      header.style.color = 'black';
    } else {
      header.style.background = povType === 'business' ? '#3a5564' : '#008069';
      header.style.color = 'white';
    }
  };

  const handlePOVChange = (e) => {
    const isBusiness = e.target.id === 'POVradio1';
    setPovType(isBusiness ? 'business' : 'customer');
    const header = document.getElementById('main-header');
    if (header) {
      header.style.background = isBusiness ? '#3a5564' : '#008069';
      header.style.color = 'white';
    }
  };

  const handleFrameChange = (e) => setIsFrame(e.target.checked);
  const handleMsgReadToggle = () => setIsRead(prev => !prev);

  return {
    time, period, is12HourFormat,
    isIOS, isAndroid, isFrame, povType, isRead,
    handleTimeChange, togglePeriod, toggleTimeFormat, getFormattedTime,
    handlePlatformChange, handlePOVChange, handleFrameChange, handleMsgReadToggle,
  };
}