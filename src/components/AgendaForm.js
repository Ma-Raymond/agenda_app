import React, {useState} from 'react'

import './Agenda.css'
function AgendaForm(props) {
    // This is for the input change state
    const [input, setInput] = useState('')
    
    const handleChange = e => {
        setInput(e.target.value)
        console.log('Shut up')
    }
    const handleSubmit = e => {
        // This will help it from stop refreshing lol
        e.preventDefault();

        // Refer to discord, this is like the props.name but instead its 
        // addItems goes into here and uses theses parameters for poop
        props.poop({
            id: Math.round(Math.random() * 10000),
            text: input
        });

        
        setInput('')

    }
  return (
    // Creates a form
        <form className='agenda-form' onSubmit={handleSubmit}>
            <input placeholder='Add Item' value={input}
            name='text'
            className='agenda-input'
            onChange={handleChange}
            />
            <button className='agenda-button'>+</button>
        </form>
    )
}

export default AgendaForm