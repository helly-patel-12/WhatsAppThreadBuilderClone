import './css/Screen.css'

function App() {
  const [messages, setMessages] = useState([]);

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
    setMessages([]);
  }
  return (
    <>
      <div className='d-grid screen-container'>

        <h6><b>Screen Settings</b></h6>

        <div className='chat-dropdown'>
          <div className="dropdown d-flex">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Chat
            </button>
            <ul className="dropdown-menu">
              <li><button className="chat dropdown-item" type="button">Chat</button></li>
              <li><button className="chat dropdown-item" type="button">Locked Screen</button></li>
              <li><button className="chat dropdown-item" type="button">Multi Product Message</button></li>
              <li><button className="chat dropdown-item" type="button">Product Detail Page</button></li>
              <li><button className="chat dropdown-item" type="button">Product Cart</button></li>
            </ul>
          </div>
          <div>
            <svg class="" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.85638 6.5C6.31398 5.52901 7.54869 4.83333 9.00004 4.83333C10.841 4.83333 12.3334 5.95262 12.3334 7.33333C12.3334 8.49953 11.2687 9.47923 9.82856 9.7555C9.37657 9.84221 9.00004 10.2064 9.00004 10.6667M9 13.1667H9.00833M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#D4D4D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
        </div>

        <div className='intro-message'>
          <div className='d-flex'>
            <svg className='m-2' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2.5 mr-2.5 text-primary"><path d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM4.5 10.57H7.27C7.68 10.57 8.02 10.91 8.02 11.32C8.02 11.73 7.68 12.07 7.27 12.07H4.5C4.09 12.07 3.75 11.73 3.75 11.32C3.75 10.91 4.09 10.57 4.5 10.57ZM10.97 15.83H4.5C4.09 15.83 3.75 15.49 3.75 15.08C3.75 14.67 4.09 14.33 4.5 14.33H10.97C11.38 14.33 11.72 14.67 11.72 15.08C11.72 15.49 11.39 15.83 10.97 15.83ZM15.5 15.83H13.65C13.24 15.83 12.9 15.49 12.9 15.08C12.9 14.67 13.24 14.33 13.65 14.33H15.5C15.91 14.33 16.25 14.67 16.25 15.08C16.25 15.49 15.91 15.83 15.5 15.83ZM15.5 12.07H9.97C9.56 12.07 9.22 11.73 9.22 11.32C9.22 10.91 9.56 10.57 9.97 10.57H15.5C15.91 10.57 16.25 10.91 16.25 11.32C16.25 11.73 15.91 12.07 15.5 12.07Z" fill="#25d366"></path></svg>
            <p>Display intro message</p>
          </div>
          <svg class="" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.85638 6.5C6.31398 5.52901 7.54869 4.83333 9.00004 4.83333C10.841 4.83333 12.3334 5.95262 12.3334 7.33333C12.3334 8.49953 11.2687 9.47923 9.82856 9.7555C9.37657 9.84221 9.00004 10.2064 9.00004 10.6667M9 13.1667H9.00833M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#D4D4D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
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
                    <path d="M1.25 12.75L6.409 7.591C6.61793 7.38206 6.86597 7.21633 7.13896 7.10325C7.41194 6.99018 7.70452 6.93198 8 6.93198C8.29548 6.93198 8.58806 6.99018 8.86104 7.10325C9.13403 7.21633 9.38207 7.38206 9.591 7.591L14.75 12.75M13.25 11.25L14.659 9.841C14.8679 9.63206 15.116 9.46633 15.389 9.35325C15.6619 9.24018 15.9545 9.18198 16.25 9.18198C16.5455 9.18198 16.8381 9.24018 17.111 9.35325C17.384 9.46633 17.6321 9.63206 17.841 9.841L20.75 12.75M2.75 16.5H19.25C19.6478 16.5 20.0294 16.342 20.3107 16.0607C20.592 15.7794 20.75 15.3978 20.75 15V3C20.75 2.60218 20.592 2.22064 20.3107 1.93934C20.0294 1.65804 19.6478 1.5 19.25 1.5H2.75C2.35218 1.5 1.97064 1.65804 1.68934 1.93934C1.40804 2.22064 1.25 2.60218 1.25 3V15C1.25 15.3978 1.40804 15.7794 1.68934 16.0607C1.97064 16.342 2.35218 16.5 2.75 16.5ZM13.25 5.25H13.258V5.258H13.25V5.25ZM13.625 5.25C13.625 5.34946 13.5855 5.44484 13.5152 5.51517C13.4448 5.58549 13.3495 5.625 13.25 5.625C13.1505 5.625 13.0552 5.58549 12.9848 5.51517C12.9145 5.44484 12.875 5.34946 12.875 5.25C12.875 5.15054 12.9145 5.05516 12.9848 4.98484C13.0552 4.91451 13.1505 4.875 13.25 4.875C13.3495 4.875 13.4448 4.91451 13.5152 4.98484C13.5855 5.05516 13.625 5.15054 13.625 5.25V5.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  PNG
                </button>
              </li>
              <li>
                <button className="download-item dropdown-item" type="button">
                  <svg class="m-2" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.75 5.25V12.75M17.75 5.25H14.75V9M14.75 9V12.75M14.75 9H17M8.75 6.348C7.72 4.884 6.052 4.884 5.022 6.348C3.992 7.813 3.992 10.188 5.022 11.652C6.052 13.116 7.721 13.116 8.75 11.652V9H7.25M3.5 16.5H18.5C19.0967 16.5 19.669 16.2629 20.091 15.841C20.5129 15.419 20.75 14.8467 20.75 14.25V3.75C20.75 3.15326 20.5129 2.58097 20.091 2.15901C19.669 1.73705 19.0967 1.5 18.5 1.5H3.5C2.90326 1.5 2.33097 1.73705 1.90901 2.15901C1.48705 2.58097 1.25 3.15326 1.25 3.75V14.25C1.25 14.8467 1.48705 15.419 1.90901 15.841C2.33097 16.2629 2.90326 16.5 3.5 16.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  GIF
                </button>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default App