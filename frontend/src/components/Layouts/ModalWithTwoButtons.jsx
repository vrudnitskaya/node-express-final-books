import Modal from "react-modal";
import React from "react";

Modal.setAppElement("#root");

const ModalWithTwoButtons = ({ isOpen, onClose, onConfirm, title, children, confirmText, cancelText }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="bg-pureWhite p-6 rounded-md shadow-lg max-w-lg w-full mx-auto my-12 relative"
            overlayClassName="fixed inset-0 bg-beige bg-opacity-50 flex items-center justify-center"
        >
            <button
                onClick={onClose}
                className="absolute top-2 right-2 text-black hover:text-red"
            >
                ✕
            </button>
            {title && <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>}
            <div className="text-center">{children}</div>
            <div className="mt-6 flex justify-center gap-4 text-pureWhite font-medium">
                <button
                    onClick={onConfirm}
                    className="px-4 py-2 bg-lightRed  rounded-md hover:bg-red w-1/3 uppercase"
                >
                    {confirmText}
                </button>
                <button
                    onClick={onClose}
                    className="px-4 py-2 bg-mustard rounded-md hover:bg-amber-500 w-1/3 uppercase"
                >
                    {cancelText}
                </button>
            </div>
        </Modal>
    );
};

export default ModalWithTwoButtons;
