import React, { useState } from 'react';
import "./form.css";

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [hobby, setHobby] = useState('');
    const [tables, setTables] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ name, email, phone, gender, hobby });
        const newTables = { name, email, phone, gender, hobby };
        setTables([...tables, newTables]);
        setName('');
        setEmail('');
        setPhone('');
        setGender('');
        setHobby('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input
                        type='text'
                        name='name'
                        id='name'
                        autoComplete='name'
                        value={name}
                        onChange={(e) => setName(e.target.value.replace(/[^a-zA-Z]/, ''))}
                        placeholder='Enter the name'
                        required
                    />
                </label>

                <label>Email:
                    <input
                        type='email'
                        name='email'
                        id='email'
                        autoComplete='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter the email'
                        required
                    />
                </label>

                <label>Phone:
                    <input
                        type='text'
                        name='phone'
                        id='phone'
                        autoComplete='text'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/, '').slice(0, 10))}
                        placeholder='Enter the phone'
                        required
                    />
                </label>

                <label>Gender</label>
                    <label>Male
                        <input
                            type='radio'
                            name='gender'
                            id='male'
                            value='male'
                            checked={gender === 'male'}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        />
                    </label>

                    <label>Female
                        <input
                            type='radio'
                            name='gender'
                            id='female'
                            value='female'
                            checked={gender === 'female'}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        />
                    </label>

                <label>Hobby </label>
                <div className="hobby-options">
                    <input
                        type='checkbox'
                        name='hobby'
                        id='Photography'
                        value='Photography'
                        // onChange={(e) => setHobby(e.target.value)}
                    />  Photography:

                    <input
                        type='checkbox'
                        name='hobby'
                        id='Gardening'
                        value='Gardening'
                        // onChange={(e) => setHobby(e.target.value)}
                    /> Gardening:

                    <input
                        type='checkbox'
                        name='hobby'
                        id='Cooking'
                        value='Cooking'
                        // onChange={(e) => setHobby(e.target.value)}
                    /> Cooking:
                </div>

                <button type='submit'>Submit</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Hobby</th>
                    </tr>
                </thead>
                <tbody>
                    {tables.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.name}</td>
                            <td>{entry.email}</td>
                            <td>{entry.phone}</td>
                            <td>{entry.gender}</td>
                            <td>{entry.hobby}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Form;

