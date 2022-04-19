import React from 'react'
import {Droppable, Draggable} from "react-beautiful-dnd"
function ChoresColumn({chores}) {
  return (
    <Droppable droppableId = "col-1">
      {provided => ( 
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
        {...provided.droppableProps}
        ref = {provided.innerRef}
      >
        {chores.map(({_id,name, details, completed}, index)=>{
          return (
            <Draggable key = {_id} draggableId = {_id} index = {index}>
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