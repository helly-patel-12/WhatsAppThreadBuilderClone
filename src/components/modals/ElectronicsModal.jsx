// src/components/modals/ElectronicsModal.jsx
import { ElectronicsGadgets } from '../../data/shopData';

const BACK_ICON = "https://th.bing.com/th/id/R.eeaf6a8deb18f665bbcba072081beeeb?rik=QpUNnsmzWzRdIA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fxTg%2f6jb%2fxTg6jb6Bc.png&ehk=czCIACbu1xYU2OS7AeXQiczSlwix79KGQ3MyPK2ILUU%3d&risl=&pid=ImgRaw&r=0";

export default function ElectronicsModal({ selected, onChange, onContinue, onBack, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <div className="d-flex popup-header">
          <button className="close-btn" onClick={onClose}>X</button>
          <h3>Select an Electronics Gadget</h3>
        </div>
        <div className="popup-content d-flex">
          {ElectronicsGadgets.map((g, i) => (
            <div key={i}>
              <input type="radio" name="gadget" id={`gadget-${i}`} value={g}
                checked={selected === g} onChange={() => onChange(g)} />
              <label className="popup-label" htmlFor={`gadget-${i}`}>{g}</label>
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