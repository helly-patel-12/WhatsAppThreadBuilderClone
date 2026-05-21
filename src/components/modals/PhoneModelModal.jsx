// src/components/modals/PhoneModelModal.jsx
import { PhoneModels } from '../../data/shopData';

const BACK_ICON = "https://th.bing.com/th/id/R.eeaf6a8deb18f665bbcba072081beeeb?rik=QpUNnsmzWzRdIA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fxTg%2f6jb%2fxTg6jb6Bc.png&ehk=czCIACbu1xYU2OS7AeXQiczSlwix79KGQ3MyPK2ILUU%3d&risl=&pid=ImgRaw&r=0";

export default function PhoneModelModal({ brand, selected, onChange, onContinue, onBack, onClose }) {
  const models = PhoneModels[brand] ?? [];

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <div className="d-flex popup-header">
          <button className="close-btn" onClick={onClose}>X</button>
          <h3>Select a Phone Model</h3>
        </div>
        <div className="popup-content d-flex">
          {models.map((m, i) => (
            <div key={i}>
              <input type="radio" name="model" id={`model-${i}`} value={m}
                checked={selected === m} onChange={() => onChange(m)} />
              <label className="popup-label" htmlFor={`model-${i}`}>{m}</label>
            </div>
          ))}
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