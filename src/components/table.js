import React from 'react';


const Table = ({ data }) => {

    if (!data || data.length === 0) {
        return <span>No data available</span>;
    }

    return (
        <table className='w-full table-fixed border-collapse rounded-s-lg mb-5'>
            <thead>
                <tr>
                <th className='bg-blue-100 border border-gray-400 p-2 text-center ellipsis'>Flag</th>
                <th className='bg-blue-100 border border-gray-400 p-2 text-center ellipsis'>ID</th>
                <th className='bg-blue-100 border border-gray-400 p-2 text-center ellipsis'>Name</th>
                <th className='bg-blue-100 border border-gray-400 p-2 text-center ellipsis'>Capital</th>
                <th className='bg-blue-100 border border-gray-400 p-2 text-center ellipsis'>Population</th>
                </tr>
            </thead>
            <tbody>
                {data.map((city, index) => (
                    <tr key={index}>
                        <td className='border border-gray-400 p-2 text-center align-middle'>
                            <img className='inline-block object-cover h-5 w-6 align-middle' src={city.flags.svg} alt='Flag'/>
                        </td>
                        <td className='border border-gray-400 p-2 text-center'>{city.cca2}</td>
                        <td className='border border-gray-400 p-2 ellipsis'>{city.name.common}</td>
                        <td className='border border-gray-400 p-2 ellipsis'>{city.capital}</td>
                        <td className='border border-gray-400 p-2 ellipsis'>{city.population}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;