import React, { useState } from 'react';
import {FaWindowClose} from 'react-icons/fa';


const ListAssignment = ({ peoplelist }) => {
    const [data, setData] = useState(peoplelist);
    const deleteData = (id) => {
        let newData = data.filter((people) => { return people.id !== id })
        setData(newData);
    }
    return (
        <>
            <h3>{data.length} birthdays today</h3>
            {data.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <article key={id} className='person'>
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                        <button onClick={() => deleteData(id)} id={id}>Ignore</button>
                    </article>
                );
            })}
            <button onClick={() => setData([])}>Ignore all</button>
        </>
    );
};

export default ListAssignment;
