import React from 'react'
import {Droppable, Draggable} from "react-beautiful-dnd"
function ChoresColumn({column}) {
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
          return (
            <Draggable key = {_id} draggableId = {name} index = {index}>
              {provided => (
              <div
              ref ={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps} 
              >
                <h5 className = "text-light">{name}</h5>
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