import React from 'react'
import {Droppable, Draggable} from "react-beautiful-dnd"
function ChoresColumn({column}) {
  return (
    <Droppable droppableId = {column.name}>
      {provided => ( 
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
        {...provided.droppableProps}
        ref = {provided.innerRef}
      >
        <h2>{column.name}</h2>
        {column.chores.map(({_id,name, details, completed}, index)=>{
          return (
            <Draggable key = {_id} draggableId = {name} index = {index}>
              {provided => (
              <div
              ref ={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              >
                {name}
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