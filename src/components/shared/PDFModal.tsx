import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useAnalytics } from "@/hooks/useAnalytics";

interface PDFModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    pdfPath: string;
}

const PDFModal = ({ isOpen, onClose, title, pdfPath }: PDFModalProps) => {
    const { trackDocumentAction } = useAnalytics();
    const fileName = pdfPath.split("/").pop() ?? "";

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const modalContent = (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-0 sm:p-4"
            onClick={onClose}
        >
            <div
                className="bg-white w-full h-full sm:w-full sm:max-w-6xl sm:h-[90vh] sm:rounded-lg shadow-2xl flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex-1 min-h-0 relative bg-gray-100">
                    <iframe
                        src={`${pdfPath}#toolbar=1&navpanes=0&scrollbar=1&zoom=page-width`}
                        className="absolute inset-0 w-full h-full border-0"
                        title={title}
                    />
                </div>

                <div className="bg-gray-50 px-3 py-3 sm:px-6 sm:py-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3 sm:rounded-b-lg border-t shrink-0">
                    <a
                        href={pdfPath}
                        download
                        onClick={() => trackDocumentAction("download", fileName)}
                        className="text-esn-dark-blue hover:text-blue-900 active:text-blue-800 font-bold text-xs sm:text-sm uppercase flex items-center justify-center gap-2 transition py-2 px-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 touch-manipulation"
                    >
                        <svg
                            className="w-4 h-4 sm:w-4 sm:h-4 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        <span>Download PDF</span>
                    </a>
                    <button
                        onClick={onClose}
                        className="px-4 py-3 sm:py-2 bg-esn-dark-blue text-white font-bold font-display rounded-lg hover:bg-blue-900 active:bg-blue-950 transition uppercase text-xs sm:text-sm touch-manipulation"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default PDFModal;