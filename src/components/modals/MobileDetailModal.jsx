// src/components/modals/MobileDetailModal.jsx

const BACK_ICON = "https://th.bing.com/th/id/R.eeaf6a8deb18f665bbcba072081beeeb?rik=QpUNnsmzWzRdIA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fxTg%2f6jb%2fxTg6jb6Bc.png&ehk=czCIACbu1xYU2OS7AeXQiczSlwix79KGQ3MyPK2ILUU%3d&risl=&pid=ImgRaw&r=0";

export default function MobileDetailModal({ selectedModel, mobileDetails, onContinue, onBack, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <div className="d-flex popup-header">
          <button className="close-btn" onClick={onClose}>X</button>
          <h4 className="header">
            You Selected <br /><strong><em>{selectedModel}</em></strong>
          </h4>
        </div>
        <div className="popup-content d-flex">
          {mobileDetails && (
            <div className="details-popup">
              <a href={mobileDetails.Image} target="_blank" rel="noopener noreferrer">
                <img src={mobileDetails.Image} alt={selectedModel} className="phone-image" />
              </a>
              <h5>Phone Specifications</h5>
              <div className="specs-container">
                {Object.entries(mobileDetails).map(([key, value]) =>
                  key !== 'Image' && key !== 'AmazonLink' ? (
                    <div key={key} className="spec-item">
                      <span className="spec-key">{key}:</span>{' '}
                      <span className="spec-value">{value}</span>
                    </div>
                  ) : null
                )}
              </div>
              <a href={mobileDetails.AmazonLink} target="_blank" rel="noopener noreferrer"
                className="btn btn-info redirect">
                Buy on Amazon
                <img className="cart-btn"
                  src="https://th.bing.com/th?id=OIP.BEUTMsqITs1iT6S9QzThYAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                  alt="" />
              </a>
            </div>
          )}
        </div>
        <div className="d-flex popup-footer">
          <button className="btn btn-primary popup-b-btn" onClick={onBack}>
            <img className="icon-l" src={BACK_ICON} alt="" /> Back
          </button>
          <button className="btn btn-success popup-c-btn" onClick={onContinue}>
            Continue <img className="icon-r" src={BACK_ICON} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}