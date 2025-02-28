import React from 'react'

const User = () => {
    const users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '555-1234',
            image: 'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0',
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            phone: '555-5678',
            image: 'https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU',
        },
        {
            id: 3,
            name: 'David Lee',
            email: 'david.lee@example.com',
            phone: '555-9012',
            image: 'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=mail@ashallendesign.co.uk',
        },
        {
            id: 4,
            name: 'Adarsh Rajan',
            email: 'sarah.jones@example.com',
            phone: '555-3456',
            image: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
        },
        {
            id: 5,
            name: 'Michael Brown',
            email: 'michael.brown@example.com',
            phone: '555-7890',
            image: 'https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk',
        },
    ];

    console.log(users);
    return (
        <div>

            <table width={'100%'}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Image</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <img src={user.image} alt={user.name} width="50" height="50" />
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default User
