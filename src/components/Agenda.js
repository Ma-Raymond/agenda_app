import React from 'react'
import { HiX } from "react-icons/hi";
import './Agenda.css';
function Agenda({itemsFound, removeItem}) {



    
  return (
    <>
    <div>
        {itemsFound.map((item,index) => (
            <div className='task'>
                <div className='whoa-item' >
                <div key={item.id}></div>
                {item.text}
                </div>
                <div className='icons' onClick={() =>{
                    removeItem(item.id)}}>
                    <HiX className='deleteButton'/>
                </div>
            </div>
            
        ))} 
        
        </div>
    </>
    
  )
}

export default Agenda