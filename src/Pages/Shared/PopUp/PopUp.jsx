import React, { useEffect, useState } from 'react';
import './popup.css';

const PopUp = () => {
    const [showPopup, setShowPopup] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShowPopup(false);
        }, 3000); // Adjust the time (in milliseconds) as needed
    }, []);
    if (showPopup) {
        return (
            <div className="popup-container">
                <div className="popup-content">
                    <img src="https://starpng.com/public/uploads/preview/special-sale-png-upto-50-off-21566900736fgrdno5kvr.png" alt="Popup" />
                </div>
            </div>
        );
    }
    return null;
};
export default PopUp;