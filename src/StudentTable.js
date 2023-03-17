import React, { useState } from 'react';

const StudentTable = () => {
    const [studentList, setStudentList] = useState([
        {
            id: 1,
            firstName: 'yalda',
            lastName: 'fathi',
            age: 60,
            birthdate: '1959-01-01',
            country: 'Iran',
            city: 'Tehran'
        },
        {
            id: 2,
            firstName: 'Azadeh',
            lastName: 'noamani',
            age: 38,
            birthdate: '1984-01-01',
            country: 'Iran',
            city: 'Tehran'
        },
        {
            id: 3,
            firstName: 'Artina',
            lastName: 'Razbani',
            age: 8,
            birthdate: '2015-01-01',
            country: 'Iran',
            city: 'tehran'
        }
    ]);

    const TableHeader = () => {
        return (
            <thead  >
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Birthdate</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Action</th>
                </tr>
            </thead>
        );
    };

    const TableAction = ({ id }) => {
        const handleDelete = () => {
            setStudentList(studentList.filter((student) => student.id !== id));
        };

        return (
            <td>
                <button onClick={handleDelete}>Delete</button>
            </td>
        );
    };

    const TableRow = () => {
        return (
            <tbody>
                {studentList.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.age}</td>
                        <td>{student.birthdate}</td>
                        <td>{student.country}</td>
                        <td>{student.city}</td>
                        <TableAction id={student.id} />
                    </tr>
                ))}
            </tbody>
        );
    };

    return (
        <table>
            <TableHeader />
            <TableRow />
        </table>
    );
};

export default StudentTable;