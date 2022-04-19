import React,{useEffect, useState} from 'react'
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"
import ChoresColumn from './ChoresColumn'
export default function Chores() {
const [columns, setColumns] = useState([])

useEffect(()=>{
  setColumns(exampleColumns)
},[])
const onDragEnd = ({ source, destination }) => {
  console.log(source, destination)
  // const items = Array.from(columns);
  // Make sure we have a valid destination
  if (destination === undefined || destination === null) return null

  // Make sure we're actually moving the item
  if (
    destination.index === source.index &&
    source.droppableId === destination.droppableId
  )
    return null
  
  const start = columns[source.droppableId]
  const end = columns[destination.droppableId]
  console.log(start, end)
  if (start === end){
    const newChores = start.chores.splice(source.index, 1);  
    newChores.splice(destination.index, 0 ,start.chores[source.index])
    const newCol={
      name: start.name, 
      chores: newChores,
    }
    // Move the item within the list
    // Start by making a new list without the dragged item
    setColumns(...columns, newCol);
    return null
    }
  return null;
}

const handleDragEnd = (result)=>{
   console.log(result.source, result.destination)
  // const items = Array.from(chores);
  // const [reorderedItem] = items.splice(result.source.index, 1);
  // items.splice(result.destination.index, 0 ,reorderedItem);
  // setChores(items);
}

const exampleColumns = [
  { 
    name: "Julie",
    chores: [{
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
  },
  {
    name: "Nick",
    chores: []
  },
  {
    name: "Sarah",
    chores: []
  },
  {
    name: "Ron",
    chores:[]
  }
]
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          margin: '24px auto',
          width: '80%',
          gap: '8px'
        }}
      >
        {columns.map((column)=>{
          return(
          <div>
            <ChoresColumn column = {column}/>
          </div>
          )}
        )}
        
      </div>
    </DragDropContext>
    // <DragDropContext onDragEnd={handleDragEnd}>
    //   <Droppable droppableId="chores">
    //     {(provided)=>
    //       (<ul {...provided.droppableProps} className = "chores list-group" ref = {provided.innerRef}>
            
    //       {chores.map(({_id, user_id, name, details,completed}, index)=>{
    //         return(
    //           <Draggable key = {_id} draggableId={_id} index ={index}>
    //             {(provided)=>(  
                  
                  
    //                <li className = "list-group-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
    //                  <h5>{name}</h5>
    //                </li>
    //               )}
    //           </Draggable>
    //         )
    //       })}
    //       {provided.placeholder}
    //     </ul>
    //     )}
    //   </Droppable>
    // </DragDropContext>
  )
}
