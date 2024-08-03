import React from 'react';

const Pagination = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {
    
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages === 1) return null;

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (    
        <nav className='text-center'>
            <ul className="inline-flex -space-x-px text-sm">
                <li>
                    <button 
                        onClick={handlePreviousPage} 
                        className="flex items-center justify-center px-3 h-9 ms-0 bg-white border border-e-0 border-gray-400 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index}>
                        <button 
                            onClick={() => onPageChange(index + 1)} 
                            className={`flex items-center justify-center px-3 h-9 ${currentPage === index + 1 ? 'text-blue-600 border bg-blue-50' : 'bg-white border hover:bg-gray-100 hover:text-gray-700'}`}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li>
                    <button 
                        onClick={handleNextPage} 
                        className="flex items-center justify-center px-3 h-9 bg-white border border-gray-400 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;