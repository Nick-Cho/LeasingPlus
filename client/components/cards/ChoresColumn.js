import axios from 'axios'
import {useState} from 'react'
import {Droppable, Draggable} from "react-beautiful-dnd"
import {CloseOutlined} from '@ant-design/icons'
import Chore from './Chore.js'
function ChoresColumn({column}) {

const [choreId, setChoreId] = useState();
// const [check, setCheck] = useState();
  return (
    <Droppable droppableId = {column.name}>
      {provided => ( 
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: "10px",
          
        }}
        className = "bg-dark p-3"
        {...provided.droppableProps}
        ref = {provided.innerRef}
      >
        <h2 className = "text-light font" >{column.name}</h2>
        {column.chores.map(({_id,name, details, completed}, index)=>{
          setChoreId(_id);
          return (
            
            <Draggable key = {_id} draggableId = {name} index = {index}>
              {provided => (
              <div className = ""
                ref ={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps} 
              >
                <Chore name={name} completed = {completed} _id = {_id}/>                
              </div>)}
            </Draggable>
          )
        })}
        {provided.placeholder}
      </div>)}
    </Droppable>
  )
}

export default ChoresColumn