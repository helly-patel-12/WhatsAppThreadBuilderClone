import { useEffect, useState } from 'react';
import html2canvas from "html2canvas";
import './App.css';
import './components/css/Phone.css';
import './components/css/Screen.css';
import './components/css/Main.css';
import './components/css/Text.css';
import logo from './components/Images/icon.jpg';
import bg from './components/Images/chat-bg.png';
import frame from './components/Images/frame.png';
import { message, Steps } from 'antd';
// import { message } from 'antd';
import { BtnBold, BtnItalic, Editor, EditorProvider, Toolbar } from 'react-simple-wysiwyg';

function App() {
  const [text, setText] = useState('');
  const [showEmoji, setShowEmoji] = useState(null);
  const [time, setTime] = useState('12:00');
  const [period, setPeriod] = useState('PM');
  const [messages, setMessages] = useState([]);
  const [currentSender, setCurrentSender] = useState('company');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [activeMessage, setActiveMessage] = useState(null);
  const [replyingTo, setReplyingTo] = useState(null);
  const [isFrame, setIsFrame] = useState(false);
  const [isIOS, setIsIOS] = useState(true);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isBusiness, setIsBusiness] = useState(false);
  const [isRead, setIsRead] = useState(true);
  const [povType, setPovType] = useState('customer');
  const [isAttach, setIsAttach] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isVerified, setIsVerified] = useState(null);
  const [icon, setIcon] = useState(null);
  const [is12HourFormat, setIs12HourFormat] = useState(true);
  const [isWpFlow, setIsWpFlow] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isActive, setIsActive] = useState(false);  // Track active state of the button
  const [scrollPosition, setScrollPosition] = useState(0);  // Track the scroll position
  // const [showFlow, setShowFlow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [flowName, setFlowName] = useState("");
  const [flowDescription, setFlowDescription] = useState("");
  const [flowMessages, setFlowMessages] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Control dropdown state
  const [shopMessage, setShopMessage] = useState(false);
  const [shopElectronics, setShopElectronics] = useState(false);
  const [selectedShopCategory, setSelectedShopCategory] = useState("default");
  const [isRegister, setIsRegister] = useState(false);
  const [shopPhones, setShopPhones] = useState(false);
  const [shopModels, setShopModels] = useState(false);
  const [selectedGadget, setSelectedGadget] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [replyMessage, setReplyMessage] = useState(null);

  const categories = ["Personalized Offer", "Register for an event", "Get feedback", "Complete Sign up", "Book an appointment", "Get a quote"];
  const ShopCategories = ["Electronics", "Books", "Fashion", "Home & Kitchen", "Sports & Fitness", "Toys & Games", "Kindle eBooks", "Grocery and more", "Beauty and Health Care", "Pets Care", "Car and Motorbike", "Others"];
  const ElectronicsGadgets = ["Phone", "Laptop", "SmartWatch", "Tablets", "Speakers", "Cameras", "Headphones", "Computer", "Printers", "Smart Home", "Power Banks", "Others"];
  const PhoneBrands = ["Apple", "Samsung", "OnePlus", "Google", "Redmi", "Oppo", "Vivo", "Realme", "Nokia", "Motorola", "iQOO", "Others"];
  const PhoneModels = {
    Apple: ["iPhone 16 Plus", "iPhone 15 Pro", "iPhone 14 Max", "iPhone 13 Pro Max", "iPhone 12 Mini", "iPhone 16 e", "iPhone 15 Plus", "iPhone 14 Pro Max", "iPhone 13 Pro ", "iPhone 12", "iPhone 11 Pro Max", "iPhone X"],
    Samsung: ["Galaxy S23", "Galaxy S22", "Galaxy S24", "Galaxy Z Fold6", "Galaxy Z Flip6", "Galaxy A54", "Galaxy M55", "Galaxy Note 22", "Galaxy S21", "Galaxy S20", "Galaxy S10", "Galaxy A32"],
    OnePlus: ["OnePlus 11", "OnePlus 10 Pro", "OnePlus Nord CE4", "OnePlus 12R", "OnePlus 13R", "OnePlus 14R", "OnePlus CE4 Lite", "OnePlus 9", "OnePlus 8", "OnePlus 7", "OnePlus 6", "OnePlus 5"],
    Google: ["Pixel 8", "Pixel 7", "Pixel 6", "Pixel 5", "Pixel 4", "Pixel 3", "Pixel 2", "Pixel 1", "Pixel 9 Pro ", "Pixel 9 Pro XL", "Pixel 8 Pro", "Pixel 7a"],
    Redmi: ["Redmi Note 12", "Redmi 11", "Redmi 10", "Redmi 9", "Redmi 8", "Redmi 14 Pro", "Redmi 13C", "Redmi 12", "Redmi 11A", "Redmi 10A", "Redmi 9A", "Redmi 8A"],
    Oppo: ["Oppo Reno 7", "Oppo F21", "Oppo A95", "Oppo A74", "Oppo A53", "Oppo A32", "Oppo A21", "Oppo A11", "Oppo A10", "Oppo A9", "Oppo A8", "Oppo A7"],
    Vivo: ["Vivo X80", "Vivo Y75", "Vivo V21", "Vivo V23", "Vivo Y200", "Vivo Y29", "Vivo Y33", "Vivo Y37", "Vivo Y41", "Vivo Y45", "Vivo Y49", "Vivo Y53"],
    Realme: ["Realme 9 Pro", "Realme 8 Pro", "Realme 7 Pro", "Realme 6 Pro", "Realme 5 Pro", "Realme 4 Pro", "Realme 3 Pro", "Realme 2 Pro", "Realme 1 Pro", "Realme 9", "Realme 8", "Realme 7"],
    Nokia: ["Nokia 9", "Nokia 8", "Nokia 7", "Nokia 6", "Nokia 5", "Nokia 4", "Nokia 3", "Nokia 2", "Nokia 1", "Nokia 10", "Nokia 11", "Nokia 12"],
    Motorola: ["Moto G9", "Moto G8", "Moto G7", "Moto G6", "Moto G5", "Moto G4", "Moto G3", "Moto G2", "Moto G1", "Moto G10", "Moto G11", "Moto G12"],
    iQOO: ["iQOO 9", "iQOO 8", "iQOO 7", "iQOO 6", "iQOO 5", "iQOO 4", "iQOO 3", "iQOO 2", "iQOO 1", "iQOO 10", "iQOO 11", "iQOO 12"],
    Others: ["Xiaomi", "Huawei", "Sony", "LG", "Asus", "Lenovo", "HTC", "ZTE", "Alcatel", "TCL", "BlackBerry", "Nubia"]
  };
  


  // const [value, setValue] = useState('simple text');

  // const handleTimeChange = (event) => {
  //   let newTime = event.target.value;
  //   newTime = newTime.replace(/[^\d:]/g, '');

  //   if (newTime.includes(':')) {
  //     const [hours, minutes] = newTime.split(':');

  //     if (hours.length > 0) {
  //       let hoursNum = parseInt(hours);
  //       if (hoursNum < 1) hoursNum = 1;
  //       if (hoursNum > 12) hoursNum = 12;

  //       if (minutes.length > 0) {
  //         let minutesNum = parseInt(minutes);
  //         if (minutesNum > 59) minutesNum = 59;

  //         newTime = `${hoursNum}:${minutesNum.toString().padStart(2, '0')}`;
  //       } else {
  //         newTime = `${hoursNum}:${minutes}`;
  //       }
  //     }
  //   } else if (newTime.length > 2) {
  //     const hours = newTime.substring(0, 2);
  //     const minutes = newTime.substring(2);
  //     let hoursNum = parseInt(hours);
  //     if (hoursNum < 1) hoursNum = 1;
  //     if (hoursNum > 12) hoursNum = 12;
  //     newTime = `${hoursNum}:${minutes}`;
  //   }
  //   setTime(newTime);
  // };
  const handleTimeChange = (e) => {
    let newTime = e.target.value;
    newTime = newTime.replace(/[^\d:]/g, ''); // Only allow numbers and colons

    if (newTime.includes(':')) {
      const [hours, minutes] = newTime.split(':');
      let hoursNum = parseInt(hours);

      // If in 12-hour mode, adjust the hour range
      if (is12HourFormat) {
        if (hoursNum < 1) hoursNum = 1;
        if (hoursNum > 12) hoursNum = 12;
      } else {
        // For 24-hour mode
        if (hoursNum < 0) hoursNum = 0;
        if (hoursNum > 23) hoursNum = 23;
      }

      if (minutes.length > 0) {
        let minutesNum = parseInt(minutes);
        if (minutesNum > 59) minutesNum = 59;

        newTime = `${hoursNum}:${minutesNum.toString().padStart(2, '0')}`;
      } else {
        newTime = `${hoursNum}:${minutes}`;
      }
    } else if (newTime.length > 2) {
      const hours = newTime.substring(0, 2);
      const minutes = newTime.substring(2);
      let hoursNum = parseInt(hours);

      if (is12HourFormat) {
        if (hoursNum < 1) hoursNum = 1;
        if (hoursNum > 12) hoursNum = 12;
      } else {
        if (hoursNum < 0) hoursNum = 0;
        if (hoursNum > 23) hoursNum = 23;
      }

      newTime = `${hoursNum}:${minutes}`;
    }

    setTime(newTime); // Update time input
  };

  // const togglePeriod = () => {
  //   setPeriod(period === 'AM' ? 'PM' : 'AM');
  // };
  const togglePeriod = () => {
    if (is12HourFormat) {
      setPeriod(period === 'AM' ? 'PM' : 'AM');
    }
  };

  const handleTextAreaChange = (event) => {
    setText(event.target.value)
  };

  const onBold = () => {
    let target = document.getElementById("textbox");
    let selection = window.getSelection();
    let selectedText = selection.toString();

    if (selectedText) {
      let range = selection.getRangeAt(0);
      let span = document.createElement('b');

      span.textContent = selectedText;
      range.deleteContents();
      range.insertNode(span);

      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      setIsBold(!isBold);
      if (isBold) {
        target.style.fontWeight = "normal";
        setText(prevText => prevText.replace(/<b>/g, "").replace(/<\/b>/g, ""));
      } else {
        target.style.fontWeight = "bolder";
        setText(prevText => `<b><br/>${prevText}</b>`);
      }
    }
  };

  // const Bold = () => {
  //   setIsBold(!isBold);

  //   let target = document.getElementById("textbox");
  //   if (isBold) {
  //     target.style.fontWeight = "normal";
  //     setText(prevText => prevText.replace(/<b>/g, "").replace(/<\/b>/g, ""));
  //   } else {
  //     target.style.fontWeight = "bolder";
  //     setText(prevText => `<b>${prevText}</b>`);
  //   }
  // };

  const onItalics = () => {
    let target = document.getElementById("textbox");
    let selection = window.getSelection();
    let selectedText = selection.toString();

    if (selectedText) {
      let range = selection.getRangeAt(0);
      let span = document.createElement('i');

      span.textContent = selectedText;
      range.deleteContents();
      range.insertNode(span);

      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      setIsItalic(!isItalic);
      if (isItalic) {
        target.style.fontStyle = "normal";
        setText(prevText => prevText.replace(/<i>/g, "").replace(/<\/i>/g, ""));
      } else {
        target.style.fontStyle = "italics";
        setText(prevText => `&nbsp;<i>${prevText}</i>&nbsp;`);
      }
    }
  };

  // const Italics = () => {
  //   setIsItalic(!isItalic);
  //   let target = document.getElementById("textbox");
  //   if (isItalic) {
  //     target.style.fontStyle = "normal";
  //     setText(prevText => prevText.replace(/<i>/g, "").replace(/<\/i>/g, ""));
  //   } else {
  //     target.style.fontStyle = "italic";
  //     setText(prevText => `<i>${prevText}</i>`);
  //   }
  // };

  const onAttach = () => {
    if (isAttach) {
      setIsAttach(true);
      let target = document.getElementById("textbox");
      if (!isAttach) {
        target.style.color = "#027eb5";
      }
    }
    else {
      setIsAttach(false);

    }
  };

  const toggleEmojiPicker = () => {
    setShowEmoji(!showEmoji);
  };

  const addEmoji = (emoji) => {
    // const textbox = document.getElementById("textbox");
    // const cursorPosition = document.getElementById("textbox").selectionStart;
    // const newText = text.slice(0, cursorPosition) + emoji + text.slice(cursorPosition);
    // setText(newText);
    // const newCursorPosition = cursorPosition + emoji.length;
    // setTimeout(() => {
    //   textarea.selectionStart = newCursorPosition;
    //   textarea.selectionEnd = newCursorPosition; 
    // }, 0);
    // const addEmoji = (emoji) => {
    // const textarea = textareaRef.current;
    // const cursorPosition = textarea.selectionStart; // Get the current cursor position
    // const textBeforeCursor = text.substring(0, cursorPosition); // Text before the cursor
    // const textAfterCursor = text.substring(cursorPosition); // Text after the cursor

    // Insert the emoji at the cursor position
    const newText = text + emoji;
    setText(newText);
    setShowEmoji(false);
  };

  // const handleSaveMessage = () => {
  //   if (text.trim() !== '') {
  //     if (activeMessage !== null) {
  //       const updatedMessages = [...messages];
  //       updatedMessages[activeMessage].text = text;
  //       setMessages(updatedMessages);
  //       setActiveMessage(null);
  //     }
  //     else {
  //       const newMessage = { text, time: `${time} ${period}`, sender: currentSender };
  //       setMessages(prevMessages => [...prevMessages, newMessage]);
  //     }
  //     setText('');
  //     setIsBold(false);
  //     setIsItalic(false);
  //     setActiveMessage(null);
  //     let target = document.getElementById("textbox");
  //     target.style.fontStyle = "normal";
  //     target.style.fontWeight = "normal";
  //   }
  //   else {
  //     alert("Please enter a message to save.");
  //   }
  // };
  const handleSaveMessage = () => {
    if (text.trim() !== '') {
      let formattedTime = time; // Default time
      if (is12HourFormat) {
        formattedTime = `${time} ${period}`;
      } else {
        // Convert time to 24-hour format if needed
        const [hours, minutes] = time.split(':');
        let hoursNum = parseInt(hours);
        if (period === 'PM' && hoursNum < 12) {
          hoursNum += 12; // Add 12 hours for PM
        } else if (period === 'AM' && hoursNum === 12) {
          hoursNum = 0; // Handle 12 AM as 00 hours in 24-hour format
        }
        formattedTime = `${hoursNum}:${minutes}`;
      }

      if (activeMessage !== null) {
        const updatedMessages = [...messages];
        updatedMessages[activeMessage].text = text;
        updatedMessages[activeMessage].time = formattedTime;
        setMessages(updatedMessages);
        setActiveMessage(null);
      } else {
        const newMessage = { text, time: formattedTime, sender: currentSender };
        setMessages(prevMessages => [...prevMessages, newMessage]);
      }

      setText('');
      setIsBold(false);
      setIsItalic(false);
      setActiveMessage(null);
      document.getElementById("textbox").style.border = "none";
    } else {
      alert("Please enter a message to save.");
      document.getElementById("textbox").focus();
      document.getElementById("textbox").style.border = "3px solid black";
      document.getElementById("textbox").style.width = "100%";
    }
  };

  const downloadPNG = () => {
    const element = document.getElementById("main-container");

    html2canvas(element).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;  // Set the link href to the PNG data URL
      link.download = "Screenshot.png";
      link.click();
    });
  };

  const ClearText = () => {
    if (messages.length > 0) {
      window.confirm('Are you sure you want to clear all messages?');
      setMessages([]);
      setActiveMessage(null);
    }
    else {
      alert('There are no messages to clear.');
    }
    // setMessages([]);
  };

  const Introduction = () => {
    setShowIntro((prev) => !prev);
  }

  const handleMessageClick = (index) => {
    if (activeMessage === index) {
      setActiveMessage(null);
    }
    else {
      const newMessages = [...messages];
      newMessages[index].isRead = !newMessages[index].isRead;
      setMessages(newMessages);
      setActiveMessage(index);
      setReplyingTo(messages[index]);
      document.getElementById("textbox").focus();
    }
  };

  const handleReply = () => {
    if (text.trim() === "") {
      alert("Please enter a reply message.");
      return;
    }

    if (replyingTo == null) {
      alert("Please select a message to reply.")
    }

    if (activeMessage !== null && replyingTo !== null) {
      const newMessage = {
        sender: replyingTo.sender === 'company' ? 'user' : 'company',
        text: text,
        time: `${time} ${period}`,
        replyTo: replyingTo,
      };
      setMessages([...messages, newMessage]);
      setText('');
    }
    setReplyingTo(null);
    setActiveMessage(null);
    setIsBold(false);
    setIsItalic(false);
    let target = document.getElementById("textbox");
    target.style.fontStyle = "normal";
    target.style.fontWeight = "normal";
  };

  const handleDelete = () => {
    if (activeMessage !== null) {
      if (window.confirm('Are you sure you want to delete this message?')) {
        const updatedMessages = messages.filter((_, index) => index !== activeMessage);
        setMessages(updatedMessages);
      }
      setActiveMessage(null);
    }
  };

  const handleArrow = (direction) => {
    if (activeMessage === null) {
      alert('Please select a message first!');
      return;
    }
    else if (activeMessage.index < 0) {
      alert('There are no other messages to move upwards.');
    }
    else if (activeMessage.index === messages.length - 1) {
      alert('There are no other messages to move downwards.');
    }
    else {
      let newMessages = [...messages];
      let newActiveMessage = activeMessage;

      if (direction === 'up' && activeMessage > 0) {
        const temp = newMessages[activeMessage];
        newMessages[activeMessage] = newMessages[activeMessage - 1];
        newMessages[activeMessage - 1] = temp;
        newActiveMessage = activeMessage - 1;
      } else if (direction === 'down' && activeMessage < messages.length - 1) {
        const temp = newMessages[activeMessage];
        newMessages[activeMessage] = newMessages[activeMessage + 1];
        newMessages[activeMessage + 1] = temp;
        newActiveMessage = activeMessage + 1;
      }
      setMessages(newMessages);
      setActiveMessage(newActiveMessage);
    }
  };

  const handleFrameToggleChange = (event) => {
    setIsFrame(event.target.checked);
  };

  const handleCurrentBuilder = (event) => {
    if (event.target.id === 'btnradio2') {
      setIsIOS(false);
      setIsAndroid(true);
      document.getElementById("main-header").style.background = 'white';
      document.getElementById("main-header").style.color = 'black';
    }
    else {
      if (povType === 'business') {
        setIsIOS(true);
        setIsAndroid(false);
        document.getElementById("main-header").style.background = '#3a5564';
        document.getElementById("main-header").style.color = 'white';
      } else {
        setIsIOS(true);
        setIsAndroid(false);
        document.getElementById("main-header").style.background = '#008069';
        document.getElementById("main-header").style.color = 'white';
      }
    }
  };

  // const handlePOVtype = (event) => {
  //   if (event.target.id === 'POVradio2') {
  //     setIsBusiness(false);
  //     document.getElementById("main-header").style.background = '#008069';
  //     document.getElementById("main-header").style.color = 'white';
  //     document.getElementById("message-company").classList.add = 'tick';
  //     document.getElementById("message-user").id = 'message-company';
  //     document.getElementById("message-company").classList.remove = 'tick';
  //   }
  //   else {
  //     setIsBusiness(true);
  //     document.getElementById("main-header").style.background = '#3a5564';
  //     document.getElementById("main-header").style.color = 'white';
  //     document.getElementById("message-company").classList = 'message message-company';
  //     document.getElementById("message-user").classList = 'message message-user';
  //     document.getElementById("message-company").id = 'message-user';
  //     document.getElementById("message-user").id = 'message-company';
  //     document.getElementById("message-company").classList.remove = 'tick';

  //   }
  // };
  const handlePOVtype = (event) => {
    if (event.target.id === 'POVradio2') {
      setPovType('customer');
      document.getElementById("main-header").style.background = '#008069';
      document.getElementById("main-header").style.color = 'white';
    } else {
      setPovType('business');
      document.getElementById("main-header").style.background = '#3a5564';
      document.getElementById("main-header").style.color = 'white';
      // document.getElementById("msg-tick").remove();
    }
  };

  const handleProfile = () => {
    setIsProfile(true);
    // document.getElementsByClassName('phone-href').classList.remove('active');
    // document.getElementsByClassName('profile-href').classList.add('active');
    document.getElementById('phone-container').style.display = 'none';
    document.getElementById('profile-container').style.display = 'block';
  };

  const handlePhone = () => {
    setIsProfile(false);
    // document.getElementsByClassName('phone-href').classList.add('active');
    // document.getElementsByClassName('profile-href').classList.remove('active');
    document.getElementById('phone-container').style.display = 'block';
    document.getElementById('profile-container').style.display = 'none';
  };

  const handleCompanyNameChange = (event) => {
    document.getElementById("comp-name").textContent = event.target.value || "Company Name";
  };

  const handleCustomerNameChange = (event) => {
    document.getElementById("cust-name").textContent = event.target.value || "Customer Name";
  };

  const handleVerifyAcc = () => {
    if (!isVerified) {
      document.getElementById("profile-verify").style.color = '#25d366';
    }
    else {
      document.getElementById("profile-verify").style.color = '#d4d4d8';
    }
    setIsVerified((prev) => !prev);
  };

  const handleMsgRead = () => {
    setIsRead((prev) => !prev);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setIcon(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setIcon(false);
  };

  const toggleTimeFormat = () => {
    setIs12HourFormat(!is12HourFormat);
    if (is12HourFormat) {
      document.getElementById("inputGroup-sizing-default").style.disabled = 'true';
      document.getElementById("inputGroup-sizing-default").style.cursor = 'not-allowed';
    } else {
      document.getElementById("inputGroup-sizing-default").style.disabled = 'false';
      document.getElementById("inputGroup-sizing-default").style.cursor = 'pointer';
    }
  };

  const handleWpFlow = () => {
    setIsWpFlow(true);

  }

  const handleWpText = () => {
    setIsWpFlow(false);

  }

  // const toggleFlow = () => {
  //   setShowFlow(!showFlow);
  // };

  const handleWpImg = () => {
    alert('WhatsApp Image is not available in this demo.');
  }

  const handleWpVdo = () => {
    alert('WhatsApp Video/GIF/File is not available in this demo.');
  }

  const handleWpAud = () => {
    alert('WhatsApp Audio is not available in this demo.');
  }

  const handleWpBtn = () => {
    alert('WhatsApp Button is not available in this demo.');
  }

  const handleWpPro = () => {
    alert('WhatsApp Product is not available in this demo.');
  }

  const checkOverflow = () => {
    const container = document.querySelector('.text-nav');
    if (container.scrollWidth > container.clientWidth) {
      setIsOverflowing(true);
    } else {
      setIsOverflowing(false);
    }
  };

  // Scroll right
  const scrollRight = () => {
    const container = document.querySelector('.text-nav');
    container.scrollBy({ left: 100, behavior: 'smooth' });
    setScrollPosition(container.scrollLeft + 100);
    setIsActive(true);  // Set the button to active when clicked
  };

  // Scroll left
  const scrollLeft = () => {
    const container = document.querySelector('.text-nav');
    container.scrollBy({ left: -100, behavior: 'smooth' });
    setScrollPosition(container.scrollLeft - 100);
    setIsActive(true);  // Set the button to active when clicked
  };

  // Effect to handle overflow and resizing
  useEffect(() => {
    checkOverflow();

    const handleResize = () => {
      checkOverflow();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCategoryClick = (category) => {
    if (category === "Personalized Offer") {
      setSelectedCategory(category);
      setDropdownOpen(false);
      setShowModal(true);
    } else {
      setSelectedCategory(category);
      setDropdownOpen(false);
      alert('This category is not available in this demo.');
    }

  }

  const handleSubmit = () => {
    // if (!flowName || !flowDescription) {
    //   alert("Please fill in all fields.");
    //   return;
    // }

    const newMessage = {
      category: selectedCategory,
      message: 'Black Friday DEALS!',
      description: 'Black Friday is around the corner and as promised we are giving you early access to our deals. Select the best deal for the products you are interested in!',
      link: "https://www.amazon.in/",
    };

    setFlowMessages([...flowMessages, newMessage]);
    setShowModal(false);
    setFlowName("");
    setFlowDescription("");
  };

  const handleTryBtn = () => {
    setIsRegister(true);
    setShowIntro(false);
  }

  const handleCategoryChange = (event) => {
    setSelectedShopCategory(event.target.value);
  };

  const handleGadgetChange = (event) => {
    setSelectedGadget(event.target.value);
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handleContinue = () => {
    if (selectedShopCategory === "Electronics") {
      setIsRegister(false);
      setShopElectronics(true);
    } else if (selectedShopCategory) {
      alert('This category is not available in this demo.');
    }
    else {
      alert("Please select a category to continue.");
    }
  };

  const handleBack = () => {
    if (window.confirm('You are about to go back to the main screen. Are you sure you want to continue?')) {
      setIsRegister(false);
      setShowIntro(true);
    }
  };

  const handleElectronicsContinue = () => {
    if (selectedGadget === "Phone") {
      setShopElectronics(false);
      setShopPhones(true);
    } else if (selectedGadget) {
      alert("This Gadget is currently not available.");
    }
    else {
      alert("This Gadget is currently not available.");
    }
  };

  const handleElectronicsBack = () => {
    setIsRegister(true);
    setShopElectronics(false);
  }

  const handlePhoneContinue = () => {
    if (selectedBrand) {
      setShopPhones(false);
      setShopModels(true);
    } else if (selectedBrand) {
      alert('This phone brand is not available in this demo.');
    } else {
      alert("Please select a phone brand.");
    }
  };

  const handlePhoneBack = () => {
    setShopPhones(false);
    setShopElectronics(true);

  };

  const handleModelContinue = () => {
    if (selectedModel) {
      setShopModels(false);
      setShopMobile(true);
    } else if (selectedBrand) {
      alert('This phone model is not available in this demo.');
    } else {
      alert("Please select a phone model.");
    }
  };

  const handleModelBack = () => {
    setShopPhones(true);
    setShopModels(false);
  };

  

  const handleClose = () => {
    setIsRegister(false);
    setShopElectronics(false);
    setShopPhones(false);
    setShopModels(false);
    setShowIntro(true);
  };

  // const handleShopMess = () => {
  //   setShopMessage(true);
  //   setShowIntro((prev) => !prev);
  // };

  // const handleCategoryChange = (event) => {
  //   setSelectedElecCategory(event.target.value);
  //   setIsElectronicsSelected(false);
  // };

  // const handleContinue = () => {
  //   if (selectedCategory === "electronics") {
  //     setIsElectronicsSelected(true);
  //   }
  // };

  // const handleElectronicMess = () => {
  //     setShopElectronics(true);
  // };

  // const handleElectronicsBtn = () => {
  //   alert('Electronics category is not available in this demo.');
  // };
  // if (!isOpen) return null;

  return (
    <>
      {/*   L   E   F   T                   C   O   N   T   A   I   N   E   R */}
      <div className='d-flex container'>
        <div className='left-container'>
          {/* <Phone /> */}
          <>
            <div className='phone-container' hidden={isProfile} id='phone-container'>

              <div className="d-flex top-container">
                <div className="nav nav-underline">
                  <a className='nav-link active-href' aria-current="page" >Phone Settings</a>
                </div>
                <div className="nav nav-underline" onClick={handleProfile}>
                  <a className='nav-link deactive-href' role='button'> Profile Settings</a>
                </div>
              </div>

              <div className='time-container gap-2 d-flex'>
                <div className="justify-space-between d-flex align-items-center">
                  <div className='text-time-container d-flex'>
                    <div className="time-group d-flex mt-3 mb-3">
                      <input type="text" className="msg-time" aria-label="Time input" aria-describedby="inputGroup-sizing-default" value={time} onChange={handleTimeChange} />
                      <button className="msg-period" id="inputGroup-sizing-default" onClick={togglePeriod}>{period}</button>
                    </div>
                  </div>
                  <div className="form-check form-switch mt-2">
                    <input className="form-check-input" type="checkbox" role="switch" id="timeflexSwitchCheckChecked" checked={is12HourFormat} onChange={toggleTimeFormat} />
                    <label className="form-check-label" htmlFor="timeflexSwitchCheckChecked"> {is12HourFormat ? '12h' : '24h'} </label>
                  </div>
                </div>
                <div className="tip">
                  <span className="tiptext">Set the time on the phone and choose its format</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M5.85638 6.5C6.31398 5.52901 7.54869 4.83333 9.00004 4.83333C10.841 4.83333 12.3334 5.95262 12.3334 7.33333C12.3334 8.49953 11.2687 9.47923 9.82856 9.7555C9.37657 9.84221 9.00004 10.2064 9.00004 10.6667M9 13.1667H9.00833M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#D4D4D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    </path>
                  </svg>
                </div>
              </div>

              <div className='pov-container d-flex'>
                <div className="form-check">
                  <input className="form-check-input" type="radio" id="POVradio1" onChange={handlePOVtype} checked={povType === 'business'} />
                  <label className="form-check-label" htmlFor="POVradio1">
                    Business POV
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" id="POVradio2" onChange={handlePOVtype} checked={povType === 'customer'} />
                  <label className="form-check-label" htmlFor="POVradio2">
                    Customer POV
                  </label>
                </div><div className="tip">
                  <span className="tiptext">Switch between Client and Business point of view</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.85638 6.5C6.31398 5.52901 7.54869 4.83333 9.00004 4.83333C10.841 4.83333 12.3334 5.95262 12.3334 7.33333C12.3334 8.49953 11.2687 9.47923 9.82856 9.7555C9.37657 9.84221 9.00004 10.2064 9.00004 10.6667M9 13.1667H9.00833M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#D4D4D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
              </div>

              <div className="phone-type-container d-flex ">
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked onChange={handleCurrentBuilder} />
                  <label className="btn btn-outline-primary" htmlFor="btnradio1">
                    <svg className="" width="24" height="20" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.523 10.3414C16.9719 10.3414 16.5237 9.8928 16.5237 9.3417C16.5237 8.7906 16.972 8.3424 17.523 8.3424C18.0741 8.3424 18.5223 8.7907 18.5223 9.3417C18.5224 9.8928 18.0741 10.3414 17.523 10.3414ZM6.477 10.3414C5.9259 10.3414 5.4777 9.8928 5.4777 9.3417C5.4777 8.7906 5.9259 8.3424 6.477 8.3424C7.0281 8.3424 7.4763 8.7907 7.4763 9.3417C7.4763 9.8928 7.028 10.3414 6.477 10.3414ZM17.8815 4.3214L19.8788 0.8622C19.9338 0.766731 19.9486 0.653358 19.9201 0.546951C19.8916 0.440543 19.822 0.34979 19.7267 0.2946C19.6312 0.239632 19.5179 0.224776 19.4115 0.25329C19.305 0.281804 19.2143 0.35136 19.1591 0.4467L17.1368 3.9497C15.5902 3.2439 13.8533 2.8508 12 2.8508C10.1467 2.8508 8.4098 3.2439 6.8633 3.9497L4.841 0.4467C4.78579 0.351353 4.69502 0.281795 4.5886 0.253282C4.48217 0.224768 4.36878 0.239627 4.2733 0.2946C4.1779 0.349734 4.10829 0.440488 4.07977 0.546919C4.05125 0.65335 4.06615 0.76675 4.1212 0.8622L6.1185 4.3214C2.6889 6.1867 0.3432 9.6589 0 13.761H24C23.6565 9.6589 21.3108 6.1867 17.8815 4.3214Z" fill="currentColor"></path></svg>
                  </label>

                  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onChange={handleCurrentBuilder} />
                  <label className="btn btn-outline-primary" htmlFor="btnradio2">
                    <svg className="-mt-1" width="24" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.9 0C12.1 1.1 11.6 2.2 11 3C10.4 3.8 9.29998 4.5 8.19998 4.4C7.99998 3.3 8.49998 2.3 9.09998 1.5C9.79998 0.7 10.9 0.1 11.9 0ZM15.1 17.4C15.6 16.6 15.9 16.1 16.3 15.2C13.2 14 12.7 9.6 15.8 8C14.9 6.8 13.6 6.2 12.3 6.2C11.4 6.2 10.8 6.4 10.2 6.6C9.69998 6.8 9.29998 6.9 8.79998 6.9C8.19998 6.9 7.79998 6.7 7.19998 6.5C6.59998 6.3 5.99998 6.1 5.29998 6.1C3.89998 6.1 2.39998 6.9 1.49998 8.4C0.199983 10.4 0.399983 14.3 2.49998 17.5C3.39998 18.7 4.39998 20 5.69998 20C6.29998 20 6.59998 19.8 6.99998 19.7C7.49998 19.5 7.99998 19.3 8.79998 19.3C9.69998 19.3 10.1 19.5 10.6 19.7C11 19.9 11.3 20 11.9 20C13.3 20 14.3 18.5 15.1 17.4Z" fill="currentColor"></path></svg>
                  </label>
                </div>

                <div className="form-check form-switch" id='phone-frame'>
                  <input className="form-check-input" type="checkbox" role="switch" id="frameflexSwitchCheckChecked" onChange={handleFrameToggleChange} />
                  <label className="form-check-label" htmlFor="frameflexSwitchCheckChecked">
                    Phone frame
                  </label>
                </div>

                <div className="tip">
                  <span className="tiptext">Switch between iOS and Android builders</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.85638 6.5C6.31398 5.52901 7.54869 4.83333 9.00004 4.83333C10.841 4.83333 12.3334 5.95262 12.3334 7.33333C12.3334 8.49953 11.2687 9.47923 9.82856 9.7555C9.37657 9.84221 9.00004 10.2064 9.00004 10.6667M9 13.1667H9.00833M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#D4D4D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
              </div>

              <div className='user-message d-flex'>
                <div>
                  <div onClick={handleMsgRead} className='nav-link read-msg d-flex' id='read-msg' >
                    <svg width="20" id='tick' height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: isRead ? "#d4d4d8" : "#25d366" }}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M19.75 10C19.75 15.3848 15.3848 19.75 10 19.75C4.61522 19.75 0.25 15.3848 0.25 10C0.25 4.61522 4.61522 0.25 10 0.25C15.3848 0.25 19.75 4.61522 19.75 10ZM12.8343 6.57502C13.1104 6.86974 13.0953 7.33249 12.8006 7.60862L7.1813 12.8736C6.89989 13.1373 6.46207 13.1371 6.18088 12.8732L3.64955 10.4973C3.35509 10.2209 3.34043 9.75811 3.61682 9.46364C3.89321 9.16917 4.35598 9.15452 4.65045 9.4309L6.68177 11.3375L11.8007 6.54138C12.0954 6.26525 12.5581 6.28031 12.8343 6.57502ZM16.8794 7.70612C17.1741 7.42999 17.1892 6.96724 16.9131 6.67252C16.6369 6.37781 16.1742 6.36275 15.8795 6.63888L10.1362 12.02L10.0129 11.9043C9.71848 11.6279 9.25571 11.6426 8.97932 11.9371C8.70293 12.2315 8.71759 12.6943 9.01206 12.9707L9.63532 13.5557C9.91651 13.8196 10.3543 13.8198 10.6357 13.5561L16.8794 7.70612Z" fill="currentColor"></path>
                    </svg>
                    <p>Mark user messages as read</p>
                  </div>
                </div>
                <div className="tip">
                  <span className="tiptext">Toggle to display read receipts on the customer's textboxes.</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.85638 6.5C6.31398 5.52901 7.54869 4.83333 9.00004 4.83333C10.841 4.83333 12.3334 5.95262 12.3334 7.33333C12.3334 8.49953 11.2687 9.47923 9.82856 9.7555C9.37657 9.84221 9.00004 10.2064 9.00004 10.6667M9 13.1667H9.00833M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#D4D4D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
              </div>
            </div>

            <div className='profile-container' hidden={!isProfile} id='profile-container'>

              <div className="d-flex top-container" onClick={handlePhone}>
                <div className="nav nav-underline">
                  <a className='nav-link deactive-href' role='button'>Phone Settings</a>
                </div>
                <div className="nav nav-underline" >
                  <a className='nav-link active-href' aria-current="page"> Profile Settings</a>
                </div>
              </div>

              <div className="customer-header" id='customer-header'>
                <p className="text-sm font-bold tracking-wide"><b>Customer</b></p>
                <div className="outer-container">
                  <div className="pic-input">
                    <label tabIndex="0" className="pic">
                      <span className="sr-only" hidden>
                        Upload Logo
                      </span>
                      {/* SVG icon (only visible when no image is uploaded) */}
                      {/* {!icon && ( */}
                      <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.97 1H18.03C17.16 1 16.52 1.36 16.23 2C16.07 2.29 16 2.63 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C21.37 8 21.71 7.93 22 7.77C22.64 7.48 23 6.84 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.91 4.93C21.81 5.03 21.66 5.1 21.5 5.11H20.09V5.62L20.1 6.5C20.09 6.67 20.03 6.81 19.91 6.93C19.81 7.03 19.66 7.1 19.5 7.1C19.17 7.1 18.9 6.83 18.9 6.5V5.1L17.5 5.11C17.17 5.11 16.9 4.83 16.9 4.5C16.9 4.17 17.17 3.9 17.5 3.9L18.38 3.91H18.9V2.51C18.9 2.18 19.17 1.9 19.5 1.9C19.83 1.9 20.1 2.18 20.1 2.51L20.09 3.22V3.9H21.5C21.83 3.9 22.1 4.17 22.1 4.5C22.09 4.67 22.02 4.81 21.91 4.93Z" fill="#25D366" ></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M15 3.75H3.75C3.15326 3.75 2.58097 3.98705 2.15901 4.40901C1.73705 4.83097 1.5 5.40326 1.5 6V15.75V18C1.5 18.5967 1.73705 19.169 2.15901 19.591C2.58097 20.0129 3.15326 20.25 3.75 20.25H20.25C20.8467 20.25 21.419 20.0129 21.841 19.591C22.2629 19.169 22.5 18.5967 22.5 18V15.75V8.80701C22.1765 8.9403 21.8089 9 21.39 9H21V13.9393L19.3713 12.3107C19.0928 12.0321 18.762 11.8111 18.3981 11.6603C18.0341 11.5096 17.644 11.432 17.25 11.432C16.856 11.432 16.4659 11.5096 16.1019 11.6603C15.738 11.8111 15.4072 12.0321 15.1287 12.3107L14.25 13.1893L11.1213 10.0607C10.8428 9.78209 10.512 9.56111 10.1481 9.41035C9.78408 9.25958 9.39397 9.18198 9 9.18198C8.60603 9.18198 8.21592 9.25958 7.85194 9.41035C7.48796 9.56111 7.15725 9.78209 6.87867 10.0607L6.87867 10.0607L3 13.9393V6C3 5.80109 3.07902 5.61032 3.21967 5.46967C3.36032 5.32902 3.55109 5.25 3.75 5.25H15V3.75ZM3 18V16.0607L7.93933 11.1213L7.93933 11.1213C8.07862 10.982 8.24398 10.8715 8.42597 10.7962C8.60796 10.7208 8.80302 10.682 9 10.682C9.19698 10.682 9.39204 10.7208 9.57403 10.7962C9.75602 10.8715 9.92138 10.982 10.0607 11.1213L13.7197 14.7803L15.2197 16.2803C15.5126 16.5732 15.9874 16.5732 16.2803 16.2803C16.5732 15.9874 16.5732 15.5126 16.2803 15.2197L15.3107 14.25L16.1893 13.3713L15.6773 12.8593L16.1893 13.3713C16.3286 13.232 16.494 13.1215 16.676 13.0462C16.858 12.9708 17.053 12.932 17.25 12.932C17.447 12.932 17.642 12.9708 17.824 13.0462C18.006 13.1215 18.1714 13.232 18.3107 13.3713L21 16.0607V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18ZM14.25 7.125C13.9516 7.125 13.6655 7.24353 13.4545 7.4545C13.2435 7.66548 13.125 7.95163 13.125 8.25C13.125 8.54837 13.2435 8.83452 13.4545 9.0455C13.6655 9.25648 13.9516 9.375 14.25 9.375C14.5484 9.375 14.8345 9.25648 15.0455 9.0455C15.2565 8.83452 15.375 8.54837 15.375 8.25C15.375 7.95163 15.2565 7.66548 15.0455 7.4545C14.8345 7.24353 14.5484 7.125 14.25 7.125Z" fill="#25D366"></path>
                      </svg>
                      {/* )} */}
                      <div className="image-upload-container">
                        <input type="file" accept="image/*" className="" hidden />

                        <div className="image-container">
                          {/* Display the uploaded image and close button if an image is uploaded */}
                          {/* {icon && (
                            <>
                              <button type="button" className="btn-close" aria-label="Close" onClick={handleRemoveImage}></button>
                              <img src={icon} alt="Uploaded" className="uploaded-image" />
                            </>
                          )} */}
                        </div>
                      </div>
                    </label>
                    <input type="text" placeholder="Customer Name" onInput={handleCustomerNameChange} />
                  </div>
                  <div className="tip">
                    <span className="tiptext">Enter the name of the customer and choose a profile picture to display</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.85638 6.5C6.31398 5.52901 7.54869 4.83333 9.00004 4.83333C10.841 4.83333 12.3334 5.95262 12.3334 7.33333C12.3334 8.49953 11.2687 9.47923 9.82856 9.7555C9.37657 9.84221 9.00004 10.2064 9.00004 10.6667M9 13.1667H9.00833M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#D4D4D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </div>
                </div>
              </div>

              <div className="business-header" id='business-header'>
                <p className="text-sm font-bold tracking-wide"><b>Business</b></p>
                <div className="outer-container">
                  <div className="pic-input">
                    <label tabIndex="0" className="pic">
                      <span className="sr-only" hidden>
                        Upload Logo
                      </span>
                      {/* SVG icon (only visible when no image is uploaded) */}
                      {!icon && (
                        <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.97 1H18.03C17.16 1 16.52 1.36 16.23 2C16.07 2.29 16 2.63 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C21.37 8 21.71 7.93 22 7.77C22.64 7.48 23 6.84 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.91 4.93C21.81 5.03 21.66 5.1 21.5 5.11H20.09V5.62L20.1 6.5C20.09 6.67 20.03 6.81 19.91 6.93C19.81 7.03 19.66 7.1 19.5 7.1C19.17 7.1 18.9 6.83 18.9 6.5V5.1L17.5 5.11C17.17 5.11 16.9 4.83 16.9 4.5C16.9 4.17 17.17 3.9 17.5 3.9L18.38 3.91H18.9V2.51C18.9 2.18 19.17 1.9 19.5 1.9C19.83 1.9 20.1 2.18 20.1 2.51L20.09 3.22V3.9H21.5C21.83 3.9 22.1 4.17 22.1 4.5C22.09 4.67 22.02 4.81 21.91 4.93Z" fill="#25D366" ></path>
                          <path fillRule="evenodd" clipRule="evenodd" d="M15 3.75H3.75C3.15326 3.75 2.58097 3.98705 2.15901 4.40901C1.73705 4.83097 1.5 5.40326 1.5 6V15.75V18C1.5 18.5967 1.73705 19.169 2.15901 19.591C2.58097 20.0129 3.15326 20.25 3.75 20.25H20.25C20.8467 20.25 21.419 20.0129 21.841 19.591C22.2629 19.169 22.5 18.5967 22.5 18V15.75V8.80701C22.1765 8.9403 21.8089 9 21.39 9H21V13.9393L19.3713 12.3107C19.0928 12.0321 18.762 11.8111 18.3981 11.6603C18.0341 11.5096 17.644 11.432 17.25 11.432C16.856 11.432 16.4659 11.5096 16.1019 11.6603C15.738 11.8111 15.4072 12.0321 15.1287 12.3107L14.25 13.1893L11.1213 10.0607C10.8428 9.78209 10.512 9.56111 10.1481 9.41035C9.78408 9.25958 9.39397 9.18198 9 9.18198C8.60603 9.18198 8.21592 9.25958 7.85194 9.41035C7.48796 9.56111 7.15725 9.78209 6.87867 10.0607L6.87867 10.0607L3 13.9393V6C3 5.80109 3.07902 5.61032 3.21967 5.46967C3.36032 5.32902 3.55109 5.25 3.75 5.25H15V3.75ZM3 18V16.0607L7.93933 11.1213L7.93933 11.1213C8.07862 10.982 8.24398 10.8715 8.42597 10.7962C8.60796 10.7208 8.80302 10.682 9 10.682C9.19698 10.682 9.39204 10.7208 9.57403 10.7962C9.75602 10.8715 9.92138 10.982 10.0607 11.1213L13.7197 14.7803L15.2197 16.2803C15.5126 16.5732 15.9874 16.5732 16.2803 16.2803C16.5732 15.9874 16.5732 15.5126 16.2803 15.2197L15.3107 14.25L16.1893 13.3713L15.6773 12.8593L16.1893 13.3713C16.3286 13.232 16.494 13.1215 16.676 13.0462C16.858 12.9708 17.053 12.932 17.25 12.932C17.447 12.932 17.642 12.9708 17.824 13.0462C18.006 13.1215 18.1714 13.232 18.3107 13.3713L21 16.0607V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18ZM14.25 7.125C13.9516 7.125 13.6655 7.24353 13.4545 7.4545C13.2435 7.66548 13.125 7.95163 13.125 8.25C13.125 8.54837 13.2435 8.83452 13.4545 9.0455C13.6655 9.25648 13.9516 9.375 14.25 9.375C14.5484 9.375 14.8345 9.25648 15.0455 9.0455C15.2565 8.83452 15.375 8.54837 15.375 8.25C15.375 7.95163 15.2565 7.66548 15.0455 7.4545C14.8345 7.24353 14.5484 7.125 14.25 7.125Z" fill="#25D366"></path>
                        </svg>
                      )}
                      <div className="image-upload-container">
                        <input type="file" accept="image/*" className="" hidden onInput={handleImageUpload} />

                        <div className="image-container">
                          {/* Display the uploaded image and close button if an image is uploaded */}
                          {icon && (
                            <>
                              <button type="button" className="btn-close" aria-label="Close" onClick={handleRemoveImage}></button>
                              <img src={icon} alt="Uploaded" className="uploaded-image" />
                            </>
                          )}
                        </div>
                      </div>
                    </label>
                    <input type="text" placeholder="Company Name" onInput={handleCompanyNameChange} />
                  </div>
                  <div className="tip">
                    <span className="tiptext">Enter the name of the business and choose a profile picture to display</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.85638 6.5C6.31398 5.52901 7.54869 4.83333 9.00004 4.83333C10.841 4.83333 12.3334 5.95262 12.3334 7.33333C12.3334 8.49953 11.2687 9.47923 9.82856 9.7555C9.37657 9.84221 9.00004 10.2064 9.00004 10.6667M9 13.1667H9.00833M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#D4D4D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </div>
                </div>
              </div>


              <div className='user-message d-flex'>
                <div>
                  <div onClick={handleVerifyAcc} className='nav-link read-msg d-flex' id='read-msg' >
                    <svg id='profile-verify' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.7466 2.4425C11.4363 1.8525 12.5659 1.8525 13.2656 2.4425L14.8451 3.80261C15.145 4.06261 15.7047 4.27258 16.1046 4.27258H17.8039C18.8636 4.27258 19.7332 5.14251 19.7332 6.20251V7.90258C19.7332 8.29258 19.9431 8.86259 20.203 9.16259L21.5625 10.7425C22.1523 11.4325 22.1523 12.5626 21.5625 13.2626L20.203 14.8425C19.9431 15.1425 19.7332 15.7025 19.7332 16.1025V17.8026C19.7332 18.8626 18.8636 19.7325 17.8039 19.7325H16.1046C15.7147 19.7325 15.145 19.9425 14.8451 20.2025L13.2656 21.5625C12.5759 22.1525 11.4463 22.1525 10.7466 21.5625L9.16721 20.2025C8.86732 19.9425 8.30752 19.7325 7.90767 19.7325H6.17831C5.1187 19.7325 4.24904 18.8626 4.24904 17.8026V16.0925C4.24904 15.7025 4.03913 15.1425 3.78922 14.8425L2.43972 13.2526C1.85994 12.5626 1.85994 11.4426 2.43972 10.7526L3.78922 9.16259C4.03913 8.86259 4.24904 8.30259 4.24904 7.91259V6.20251C4.24904 5.14251 5.1187 4.27258 6.17831 4.27258H7.90767C8.29752 4.27258 8.86732 4.06261 9.16721 3.80261L10.7466 2.4425Z" fill="currentColor"></path>
                      <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill='currentColor'></path>
                    </svg>
                    <p>Display verified account icon</p>
                  </div>
                </div>
                <div className="tip">
                  <span className="tiptext">Toggle to demonstrate the verified account feature</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.85638 6.5C6.31398 5.52901 7.54869 4.83333 9.00004 4.83333C10.841 4.83333 12.3334 5.95262 12.3334 7.33333C12.3334 8.49953 11.2687 9.47923 9.82856 9.7555C9.37657 9.84221 9.00004 10.2064 9.00004 10.6667M9 13.1667H9.00833M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#D4D4D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
              </div>
            </div>
          </>

          {/* <Screen /> */}
          <>
            <div className='d-grid screen-container'>

              <h6 className='src-h6'><b>Screen Settings</b></h6>

              <div className='chat-dropdown'>
                <div className="dropdown d-flex">
                  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Chat
                  </button>
                  <ul className="dropdown-menu">
                    <li><button className="chat dropdown-item active" aria-current="true" type="button">Chat</button></li>
                    <li><button className="chat dropdown-item" type="button">Locked Screen</button></li>
                    <li><button className="chat dropdown-item" type="button">Multi Product Message</button></li>
                    <li><button className="chat dropdown-item" type="button">Product Detail Page</button></li>
                    <li><button className="chat dropdown-item" type="button">Product Cart</button></li>
                  </ul>
                </div>
                <div className="tip">
                  <span className="tiptext">Choose a screen type to start your editing <br />
                    NOTE: If you switch the screen type, all changes on the current display will be lost. <br />
                    If you want to configure another screen type, please add a new display through Action menu on the bottom</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.85638 6.5C6.31398 5.52901 7.54869 4.83333 9.00004 4.83333C10.841 4.83333 12.3334 5.95262 12.3334 7.33333C12.3334 8.49953 11.2687 9.47923 9.82856 9.7555C9.37657 9.84221 9.00004 10.2064 9.00004 10.6667M9 13.1667H9.00833M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#D4D4D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
              </div>

              <div className='intro-message'>
                <div className='d-flex introduction' id='intro-msg' onClick={Introduction}>
                  <svg className='m-2 ml-2.5 mr-2.5 text-primary' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM4.5 10.57H7.27C7.68 10.57 8.02 10.91 8.02 11.32C8.02 11.73 7.68 12.07 7.27 12.07H4.5C4.09 12.07 3.75 11.73 3.75 11.32C3.75 10.91 4.09 10.57 4.5 10.57ZM10.97 15.83H4.5C4.09 15.83 3.75 15.49 3.75 15.08C3.75 14.67 4.09 14.33 4.5 14.33H10.97C11.38 14.33 11.72 14.67 11.72 15.08C11.72 15.49 11.39 15.83 10.97 15.83ZM15.5 15.83H13.65C13.24 15.83 12.9 15.49 12.9 15.08C12.9 14.67 13.24 14.33 13.65 14.33H15.5C15.91 14.33 16.25 14.67 16.25 15.08C16.25 15.49 15.91 15.83 15.5 15.83ZM15.5 12.07H9.97C9.56 12.07 9.22 11.73 9.22 11.32C9.22 10.91 9.56 10.57 9.97 10.57H15.5C15.91 10.57 16.25 10.91 16.25 11.32C16.25 11.73 15.91 12.07 15.5 12.07Z" fill={showIntro ? "#25d366" : "#d4d4d8"}></path></svg>
                  <p className='src-p'>Display intro message</p>
                </div>
                <div className="tip">
                  <span className="tiptext">Toggle to display the system message.<br />
                    This should always be used for user-initiated chats.</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.85638 6.5C6.31398 5.52901 7.54869 4.83333 9.00004 4.83333C10.841 4.83333 12.3334 5.95262 12.3334 7.33333C12.3334 8.49953 11.2687 9.47923 9.82856 9.7555C9.37657 9.84221 9.00004 10.2064 9.00004 10.6667M9 13.1667H9.00833M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#D4D4D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
              </div>

              <div className='d-flex bottom-container'>
                <div className='buttons '>
                  <button className="btn btn-outline-danger" onClick={ClearText}>Clear Screen</button>
                </div>
                <div className="buttons">
                  <button className="btn btn-success download-toggle dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Download
                  </button>
                  <ul className="download-menu dropdown-menu">
                    <li>
                      <button className="download-item dropdown-item" type="button" onClick={downloadPNG}>
                        <svg className="m-2" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.25 12.75L6.409 7.591C6.61793 7.38206 6.86597 7.21633 7.13896 7.10325C7.41194 6.99018 7.70452 6.93198 8 6.93198C8.29548 6.93198 8.58806 6.99018 8.86104 7.10325C9.13403 7.21633 9.38207 7.38206 9.591 7.591L14.75 12.75M13.25 11.25L14.659 9.841C14.8679 9.63206 15.116 9.46633 15.389 9.35325C15.6619 9.24018 15.9545 9.18198 16.25 9.18198C16.5455 9.18198 16.8381 9.24018 17.111 9.35325C17.384 9.46633 17.6321 9.63206 17.841 9.841L20.75 12.75M2.75 16.5H19.25C19.6478 16.5 20.0294 16.342 20.3107 16.0607C20.592 15.7794 20.75 15.3978 20.75 15V3C20.75 2.60218 20.592 2.22064 20.3107 1.93934C20.0294 1.65804 19.6478 1.5 19.25 1.5H2.75C2.35218 1.5 1.97064 1.65804 1.68934 1.93934C1.40804 2.22064 1.25 2.60218 1.25 3V15C1.25 15.3978 1.40804 15.7794 1.68934 16.0607C1.97064 16.342 2.35218 16.5 2.75 16.5ZM13.25 5.25H13.258V5.258H13.25V5.25ZM13.625 5.25C13.625 5.34946 13.5855 5.44484 13.5152 5.51517C13.4448 5.58549 13.3495 5.625 13.25 5.625C13.1505 5.625 13.0552 5.58549 12.9848 5.51517C12.9145 5.44484 12.875 5.34946 12.875 5.25C12.875 5.15054 12.9145 5.05516 12.9848 4.98484C13.0552 4.91451 13.1505 4.875 13.25 4.875C13.3495 4.875 13.4448 4.91451 13.5152 4.98484C13.5855 5.05516 13.625 5.15054 13.625 5.25V5.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        PNG
                      </button>
                    </li>
                    <li><button className="download-item dropdown-item" type="button">
                      <svg className="m-2" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.75 5.25V12.75M17.75 5.25H14.75V9M14.75 9V12.75M14.75 9H17M8.75 6.348C7.72 4.884 6.052 4.884 5.022 6.348C3.992 7.813 3.992 10.188 5.022 11.652C6.052 13.116 7.721 13.116 8.75 11.652V9H7.25M3.5 16.5H18.5C19.0967 16.5 19.669 16.2629 20.091 15.841C20.5129 15.419 20.75 14.8467 20.75 14.25V3.75C20.75 3.15326 20.5129 2.58097 20.091 2.15901C19.669 1.73705 19.0967 1.5 18.5 1.5H3.5C2.90326 1.5 2.33097 1.73705 1.90901 2.15901C1.48705 2.58097 1.25 3.15326 1.25 3.75V14.25C1.25 14.8467 1.48705 15.419 1.90901 15.841C2.33097 16.2629 2.90326 16.5 3.5 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      GIF
                    </button></li>
                  </ul>
                </div>
              </div>

            </div>
          </>
        </div>

        {/* M   I   D   D   L   E           C   O   N   T   A   I   N   E   R */}
        <div className=' d-flex'>
          <div className='center-container' id="main-container">
            {/* <Main /> */}
            <>

              <div className={`main-container ${isFrame ? 'phone-frame-visible' : ''}`}>

                <div className="main-header" id='main-header'>
                  <div className='sub-div'>
                    <div className="d-flex">
                      <svg className={`back-arrow-and ${isIOS ? 'back-arrow-ios' : 'back-arrow-android'}`} id='back-arrow' width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M15.6748 10.119C16.1087 9.68504 16.1087 8.98152 15.6748 8.5476C15.2409 8.11369 14.5373 8.11369 14.1034 8.5476L7.43677 15.2143C7.00285 15.6482 7.00285 16.3517 7.43677 16.7856L14.1034 23.4523C14.5373 23.8862 15.2409 23.8862 15.6748 23.4523C16.1087 23.0184 16.1087 22.3149 15.6748 21.8809L11.2843 17.4904C11.1443 17.3504 11.2434 17.1111 11.4414 17.1111H23.778C24.3916 17.1111 24.8891 16.6136 24.8891 15.9999C24.8891 15.3863 24.3916 14.8888 23.778 14.8888H11.4414C11.2434 14.8888 11.1443 14.6495 11.2843 14.5095L15.6748 10.119Z" fill="currentColor"></path></svg>
                      <div className="icon-container" hidden={povType === 'business'}>
                        {icon ? (
                          <img className="icon" src={icon} alt="Uploaded Logo" />
                        ) : (
                          <span className="placeholder">No Image</span>
                        )}
                      </div>
                      <div className="icon-container" hidden={povType === 'customer'}>
                        {/* {icon ? (
                          <img className="icon" src={icon} alt="Uploaded Logo" />
                        ) : (
                          <span className="placeholder">No Image</span>
                        )} */}
                      </div>
                      <div>
                        <p className="comp-name" hidden={povType === 'customer'} id='cust-name'> Customer Name </p>
                        <p className="bus-acc" hidden={povType === 'customer'}>online</p>
                        <div className="d-flex">
                          <p className="comp-name" hidden={povType === 'business'} id='comp-name'> Company Name </p>
                          <svg id='verify-acc' hidden={!isVerified || povType === 'business'} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                            <path d="M10.7466 2.4425C11.4363 1.8525 12.5659 1.8525 13.2656 2.4425L14.8451 3.80261C15.145 4.06261 15.7047 4.27258 16.1046 4.27258H17.8039C18.8636 4.27258 19.7332 5.14251 19.7332 6.20251V7.90258C19.7332 8.29258 19.9431 8.86259 20.203 9.16259L21.5625 10.7425C22.1523 11.4325 22.1523 12.5626 21.5625 13.2626L20.203 14.8425C19.9431 15.1425 19.7332 15.7025 19.7332 16.1025V17.8026C19.7332 18.8626 18.8636 19.7325 17.8039 19.7325H16.1046C15.7147 19.7325 15.145 19.9425 14.8451 20.2025L13.2656 21.5625C12.5759 22.1525 11.4463 22.1525 10.7466 21.5625L9.16721 20.2025C8.86732 19.9425 8.30752 19.7325 7.90767 19.7325H6.17831C5.1187 19.7325 4.24904 18.8626 4.24904 17.8026V16.0925C4.24904 15.7025 4.03913 15.1425 3.78922 14.8425L2.43972 13.2526C1.85994 12.5626 1.85994 11.4426 2.43972 10.7526L3.78922 9.16259C4.03913 8.86259 4.24904 8.30259 4.24904 7.91259V6.20251C4.24904 5.14251 5.1187 4.27258 6.17831 4.27258H7.90767C8.29752 4.27258 8.86732 4.06261 9.16721 3.80261L10.7466 2.4425Z" fill="#25d366"></path>
                            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <p className="bus-acc" hidden={povType === 'business'}>Business Account</p>
                      </div>
                    </div>
                    <div className="right-icons">
                      <svg width="16" height="21" hidden={povType === 'business'} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><g clipPath="url(#shop_icon_clip_1)"><path d="M15.0001 5C15.0001 2.24 12.7601 0 10.0001 0C7.24011 0 5.00011 2.24 5.00011 5H2.87755C1.82142 5 0.947319 5.82117 0.88144 6.87524L0.197839 17.8129C0.0944869 19.4665 1.35123 20.8908 3.00486 20.9942C3.06716 20.9981 3.12957 21 3.192 21H16.5458H16.8068C18.4636 21 19.8068 19.6569 19.8068 18C19.8068 17.9376 19.8048 17.8752 19.8009 17.8129L19.1173 6.87524C19.0514 5.82117 18.1773 5 17.1212 5H15.0001ZM10.0001 2C11.6601 2 13.0001 3.34 13.0001 5H7.00011C7.00011 3.34 8.34011 2 10.0001 2ZM10.0017 12C7.61068 12 5.59939 10.41 5.03499 8.25C4.86054 7.62 5.36337 7 6.03038 7C6.51268 7 6.90262 7.34 7.03602 7.8C7.39518 9.07 8.58554 10 10.0017 10C11.4178 10 12.6081 9.07 12.9673 7.8C13.1007 7.34 13.4906 7 13.9729 7C14.6399 7 15.1325 7.62 14.9683 8.25C14.4039 10.41 12.3926 12 10.0017 12Z" fill="currentColor"></path></g></svg>
                      <svg width="20" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path fillRule="evenodd" clipRule="evenodd" d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M18 1C17.4477 1 17 1.44772 17 2V4H15C14.4477 4 14 4.44772 14 5C14 5.55228 14.4477 6 15 6H17V8C17 8.55228 17.4477 9 18 9C18.5523 9 19 8.55228 19 8V6H21C21.5523 6 22 5.55228 22 5C22 4.44772 21.5523 4 21 4H19V2C19 1.44772 18.5523 1 18 1Z" fill="currentColor"></path></svg>
                      <svg width="12" height="21" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path fillRule="evenodd" clipRule="evenodd" d="M6 8C7.1 8 8 7.1 8 6C8 4.9 7.1 4 6 4C4.9 4 4 4.9 4 6C4 7.1 4.9 8 6 8ZM6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16Z" fill="currentColor"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="main-display">
                  <div className="chat-container d-block" style={{ backgroundImage: `url(${bg})` }}>
                    <div className="main-content" >
                      {showIntro && (
                        <div className="chat-safe d-flex" id='safe'>
                          <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ><path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd"></path></svg>
                          <div className="d-block">
                            <p>Messages and calls are end-to-end encrypted.
                              <br /> No one outside of this chat, not even WhatsApp,
                              <br /> can read or listen to them. Tap to learn more.
                            </p>
                          </div>
                        </div>
                      )}

                      {showIntro && (
                        <div className="chat-info d-flex" id='info'>
                          <svg fill="none" viewBox="0 0 10 10" ><path fill="currentColor" fillRule="evenodd" d="M5 9.575c2.761 0 5-2.143 5-4.787C10 2.143 7.761 0 5 0S0 2.143 0 4.788c0 2.644 2.239 4.787 5 4.787zm-.736-7.062c0-.204.066-.372.198-.504s.31-.197.538-.197c.224 0 .402.065.535.197s.2.3.2.504a.68.68 0 01-.202.509A.73.73 0 015 3.22a.73.73 0 01-.534-.198.68.68 0 01-.202-.509zm1.358 4.663a.649.649 0 11-1.298 0V4.591a.649.649 0 111.298 0v2.585z" clipRule="evenodd" opacity="0.45"></path></svg>
                          <div className="d-block" >
                            <p>This business uses a secure service from
                              <br /> Meta to manage this chat. Tap to learn more.
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="msg-content" hidden={shopMessage}>
                        <div>
                          <div className="chat-content" id="chat-content" hidden={isRegister || shopElectronics || shopPhones || shopModels}>
                            {messages.map((msg, index) => {
                              const messageClass = povType === 'customer' ? msg.sender === 'user' ? 'message message-user' : 'message message-company' : msg.sender === 'user' ? 'message message-company' : 'message message-user';
                              return (
                                <div key={index} className={`d-grid message ${messageClass}  ${msg.isRead ? 'read' : 'unread'} ${activeMessage === index ? 'active-message' : '!active-message'}`} onClick={() => handleMessageClick(index)} >
                                  {msg.replyTo && (
                                    <div className={`reply-indicator ${msg.sender === 'user' ? 'message-user' : 'message-company'}`}>
                                      <span className='reply-message'>{msg.replyTo.text} </span>
                                    </div>
                                  )}
                                  <div className='d-flex'>
                                    <div className="chat-text" dangerouslySetInnerHTML={{ __html: msg.text }}></div>
                                    <div className='d-flex gap-2'>
                                      <span className="message-time">{msg.time}
                                        <svg className='msg-tick' id="msg-tick" hidden={msg.sender !== 'user'} version="1.1" x="0px" y="0px" viewBox="0 0 17.1 11" xmlSpace="preserve" width="16" height="16" data-read="false" data-white="false">
                                          <path d="M14.9,0.8c0.2-0.2,0.5-0.2,0.7-0.1L16,0.9c0.2,0.2,0.2,0.5,0.1,0.7L9.4,10c-0.3,0.3-0.8,0.4-1,0.1L7.3,9 c-0.2-0.2-0.2-0.5,0-0.7L7.6,8c0.2-0.2,0.5-0.2,0.7,0c0,0,0.2,0.2,0.5,0.4L14.9,0.8z M11.6,0.9c0.2,0.2,0.2,0.5,0.1,0.7L5,10 c-0.3,0.3-0.7,0.4-1,0.1l-3-3C0.8,6.9,0.8,6.6,1,6.4l0.3-0.3c0.2-0.2,0.5-0.2,0.7,0l2.4,2.3l6.2-7.6c0.2-0.2,0.5-0.2,0.7-0.1 L11.6,0.9z" fill="#000" style={{ opacity: 0.3 }}></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                            {flowMessages.map((mess, idx) => {
                              const messageClass = povType === 'customer' ? mess.sender === 'user' ? 'message message-user' : 'message message-company' : mess.sender === 'user' ? 'message message-company' : 'message message-user';
                              return (
                                <div key={idx} className={` flow-content-msg ${messageClass} `}>
                                  <h5>{mess.message}</h5>
                                  <img className='flow-content-image' src="https://www.stuff.tv/wp-content/uploads/sites/2/2021/08/amazon_black_friday.jpg?w=1024" alt="" />
                                  <p>{mess.description}</p>
                                  <hr className="divider" />
                                  <div className="shop-btn d-grid">
                                    {mess.link && <a className='btn btn-outline ' href={mess.link} target="_blank" rel="noreferrer" >
                                      <svg viewBox="0 0 19 18" height="18" width="19" preserveAspectRatio="xMidYMid meet" className="" version="1.1">
                                        <title>Shop Now</title>
                                        <path d="M14,5.41421356 L9.70710678,9.70710678 C9.31658249,10.0976311 8.68341751,10.0976311 8.29289322,9.70710678 C7.90236893,9.31658249 7.90236893,8.68341751 8.29289322,8.29289322 L12.5857864,4 L10,4 C9.44771525,4 9,3.55228475 9,3 C9,2.44771525 9.44771525,2 10,2 L14,2 C15.1045695,2 16,2.8954305 16,4 L16,8 C16,8.55228475 15.5522847,9 15,9 C14.4477153,9 14,8.55228475 14,8 L14,5.41421356 Z M14,12 C14,11.4477153 14.4477153,11 15,11 C15.5522847,11 16,11.4477153 16,12 L16,13 C16,14.6568542 14.6568542,16 13,16 L5,16 C3.34314575,16 2,14.6568542 2,13 L2,5 C2,3.34314575 3.34314575,2 5,2 L6,2 C6.55228475,2 7,2.44771525 7,3 C7,3.55228475 6.55228475,4 6,4 L5,4 C4.44771525,4 4,4.44771525 4,5 L4,13 C4,13.5522847 4.44771525,14 5,14 L13,14 C13.5522847,14 14,13.5522847 14,13 L14,12 Z" fill="currentColor" fillRule="nonzero"></path></svg>
                                      Shop Now
                                    </a>}
                                    {mess.link && <a className='btn btn-outline' target="_blank" rel="noreferrer" onClick={handleTryBtn}>
                                      <svg viewBox="0 0 19 18" height="18" width="19" preserveAspectRatio="xMidYMid meet" className="" version="1.1">
                                        <title>Try It</title>
                                        <path d="M14,5.41421356 L9.70710678,9.70710678 C9.31658249,10.0976311 8.68341751,10.0976311 8.29289322,9.70710678 C7.90236893,9.31658249 7.90236893,8.68341751 8.29289322,8.29289322 L12.5857864,4 L10,4 C9.44771525,4 9,3.55228475 9,3 C9,2.44771525 9.44771525,2 10,2 L14,2 C15.1045695,2 16,2.8954305 16,4 L16,8 C16,8.55228475 15.5522847,9 15,9 C14.4477153,9 14,8.55228475 14,8 L14,5.41421356 Z M14,12 C14,11.4477153 14.4477153,11 15,11 C15.5522847,11 16,11.4477153 16,12 L16,13 C16,14.6568542 14.6568542,16 13,16 L5,16 C3.34314575,16 2,14.6568542 2,13 L2,5 C2,3.34314575 3.34314575,2 5,2 L6,2 C6.55228475,2 7,2.44771525 7,3 C7,3.55228475 6.55228475,4 6,4 L5,4 C4.44771525,4 4,4.44771525 4,5 L4,13 C4,13.5522847 4.44771525,14 5,14 L13,14 C13.5522847,14 14,13.5522847 14,13 L14,12 Z" fill="currentColor" fillRule="nonzero"></path></svg>
                                      Try It
                                    </a>}
                                  </div>
                                </div>
                              );
                            })}
                            {replyMessage && flowMessages.map((mess, idx) => {
                              const messageClass = povType === 'customer' ? mess.sender === 'user' ? 'message message-user' : 'message message-company' : mess.sender === 'user' ? 'message message-company' : 'message message-user';
                              return (
                                <div key={idx} className={` flow-content-msg ${messageClass} `}>
                                  <p>{replyMessage.message}</p>
                                  <h6>{replyMessage.description}</h6>
                                </div>
                              )
                            })}
                          </div>

                          <div className="flow-messages mt-3" hidden={isRegister || shopElectronics || shopPhones || shopModels}>

                          </div>
                        </div>

                        {/* First Popup: Category Selection */}
                        {isRegister && (
                          <div className="popup-overlay">
                            <div className="popup-box">
                              <div className="d-flex popup-header">
                                <button className="close-btn" onClick={handleClose}>X</button>
                                <h3>Select a Category</h3>
                              </div>
                              <div className='popup-content d-flex'>
                                {ShopCategories.map((category, indx) => (
                                  <div key={indx}>
                                    <input type="radio" name="category" id={`category-${indx}`} value={category} checked={selectedShopCategory === category} onChange={handleCategoryChange} />
                                    <label className='popup-label' htmlFor={`category-${indx}`}>{category}</label>
                                  </div>
                                ))}
                              </div>
                              <div className='d-flex popup-footer'>
                                <button className='btn btn-primary popup-btn' onClick={handleBack}>
                                  <img className='icon-l' src="https://th.bing.com/th/id/R.eeaf6a8deb18f665bbcba072081beeeb?rik=QpUNnsmzWzRdIA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fxTg%2f6jb%2fxTg6jb6Bc.png&ehk=czCIACbu1xYU2OS7AeXQiczSlwix79KGQ3MyPK2ILUU%3d&risl=&pid=ImgRaw&r=0" alt="" />
                                  Back
                                </button>
                                <button className='btn btn-primary popup-btn' onClick={handleContinue}>
                                  Continue
                                  <img className='icon-r' src="https://th.bing.com/th/id/R.eeaf6a8deb18f665bbcba072081beeeb?rik=QpUNnsmzWzRdIA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fxTg%2f6jb%2fxTg6jb6Bc.png&ehk=czCIACbu1xYU2OS7AeXQiczSlwix79KGQ3MyPK2ILUU%3d&risl=&pid=ImgRaw&r=0" alt="" />
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Second Popup: Electronics Gadgets */}
                        {shopElectronics && (
                          <div className="popup-overlay">
                            <div className="popup-box">
                              <div className="d-flex popup-header">
                                <button className="close-btn" onClick={handleClose}>X</button>
                                <h3>Select an Electronics Gadget</h3>
                              </div>
                              <div className='popup-content d-flex'>
                                {ElectronicsGadgets.map((gadget, indx) => (
                                  <div key={indx}>
                                    <input type="radio" name="gadget" id={`gadget-${indx}`} value={gadget} checked={selectedGadget === gadget} onChange={handleGadgetChange} />
                                    <label className='popup-label' htmlFor={`gadget-${indx}`}>{gadget}</label>
                                  </div>
                                ))}
                              </div>
                              <div className='d-flex popup-footer'>
                                <button className='btn btn-primary popup-btn' onClick={handleElectronicsBack}>
                                  <img className='icon-l' src="https://th.bing.com/th/id/R.eeaf6a8deb18f665bbcba072081beeeb?rik=QpUNnsmzWzRdIA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fxTg%2f6jb%2fxTg6jb6Bc.png&ehk=czCIACbu1xYU2OS7AeXQiczSlwix79KGQ3MyPK2ILUU%3d&risl=&pid=ImgRaw&r=0" alt="" />
                                  Back
                                </button>
                                <button className='btn btn-primary popup-btn' onClick={handleElectronicsContinue}>
                                  Continue
                                  <img className='icon-r' src="https://th.bing.com/th/id/R.eeaf6a8deb18f665bbcba072081beeeb?rik=QpUNnsmzWzRdIA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fxTg%2f6jb%2fxTg6jb6Bc.png&ehk=czCIACbu1xYU2OS7AeXQiczSlwix79KGQ3MyPK2ILUU%3d&risl=&pid=ImgRaw&r=0" alt="" />
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Third Popup: Phone Brands */}
                        {shopPhones && (
                          <div className="popup-overlay">
                            <div className="popup-box">
                              <div className="d-flex popup-header">
                                <button className="close-btn" onClick={handleClose}>X</button>
                                <h3>Select a Phone Brand</h3>
                              </div>
                              <div className='popup-content d-flex'>
                                {PhoneBrands.map((brand, indx) => (
                                  <div key={indx}>
                                    <input type="radio" name="brand" id={`brand-${indx}`} value={brand} checked={selectedBrand === brand} onChange={handleBrandChange} />
                                    <label className='popup-label' htmlFor={`brand-${indx}`}>{brand}</label>
                                  </div>
                                ))}
                              </div>
                              <div className='d-flex popup-footer'>
                                <button className='btn btn-primary popup-btn' onClick={handlePhoneBack}>
                                  <img className='icon-l' src="https://th.bing.com/th/id/R.eeaf6a8deb18f665bbcba072081beeeb?rik=QpUNnsmzWzRdIA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fxTg%2f6jb%2fxTg6jb6Bc.png&ehk=czCIACbu1xYU2OS7AeXQiczSlwix79KGQ3MyPK2ILUU%3d&risl=&pid=ImgRaw&r=0" alt="" />
                                  Back
                                </button>
                                <button className='btn btn-primary popup-btn' onClick={handlePhoneContinue}>
                                  Continue
                                  <img className='icon-r' src="https://th.bing.com/th/id/R.eeaf6a8deb18f665bbcba072081beeeb?rik=QpUNnsmzWzRdIA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fxTg%2f6jb%2fxTg6jb6Bc.png&ehk=czCIACbu1xYU2OS7AeXQiczSlwix79KGQ3MyPK2ILUU%3d&risl=&pid=ImgRaw&r=0" alt="" />
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Fourth Popup: Phone Models */}
                        {shopModels && (
                          <div className="popup-overlay">
                            <div className="popup-box">
                              <div className="d-flex popup-header">
                                <button className="close-btn" onClick={handleClose}>X</button>
                                <h3>Select a Phone Model</h3>
                              </div>
                              <div className='popup-content d-flex'>
                                {selectedBrand && PhoneModels[selectedBrand]?.map((model, indx) => (
                                  <div key={indx}>
                                    <input type="radio" name="model" id={`model-${indx}`} value={model} checked={selectedModel === model} onChange={handleModelChange} />
                                    <label className='popup-label' htmlFor={`model-${indx}`}>{model}</label>
                                  </div>
                                ))}
                              </div>
                              <div className='d-flex popup-footer'>
                                <button className='btn btn-primary popup-btn' onClick={handleModelBack}>
                                  <img className='icon-l' src="https://th.bing.com/th/id/R.eeaf6a8deb18f665bbcba072081beeeb?rik=QpUNnsmzWzRdIA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fxTg%2f6jb%2fxTg6jb6Bc.png&ehk=czCIACbu1xYU2OS7AeXQiczSlwix79KGQ3MyPK2ILUU%3d&risl=&pid=ImgRaw&r=0" alt="" />
                                  Back
                                </button>
                                <button className='btn btn-primary popup-btn' onClick={handleModelContinue}>
                                  Continue
                                  <img className='icon-r' src="https://th.bing.com/th/id/R.eeaf6a8deb18f665bbcba072081beeeb?rik=QpUNnsmzWzRdIA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fxTg%2f6jb%2fxTg6jb6Bc.png&ehk=czCIACbu1xYU2OS7AeXQiczSlwix79KGQ3MyPK2ILUU%3d&risl=&pid=ImgRaw&r=0" alt="" />
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Fifth Popup: Phone Models */}
                      </div>
                      {/* <div className="flow-shop-message" id='flow-shop-message' hidden={!shopMessage} >
                        <div className="flow-shop-list" >
                          <div className="flow-list-header">
                            <button className="close-btn" > 
                              <span className="sr-only"></span>
                              <svg viewBox="0 0 24 24" className=" h-6 w-6">
                                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" fill="#000"></path>
                              </svg>
                            </button>
                            <p className=""> <strong> Black Friday DEALS </strong></p>
                            <button className="close-btn" > 
                              <span className="sr-only"></span>
                              <img src="https://static.vecteezy.com/system/resources/previews/026/327/358/original/more-icon-symbol-design-illustration-vector.jpg" alt="" />
                            </button>
                          </div>
                          <div className="flow-list-data" >
                            <p className=''>What would you like to buy?</p>
                            <div className="tab-content">
                              <input className="form-name-input" type="radio" onChange={handleCategoryChange} name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                              <label className="form-name-label" htmlFor="flexRadioDefault1" >
                                Electronics
                              </label>
                            </div>
                            <div className="tab-content">
                              <input className="form-name-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                              <label className="form-name-label" htmlFor="flexRadioDefault2">
                                Fashion
                              </label>
                            </div>
                            <div className="tab-content">
                              <input className="form-name-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                              <label className="form-name-label" htmlFor="flexRadioDefault3">
                                Toys & Games
                              </label>
                            </div>
                            <div className="tab-content">
                              <input className="form-name-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                              <label className="form-name-label" htmlFor="flexRadioDefault4">
                                Fresh Food & Groceries
                              </label>
                            </div>
                            <div className="tab-content">
                              <input className="form-name-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
                              <label className="form-name-label" htmlFor="flexRadioDefault6">
                                Books
                              </label>
                            </div>
                            <div className="tab-content">
                              <input className="form-name-input" type="radio" name="flexRadioDefault" id="flexRadioDefault8" />
                              <label className="form-name-label" htmlFor="flexRadioDefault8">
                                Home & Kitchen Appliances
                              </label>
                            </div>
                            <div className="tab-content">
                              <input className="form-name-input" type="radio" name="flexRadioDefault" id="flexRadioDefault9" />
                              <label className="form-name-label" htmlFor="flexRadioDefault9">
                                Car & Motorbike
                              </label>
                            </div>
                            <div className="tab-content">
                              <input className="form-name-input" type="radio" name="flexRadioDefault" id="flexRadioDefault10" />
                              <label className="form-name-label" htmlFor="flexRadioDefault10">
                                Today's Deals
                              </label>
                            </div>
                            <div className="tab-content">
                              <input className="form-name-input" type="radio" name="flexRadioDefault" id="flexRadioDefault11" />
                              <label className="form-name-label" htmlFor="flexRadioDefault11">
                                Sports, Fitness & Outdoors
                              </label>
                            </div>
                            <div className="tab-content">
                              <input className="form-name-input" type="radio" name="flexRadioDefault" id="flexRadioDefault12" />
                              <label className="form-name-label" htmlFor="flexRadioDefault12">
                                Beauty & Personal Care
                              </label>
                            </div>
                            <div className="tab-content">
                              <input className="form-name-input" type="radio" name="flexRadioDefault" id="flexRadioDefault13" />
                              <label className="form-name-label" htmlFor="flexRadioDefault13">
                                Pet Supplies
                              </label>
                            </div>
                            <div className="tab-content">
                              <input className="form-name-input" type="radio" name="flexRadioDefault" id="flexRadioDefault14" />
                              <label className="form-name-label" htmlFor="flexRadioDefault14">
                                Baby Products
                              </label>
                            </div>
                            {!selectedElecCategory === "electronics" && (
                              <div className="sub-category">
                                <p>Choose a product:</p>
                                <div className="tab-content">
                                  <input
                                    className="form-name-input"
                                    type="radio"
                                    name="electronics"
                                    id="laptops"
                                  />
                                  <label className="form-name-label" htmlFor="laptops">
                                    Laptops
                                  </label>
                                </div>
                                <div className="tab-content">
                                  <input
                                    className="form-name-input"
                                    type="radio"
                                    name="electronics"
                                    id="smartwatch"
                                  />
                                  <label className="form-name-label" htmlFor="smartwatch">
                                    Smartwatches
                                  </label>
                                </div>
                                <div className="tab-content">
                                  <input
                                    className="form-name-input"
                                    type="radio"
                                    name="electronics"
                                    id="phones"
                                  />
                                  <label className="form-name-label" htmlFor="phones">
                                    Phones
                                  </label>
                                </div>
                                <div className="tab-content">
                                  <input
                                    className="form-name-input"
                                    type="radio"
                                    name="electronics"
                                    id="tv"
                                  />
                                  <label className="form-name-label" htmlFor="tv">
                                    TVs
                                  </label>
                                </div>
                                <div className="tab-content">
                                  <input
                                    className="form-name-input"
                                    type="radio"
                                    name="electronics"
                                    id="speakers"
                                  />
                                  <label className="form-name-label" htmlFor="speakers">
                                    Speakers
                                  </label>
                                </div>
                                <div className="tab-content">
                                  <input
                                    className="form-name-input"
                                    type="radio"
                                    name="electronics"
                                    id="cameras"
                                  />
                                  <label className="form-name-label" htmlFor="cameras">
                                    Cameras
                                  </label>
                                </div>
                                <div className="tab-content">
                                  <input
                                    className="form-name-input"
                                    type="radio"
                                    name="electronics"
                                    id="accessories"
                                  />
                                  <label className="form-name-label" htmlFor="accessories">
                                    Computer Accessories
                                  </label>
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="flow-list-footer">
                            <button className="btn btn-outline-success"> Continue</button>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-footer-and" id="chat-footer-and" hidden={!isIOS}>
                  <div className="chat-type-and d-flex" id="chat-type-and">
                    <svg className="chat-emoji-and" hidden={!isIOS} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"></path>
                      <path d="M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"></path>
                    </svg>
                    <img className="chat-plus-ios" id="chat-plus-ios" hidden={!isAndroid} src="https://th.bing.com/th/id/OIP._SZsSmSi3yEuwcLpB6grRAAAAA?w=90&h=90&c=7&r=0&o=5&pid=1.7" alt="" />
                    <span hidden={!isIOS} id="chat-msg">Message</span>
                    <div className='chat-ios' id='chat-ios' hidden={!isAndroid}>  </div>
                    {/* <img src={attach} alt="" hidden={!isAndroid} className="chat-attach-ios" id="chat-attach-ios" /> */}
                    <div className="d-flex chat-img-and gap-3" hidden={!isIOS}>
                      <img id="chat-attach" hidden={!isIOS} src="https://cdn1.iconfinder.com/data/icons/education-vol-1-4/512/6-512.png" alt="" />
                      <img id="chat-cam-and" hidden={!isIOS} src="https://icon-library.com/images/camera-icon-vector/camera-icon-vector-1.jpg" alt="" />
                      <img id="chat-cam-ios" hidden={!isAndroid} className="chat-cam-ios" src="https://th.bing.com/th?q=Camera+Blue+iOS+Whatsapp+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="" />
                    </div>
                  </div>
                  <div className="chat-rec-and">
                    <img id="chat-rec-and" className="chat-rec-and-img" hidden={!isIOS} src="https://th.bing.com/th/id/OIP.WqVkmT-NidqnSsEdrhf5-wHaHa?w=188&h=188&c=7&r=0&o=5&pid=1.7" alt="" />
                    <img className="chat-rec-ios-img" id="chat-rec-ios" hidden={!isAndroid} src="https://th.bing.com/th?id=OIP.M3PjPVZ3iyWpluyKXEIctAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
                  </div>
                </div>

                {/* <img src='https://th.bing.com/th/id/OIP.-vVhm7eisaBhZqF1cVnVGQHaHa?rs=1&pid=ImgDetMain' alt="" /> */}
              </div>
            </>
          </div>
        </div>


        {/*  R   I   G   H   T              C   O   N   T   A   I   N   E   R */}
        <div className=' d-flex'>
          <div className='right-container'>
            {/* <Text /> */}
            <>
              <div className='msg-container'>
                <div className='d-flex text-nav data-container' onClick={scrollLeft}> {/*  */}
                  {/* <button type="button" className={`text-nav-arr-l ${isActive ? 'active' : ''}`} id="text-nav-arr-l" style={{ opacity: isOverflowing ? 1 : 0 }} >
                    <p className="sr-only" hidden>Scroll the blocks menu to the right</p>
                    <div className="opacity-100 scale-100">
                      <svg className="text-primary absolute right-1 top-1/2 -translate-y-[calc(50%+4px)] -rotate-90 scale-x-125" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1.5L6 6.5L1 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                  </button> */}
                  <div className="nav nav-underline">
                    <a className={`nav-link ${!isWpFlow ? "active-href" : "deactive-href"}`} aria-current="page" onClick={handleWpText}>Text </a>
                  </div>
                  <div className="nav nav-underline">
                    <a className={`nav-link ${isWpFlow ? "active-href" : "deactive-href"}`} role='button' onClick={handleWpFlow} >Flow </a>
                  </div>
                  <div className="nav nav-underline">
                    <a className='nav-link deactive-href' role='button' onClick={handleWpImg} > Image </a>
                  </div>
                  <div className="nav nav-underline">
                    <a className='nav-link deactive-href' role='button' onClick={handleWpVdo} > Video/GIF/File </a>
                  </div>
                  <div className="nav nav-underline">
                    <a className='nav-link deactive-href' role='button' onClick={handleWpAud} > Audio </a>
                  </div>
                  <div className="nav nav-underline">
                    <a className='nav-link deactive-href' role='button' onClick={handleWpBtn} > Buttons</a>
                  </div>
                  <div className="nav nav-underline">
                    <a className='nav-link deactive-href' role='button' onClick={handleWpPro} > Product </a>
                  </div>

                  {/* <button type="button" className={`text-nav-arr-r ${isActive ? 'active' : ''}`} id="text-nav-arr-r" style={{ opacity: isOverflowing ? 1 : 0 }} onClick={scrollRight}> 
                    <p className="sr-only" hidden>Scroll the blocks menu to the right</p>
                    <div className="opacity-100 scale-100">
                      <svg className="text-primary absolute right-1 top-1/2 -translate-y-[calc(50%+4px)] -rotate-90 scale-x-125" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1.5L6 6.5L1 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                  </button> */}
                </div>

                <hr className="divider" />

                {/* {!showFlow ? ( */}
                <div className="WpText" id="WpText" hidden={isWpFlow}>
                  <div className="text-type-container d-flex" id='text-type-container' >
                    <div className="btn-group">
                      <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" checked={currentSender === 'company'} onChange={() => setCurrentSender('company')} />
                      <label className="btn btn-outline-primary" htmlFor="option1">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.348 2.771C7.71613 2.4234 10.1065 2.24927 12.5 2.25C14.93 2.25 17.317 2.428 19.652 2.77C21.63 3.062 23 4.794 23 6.74V12.76C23 14.706 21.63 16.438 19.652 16.73C17.712 17.014 15.736 17.185 13.73 17.235C13.6303 17.2369 13.5351 17.277 13.464 17.347L9.28 21.53C9.17511 21.6348 9.04153 21.7061 8.89614 21.735C8.75074 21.7639 8.60004 21.749 8.46308 21.6923C8.32611 21.6356 8.20903 21.5395 8.12661 21.4163C8.04419 21.2931 8.00013 21.1482 8 21V17.045C7.11329 16.9639 6.22895 16.8585 5.348 16.729C3.37 16.439 2 14.705 2 12.759V6.741C2 4.795 3.37 3.061 5.348 2.771Z" fill="#9ca3af"></path>
                        </svg>
                        Company
                      </label>
                      <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" checked={currentSender === 'user'} onChange={() => setCurrentSender('user')} />
                      <label className="btn btn-outline-primary" htmlFor="option2">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M19.652 2.771C17.2839 2.4234 14.8935 2.24927 12.5 2.25C10.07 2.25 7.683 2.428 5.348 2.77C3.37 3.062 2 4.794 2 6.74V12.76C2 14.706 3.37 16.438 5.348 16.73C7.288 17.014 9.264 17.185 11.27 17.235C11.3697 17.2369 11.4649 17.277 11.536 17.347L15.72 21.53C15.8249 21.6348 15.9585 21.7061 16.1039 21.735C16.2493 21.7639 16.4 21.749 16.5369 21.6923C16.6739 21.6356 16.791 21.5395 16.8734 21.4163C16.9558 21.2931 16.9999 21.1482 17 21V17.045C17.8867 16.9639 18.771 16.8585 19.652 16.729C21.63 16.439 23 14.705 23 12.759V6.741C23 4.795 21.63 3.061 19.652 2.771Z" fill="#9ca3af"></path>
                        </svg>
                        User
                      </label>
                    </div>
                    <div>
                      <svg className="" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 2.25H3.375C2.75368 2.25 2.25 2.75368 2.25 3.375V14.625C2.25 15.2463 2.75368 15.75 3.375 15.75H14.625C15.2463 15.75 15.75 15.2463 15.75 14.625V3.375C15.75 2.75368 15.2463 2.25 14.625 2.25Z" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.6875 10.5V8.22667L9.65625 9.36333L11.625 10.5L9.65625 11.6367L7.6875 12.7733V10.5Z" fill="#25D366" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.25 5.625H15.75" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12.375 2.25L10.125 5.625" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.875 2.25L5.625 5.625" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      <div className='tip'>
                        <span className="tiptext">Switch between company and user message</span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.85638 6.5C6.31398 5.52901 7.54869 4.83333 9.00004 4.83333C10.841 4.83333 12.3334 5.95262 12.3334 7.33333C12.3334 8.49953 11.2687 9.47923 9.82856 9.7555C9.37657 9.84221 9.00004 10.2064 9.00004 10.6667M9 13.1667H9.00833M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#D4D4D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="text-editor" id="text-editor" >
                    <EditorProvider >
                      <Toolbar>
                        <div className="toolbar">
                          <BtnBold className={isBold ? 'active' : ''} onClick={onBold} />
                        </div>
                        <BtnItalic className={isItalic ? 'active' : ''} onClick={onItalics} />
                        <button>
                          <span className="attachment" onClick={onAttach}>
                            <svg className="attachment" width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2813 1.225C17.9329 0.875397 17.5189 0.598009 17.0631 0.408738C16.6073 0.219468 16.1186 0.12204 15.625 0.12204C15.1315 0.12204 14.6428 0.219468 14.187 0.408738C13.7312 0.598009 13.3172 0.875397 12.9688 1.225L13.8563 2.1125C14.089 1.87981 14.3652 1.69523 14.6692 1.56931C14.9733 1.44338 15.2991 1.37856 15.6282 1.37856C15.9572 1.37856 16.2831 1.44338 16.5871 1.56931C16.8911 1.69523 17.1674 1.87981 17.4 2.1125C17.6327 2.34518 17.8173 2.62142 17.9432 2.92544C18.0692 3.22946 18.134 3.5553 18.134 3.88437C18.134 4.21344 18.0692 4.53928 17.9432 4.8433C17.8173 5.14732 17.6327 5.42356 17.4 5.65625L12.4 10.6562C11.9309 11.1262 11.2944 11.3905 10.6304 11.3911C9.96638 11.3917 9.32935 11.1285 8.85942 10.6594C8.38949 10.1903 8.12515 9.5537 8.12457 8.8897C8.12398 8.22571 8.38719 7.58868 8.85629 7.11875L9.73754 6.23125L8.85629 5.34375L7.96879 6.23125C7.61919 6.57963 7.3418 6.99361 7.15253 7.44943C6.96326 7.90524 6.86583 8.39394 6.86583 8.8875C6.86583 9.38105 6.96326 9.86975 7.15253 10.3256C7.3418 10.7814 7.61919 11.1954 7.96879 11.5437C8.67597 12.2419 9.63134 12.6308 10.625 12.625C11.1205 12.627 11.6114 12.5309 12.0695 12.3421C12.5276 12.1533 12.9437 11.8756 13.2938 11.525L18.2938 6.525C18.9944 5.82021 19.3866 4.86616 19.3842 3.87241C19.3819 2.87866 18.9852 1.92647 18.2813 1.225Z" fill="currentColor"></path><path d="M2.61879 12.5125C2.38541 12.2802 2.20022 12.0041 2.07386 11.7C1.94749 11.3959 1.88244 11.0699 1.88244 10.7406C1.88244 10.4113 1.94749 10.0853 2.07386 9.78123C2.20022 9.47715 2.38541 9.20104 2.61879 8.96875L7.61879 3.96875C7.85109 3.73537 8.1272 3.55018 8.43127 3.42381C8.73534 3.29745 9.06138 3.2324 9.39067 3.2324C9.71995 3.2324 10.046 3.29745 10.3501 3.42381C10.6541 3.55018 10.9302 3.73537 11.1625 3.96875C11.3944 4.20287 11.577 4.48116 11.6994 4.78713C11.8218 5.0931 11.8815 5.42052 11.875 5.75C11.8769 6.0805 11.8133 6.4081 11.6878 6.71385C11.5623 7.01959 11.3774 7.29742 11.1438 7.53125L9.81879 8.875L10.7063 9.7625L12.0313 8.4375C12.7366 7.73219 13.1328 6.77558 13.1328 5.77812C13.1328 4.78066 12.7366 3.82406 12.0313 3.11875C11.326 2.41344 10.3694 2.0172 9.37192 2.0172C8.37446 2.0172 7.41785 2.41344 6.71254 3.11875L1.71254 8.11875C1.362 8.46725 1.08382 8.88161 0.893994 9.33801C0.704168 9.7944 0.606445 10.2838 0.606445 10.7781C0.606445 11.2724 0.704168 11.7618 0.893994 12.2182C1.08382 12.6746 1.362 13.089 1.71254 13.4375C2.42431 14.1303 3.38185 14.5124 4.37504 14.5C5.37698 14.501 6.33862 14.1055 7.05004 13.4L6.16254 12.5125C5.93025 12.7459 5.65413 12.9311 5.35006 13.0574C5.04599 13.1838 4.71995 13.2488 4.39067 13.2488C4.06138 13.2488 3.73534 13.1838 3.43127 13.0574C3.1272 12.9311 2.85109 12.7459 2.61879 12.5125Z" fill="currentColor"></path></svg>
                          </span>
                        </button>
                        <button onClick={toggleEmojiPicker}>
                          <span className="emoji" >
                            <svg className="emoji" values='emoji' width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"></path><path d="M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"></path></svg>
                          </span>
                        </button>
                        {showEmoji && (
                          <div className="emoji-picker">
                            <span onClick={() => addEmoji('😀')}>😀</span>
                            <span onClick={() => addEmoji('😄')}>😄</span>
                            <span onClick={() => addEmoji('😁')}>😁</span>
                            <span onClick={() => addEmoji('😆')}>😆</span>
                            <span onClick={() => addEmoji('😅')}>😅</span>
                          </div>
                        )}
                      </Toolbar>
                      <div >
                        <Editor value={text} onChange={handleTextAreaChange} id='textbox' className='textarea' />
                      </div>
                      {/* <Editor value={text} id='textbox' className='textarea' onChange={handleTextAreaChange} /> */}
                    </EditorProvider >
                  </div>

                  <div className='text-time-container d-flex' >
                    <div className="time-group d-flex mt-3 mb-3">
                      <input type="text" className="msg-time" aria-label="Time input" aria-describedby="inputGroup-sizing-default" value={time} onChange={handleTimeChange} />
                      <button className="msg-period" id="inputGroup-sizing-default" onClick={togglePeriod}>{period}</button>
                    </div>
                  </div>

                  <div className='d-grid  justify-content-between' >
                    <div className="btns d-flex">
                      <button className="arrow-btn btn btn-outline-primary" onClick={() => handleArrow('up')} disabled={activeMessage === null || activeMessage === 0}>
                        <svg className="arrow h-6 w-6" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"></path>
                        </svg>
                      </button>
                      <button className="arrow-btn btn btn-outline-primary" onClick={() => handleArrow('down')} disabled={activeMessage === null || activeMessage === messages.length - 1}>
                        <svg className="arrow h-6 w-6" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                        </svg>
                      </button>
                      <button className="reply-btn btn btn-outline-primary" onClick={handleReply} disabled={activeMessage === null}>
                        Reply
                      </button>
                      <button className="delete-btn btn btn-outline-danger" onClick={handleDelete} disabled={activeMessage === null}>
                        Delete
                      </button>
                    </div>
                    <div className="save-btn">
                      <button className='btn btn-success' onClick={handleSaveMessage}>{activeMessage !== null ? 'Update Message' : 'Save'}</button>
                    </div>
                  </div>
                </div>
                {/* ) : ( */}
                <div className="flow-content" hidden={!isWpFlow}>
                  <h4>Design your Flow template</h4>

                  {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link-setup nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                        <img src="https://cdn3.iconfinder.com/data/icons/black-friday-icon-t-event-glyph/64/Megaphone-512.png" className='nav-link-img' alt="" />
                        Marketing
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link-setup nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                        <img src="https://th.bing.com/th/id/OIP.vFwMEZmT5DHFc4BFSmXIFQHaHa?pid=ImgDet&w=204&h=204&c=7" className='nav-link-img' alt="" />
                        Utility
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link-setup nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                        <img src="https://th.bing.com/th/id/OIP.YjKOro8pXwxP51hmhsIKVgHaHa?pid=ImgDet&w=204&h=204&c=7" className='nav-link-img' alt="" />
                        Authentication
                      </button>
                    </li>
                  </ul> */}

                  <div className="btn-group mt-3">
                    <button className="btn btn-primary dropdown-toggle" type="button" onClick={() => setDropdownOpen(!dropdownOpen)} >
                      Category
                    </button>
                    {dropdownOpen && (
                      <ul className="category-menu dropdown-menu show">
                        {categories.map((category, idx) => (
                          <li key={idx}>
                            <button className="dropdown-item" onClick={() => handleCategoryClick(category)}> {category} </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>


                  {showModal && (
                    <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Enter Data for "{selectedCategory}"</h5>
                            <button type="button" className="btn-close" onClick={() => setShowModal(false)} ></button>
                          </div>
                          <div className="modal-body">
                            <div className="mb-3">
                              <label className="form-label">Flow Name</label>
                              <input type="text" className="flow-form-control" placeholder="Name" value='Black Friday DEALS' onChange={(e) => setFlowName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                              <label className="form-label">Description</label>
                              <input type="text" className="flow-form-control" placeholder="Describe your flow..." value='Black Friday is around the corner and as promised we are giving you early access to our deals. Select the best deal for the products you are interested in!'
                                onChange={(e) => setFlowDescription(e.target.value)} />
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)} >
                              Cancel
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* )} */}

              </div>
            </>
          </div>
        </div>
      </div >
      <div>
      </div>
    </>
  )
}

export default App 