import React, { Fragment } from 'react';

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
        <Fragment>
            <div className="flex flex-1 justify-between sm:hidden">
                <button onClick={handlePreviousPage} className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">Previous</button>
                <button onClick={handleNextPage} className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">Next</button>
            </div>
        <nav className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-center'>
            <ul className="inline-flex -space-x-px">
                <li>
                    <button
                        onClick={handlePreviousPage}
                        className="flex items-center justify-center px-3 h-9 ms-0 bg-white border border-gray-400 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index}>
                        <button
                            onClick={() => onPageChange(index + 1)}
                            className={`flex items-center justify-center px-3 h-9 ${currentPage === index + 1 ? 'text-blue-600 border border-gray-400 bg-blue-50' : 'border border-gray-400 hover:bg-gray-100 hover:text-gray-700'}`}
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
        </Fragment>
    );
};

export default Pagination;