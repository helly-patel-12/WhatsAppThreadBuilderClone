// src/hooks/useMessages.js
import { useState } from 'react';

export function useMessages() {
  const [messages, setMessages] = useState([]);
  const [activeMessage, setActiveMessage] = useState(null);
  const [replyingTo, setReplyingTo] = useState(null);

  const handleMessageClick = (index) => {
    if (activeMessage === index) {
      setActiveMessage(null);
    } else {
      const updated = [...messages];
      updated[index].isRead = !updated[index].isRead;
      setMessages(updated);
      setActiveMessage(index);
      setReplyingTo(messages[index]);
      document.getElementById('textbox')?.focus();
    }
  };

  /**
   * Add a new message or update an existing one (when activeMessage !== null).
   * @param {{ text?: string, flow?: object, type?: string, time: string, sender: string }} params
   */
  const saveMessage = ({ text, flow, type = 'text', time, sender }) => {
    if (type === 'text' && !text?.trim()) {
      alert('Please enter a message to save.');
      document.getElementById('textbox')?.focus();
      const tb = document.getElementById('textbox');
      if (tb) { tb.style.border = '3px solid black'; tb.style.width = '100%'; }
      return false;
    }

    if (activeMessage !== null) {
      const updated = [...messages];
      updated[activeMessage] = { ...updated[activeMessage], text, flow, time, type };
      setMessages(updated);
      setActiveMessage(null);
    } else {
      setMessages(prev => [...prev, { text, flow, type, time, sender, isRead: false }]);
    }
    document.getElementById('textbox') && (document.getElementById('textbox').style.border = 'none');
    return true;
  };

  /**
   * Specifically for adding flow messages from the Flow tab.
   */
  const addFlowMessage = (flowData, time) => {
    setMessages(prev => [...prev, { 
      type: 'flow', 
      flow: flowData, 
      time, 
      sender: 'company', 
      isRead: false 
    }]);
  };


  /**
   * Reply to the currently active message.
   * @param {{ text: string, time: string }} params
   */
  const replyMessage = ({ text, time }) => {
    if (!text.trim()) { alert('Please enter a reply message.'); return false; }
    if (replyingTo === null) { alert('Please select a message to reply.'); return false; }

    const newMsg = {
      sender: replyingTo.sender === 'company' ? 'user' : 'company',
      text,
      time,
      replyTo: replyingTo,
      isRead: false,
    };
    setMessages(prev => [...prev, newMsg]);
    setReplyingTo(null);
    setActiveMessage(null);
    return true;
  };

  const deleteMessage = () => {
    if (activeMessage === null) return;
    if (window.confirm('Are you sure you want to delete this message?')) {
      setMessages(prev => prev.filter((_, i) => i !== activeMessage));
      setActiveMessage(null);
    }
  };

  const moveMessage = (direction) => {
    if (activeMessage === null) { alert('Please select a message first!'); return; }
    const newMsgs = [...messages];
    let newActive = activeMessage;

    if (direction === 'up' && activeMessage > 0) {
      [newMsgs[activeMessage], newMsgs[activeMessage - 1]] = [newMsgs[activeMessage - 1], newMsgs[activeMessage]];
      newActive = activeMessage - 1;
    } else if (direction === 'down' && activeMessage < messages.length - 1) {
      [newMsgs[activeMessage], newMsgs[activeMessage + 1]] = [newMsgs[activeMessage + 1], newMsgs[activeMessage]];
      newActive = activeMessage + 1;
    }
    setMessages(newMsgs);
    setActiveMessage(newActive);
  };

  const clearMessages = () => {
    if (messages.length === 0) { alert('There are no messages to clear.'); return; }
    if (window.confirm('Are you sure you want to clear all messages?')) {
      setMessages([]);
      setActiveMessage(null);
    }
  };

  return {
    messages,
    activeMessage,
    replyingTo,
    setActiveMessage,
    setReplyingTo,
    handleMessageClick,
    saveMessage,
    addFlowMessage,
    replyMessage,

    deleteMessage,
    moveMessage,
    clearMessages,
  };
}