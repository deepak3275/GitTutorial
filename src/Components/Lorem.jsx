import React from 'react'
import { useState } from "react"
import Loremdata from './Loremdata'

const Lorem = () => {

    const [count, setCount] = useState(1);
    const [text, SetText] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault()
        let amount = parseInt(count);
        SetText(Loremdata.slice(0, amount))
    }

    return (
        <section className="section-center">
            <h4>tired of boring lorem ipsum?</h4>
            <form className="lorem-form" onSubmit={handleSubmit}>
                <label htmlFor="amount">paragraphs:</label>
                <input
                type='number'
                name='amount'
                id='amount'
                min='1'
                step='1'
                max='8'
                value={count}
                onChange={(e) => setCount(e.target.value)}
                />
                <button className='btn' type='submit'>
                    generate
                </button>
            </form>
            <article className='lorem-text'>
                {text.map((item, index) => {
                    return <p key={index}>{item}</p>;
                })}
            </article>
        </section>
    )
}

export default Lorem;
