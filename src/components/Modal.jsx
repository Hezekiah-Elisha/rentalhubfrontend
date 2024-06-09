// src/Modal.js
import PropTypes from 'prop-types';


const Modal = ({ title, content, isVisible, onClose }) => {
    if (!isVisible) return null;
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-950 bg-opacity-75">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="mb-4">{content}</p>
                <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">
                    Close
                </button>
            </div>
        </div>
    );
    };
    Modal.propTypes = {
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        isVisible: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
    };
    
export default Modal;