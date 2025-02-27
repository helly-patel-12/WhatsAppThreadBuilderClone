import './css/Main.css'
import icon from './Images/icon.jpg'
import bg from './Images/chat-bg.png'

function App() {

    return (
        <>
            <div className="main-header">
                <div className='sub-div'>
                    <div className="d-flex">
                        <svg className="text-white" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M15.6748 10.119C16.1087 9.68504 16.1087 8.98152 15.6748 8.5476C15.2409 8.11369 14.5373 8.11369 14.1034 8.5476L7.43677 15.2143C7.00285 15.6482 7.00285 16.3517 7.43677 16.7856L14.1034 23.4523C14.5373 23.8862 15.2409 23.8862 15.6748 23.4523C16.1087 23.0184 16.1087 22.3149 15.6748 21.8809L11.2843 17.4904C11.1443 17.3504 11.2434 17.1111 11.4414 17.1111H23.778C24.3916 17.1111 24.8891 16.6136 24.8891 15.9999C24.8891 15.3863 24.3916 14.8888 23.778 14.8888H11.4414C11.2434 14.8888 11.1443 14.6495 11.2843 14.5095L15.6748 10.119Z" fill="currentColor"></path></svg>
                        <img className='icon' src={icon} alt="" />
                        <div>
                            <p className="comp-name"> Company Name </p>
                            <p className="bus-acc">Business Account</p>
                        </div>
                    </div>
                    <div className="right-icons">
                        <svg width="16" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><g clip-path="url(#shop_icon_clip_1)"><path d="M15.0001 5C15.0001 2.24 12.7601 0 10.0001 0C7.24011 0 5.00011 2.24 5.00011 5H2.87755C1.82142 5 0.947319 5.82117 0.88144 6.87524L0.197839 17.8129C0.0944869 19.4665 1.35123 20.8908 3.00486 20.9942C3.06716 20.9981 3.12957 21 3.192 21H16.5458H16.8068C18.4636 21 19.8068 19.6569 19.8068 18C19.8068 17.9376 19.8048 17.8752 19.8009 17.8129L19.1173 6.87524C19.0514 5.82117 18.1773 5 17.1212 5H15.0001ZM10.0001 2C11.6601 2 13.0001 3.34 13.0001 5H7.00011C7.00011 3.34 8.34011 2 10.0001 2ZM10.0017 12C7.61068 12 5.59939 10.41 5.03499 8.25C4.86054 7.62 5.36337 7 6.03038 7C6.51268 7 6.90262 7.34 7.03602 7.8C7.39518 9.07 8.58554 10 10.0017 10C11.4178 10 12.6081 9.07 12.9673 7.8C13.1007 7.34 13.4906 7 13.9729 7C14.6399 7 15.1325 7.62 14.9683 8.25C14.4039 10.41 12.3926 12 10.0017 12Z" fill="currentColor"></path></g></svg>
                        <svg width="20" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path fill-rule="evenodd" clip-rule="evenodd" d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18 1C17.4477 1 17 1.44772 17 2V4H15C14.4477 4 14 4.44772 14 5C14 5.55228 14.4477 6 15 6H17V8C17 8.55228 17.4477 9 18 9C18.5523 9 19 8.55228 19 8V6H21C21.5523 6 22 5.55228 22 5C22 4.44772 21.5523 4 21 4H19V2C19 1.44772 18.5523 1 18 1Z" fill="currentColor"></path></svg>
                        <svg width="12" height="21" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C7.1 8 8 7.1 8 6C8 4.9 7.1 4 6 4C4.9 4 4 4.9 4 6C4 7.1 4.9 8 6 8ZM6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16Z" fill="currentColor"></path></svg>
                    </div>
                </div>
            </div>

            <div className="main-display">
                <div className="chat-container d-block" style={{ backgroundImage: `url(${bg})` }}>
                    <div className="main-content">
                        <div className="chat-safe d-flex">
                            <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ><path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd"></path></svg>
                            <div className="d-block">
                                <p>Messages and calls are end-to-end encrypted.
                                    <br /> No one outside of this chat, not even WhatsApp,
                                    <br /> can read or listen to them. Tap to learn more.
                                </p>
                            </div>
                        </div>

                        <div className="chat-info d-flex">
                            <svg fill="none" viewBox="0 0 10 10"><path fill="currentColor" fill-rule="evenodd" d="M5 9.575c2.761 0 5-2.143 5-4.787C10 2.143 7.761 0 5 0S0 2.143 0 4.788c0 2.644 2.239 4.787 5 4.787zm-.736-7.062c0-.204.066-.372.198-.504s.31-.197.538-.197c.224 0 .402.065.535.197s.2.3.2.504a.68.68 0 01-.202.509A.73.73 0 015 3.22a.73.73 0 01-.534-.198.68.68 0 01-.202-.509zm1.358 4.663a.649.649 0 11-1.298 0V4.591a.649.649 0 111.298 0v2.585z" clip-rule="evenodd" opacity="0.45"></path></svg>
                            <div className="d-block">
                                <p>This business uses a secure service from
                                    <br /> Meta to manage this chat. Tap to learn more.
                                </p>
                            </div>
                        </div>

                        <div className="msg-content">
                            <div className="chat-content">
                                {messages.map((msg, index) => (
                                    <div key={index} className={`message ${msg.sender === 'user' ? 'message-user' : 'message-company'}`}>
                                        <div className='chat-text' dangerouslySetInnerHTML={{ __html: msg.text }}></div>
                                        <span className="message-time">{msg.time}</span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                    <div className="d-flex chat-footer">
                        <div className='chat-type d-flex'>
                            <div className=' d-flex'>
                                <svg className='chat-emoji' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"></path><path d="M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"></path></svg>
                                <span>Message</span>
                                <div className="d-flex chat-img gap-3">
                                    <img src='https://cdn1.iconfinder.com/data/icons/education-vol-1-4/512/6-512.png' alt="" />
                                    <img src='https://icon-library.com/images/camera-icon-vector/camera-icon-vector-1.jpg' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='chat-rec'>
                            <img src='https://th.bing.com/th/id/OIP.WqVkmT-NidqnSsEdrhf5-wHaHa?w=188&h=188&c=7&r=0&o=5&pid=1.7' alt="" />
                            {/* <img src='https://th.bing.com/th/id/OIP.-vVhm7eisaBhZqF1cVnVGQHaHa?rs=1&pid=ImgDetMain' alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App