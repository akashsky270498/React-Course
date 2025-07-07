import { createPortal } from "react-dom";

const Modal = ({ isOpen, setIsOpen, header, footer, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      onClick={() => setIsOpen(false)}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 ${isOpen ? "" : "hidden"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md grow rounded-2xl bg-white p-6 shadow-xl transition-all"
      >
        {header}
        <div className="mx-4 my-3 flex flex-wrap gap-4 border-y px-4 py-4">
          {children}
        </div>
        {footer}
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
