import React,{useEffect, useState} from 'react'
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"

export default function Chores() {
const [chores, setChores] = useState([])

useEffect(()=>{
  setChores(example)
},[])

const handleDragEnd = (result)=>{
  const items = Array.from(chores);
  const [reorderedItem] = items.splice(result.source.index, 1);
  items.splice(result.destination.index, 0 ,reorderedItem);
  setChores(items);
}

const example = [{
  _id: "12321asd",
  user_id: "2342351ad123asd",
  name: "Clean Dishes",
  details: "",
  completed: false,
},
{
  _id: "123123",
  user_id: "123asd2asd2",
  name: "Take out trash",
  details: "",
  completed:true,
},
{
  _id:"1asdf3asf",
  user_id: "123asd8asd82",
  name:"Clean Washroom",
  details: "",
  completed:false,
}]
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="chores">
        {(provided)=>
          (<ul {...provided.droppableProps} className = "chores list-group" ref = {provided.innerRef}>
          {chores.map(({_id, user_id, name, details,completed}, index)=>{
            return(
              <Draggable key = {_id} draggableId={_id} index ={index}>
                {(provided)=>( 
                  <li className = "list-group-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                    <h5>{name}</h5>
                  </li>)}
              </Draggable>
            )
          })}
          {provided.placeholder}
        </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}
