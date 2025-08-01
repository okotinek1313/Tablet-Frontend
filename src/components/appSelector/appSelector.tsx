import React, {type ReactNode} from 'react'
import './AppSelector.css'

interface AppSelector {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
}

const Popup: React.FC<AppSelector> = ({isOpen, onClose, children, title}) => {

    if (!isOpen) return null;

    return (
        <div className="appSelector-overlay">
            <div className="appSelector-content">
                <div className="appSelector-header">
                    {title && <h3>{title}</h3>}
                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="appSelector-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Popup;