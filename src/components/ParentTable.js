import React from 'react'

const ParentTable = () => {
  const tableData = [
    {
      studentNo: 24,
      admissionClass: '3rd',
      vehicleId: 1,
      studentName: 'vysh3',
      mobile: '+917012962320',
      email: 'sinu.jamal@zaeemsolutions.com',
      admissionDate: '12-02-2022'
    }
  ];

  return (
    <table className="rounded-lg mr-5">
      <thead className="rounded-lg ">
        <tr className="bg-gray-100 rounded-lg text-gray-600 text-sm h-11 pr-3">
          <th className='font-medium rounded-l-lg pr-2 pl-3'>Students No</th>
          <th className='font-medium pr-3'>Admission Class</th>
          <th className='font-medium pr-4'>Vehicle Id</th>
          <th className='font-medium pr-4'>Student Name</th>
          <th className='font-medium pr-9'>Mobile</th>
          <th className='font-medium pr-40'>Email</th>
          <th className='font-medium rounded-r-lg pl-2 pr-3 mr-5'>Admission Date</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => (
          <tr key={index} className='font-medium text-sm align-justify font-sans h-10'>
            <td className='pr-6 pl-4'>{data.studentNo}</td>
            <td>{data.admissionClass}</td>
            <td>{data.vehicleId}</td>
            <td>{data.studentName}</td>
            <td className='pl-4'>{data.mobile}</td>
            <td className='pl-4'>{data.email}</td>
            <td className='pl-4'>{data.admissionDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ParentTable;