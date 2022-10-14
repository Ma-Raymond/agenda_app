import React,{useState} from 'react'
import Agenda from './Agenda'
import AgendaForm from './AgendaForm'

function AgendaList() {

    const [items, setItems] = useState([])

    const addItem = item => {
        console.log(item)
         if (!item.text){
            return
         }

         // Is this an array lol
         const newItems = [item,...items]
         setItems(newItems)
         console.log(...items)
    }
    const removeItem = itemid => {
        const removedList = [...items].filter(item => item.id !== itemid)
        setItems(removedList)
    }

  return (
    <div>
        <AgendaForm poop={addItem}/>
        <Agenda itemsFound={items} removeItem={removeItem}/>
    </div>
  )
}

export default AgendaList