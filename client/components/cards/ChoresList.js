import React,{useEffect, useState} from 'react'
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"
import ChoresColumn from './ChoresColumn'
import axios from "axios"
export default function Chores({choresObject}) {
const [columns, setColumns] = useState([]);

useEffect(()=>{
  setColumns(choresObject);
},[])

//function to update the chores array when moved in the drag and drop
const onDragEnd = async ({ source, destination }) => {
  // Make sure we have a valid destination
  if (destination === undefined || destination === null) return null

  // Make sure we're actually moving the item
  if (
    destination.index === source.index &&
    source.droppableId === destination.droppableId
  )
  {return null}
  
  const start =  columns.filter((column)=> {return String(source.droppableId) == String(column.name)})
  const end = columns.filter((column)=>{return String(destination.droppableId) == String(column.name)})

  const choreToUpdate = start[0].chores[source.index];

  if (JSON.stringify(start) === JSON.stringify(end)){
    
    const chores = Array.from(start[0].chores)
    const [newChore] = chores.splice(source.index, 1);  
    chores.splice(destination.index, 0 , newChore);
    const newCol={
      name: start[0].name, 
      chores: chores,
    }
    const newColumns = Array.from(columns);
    newColumns[newColumns.findIndex((element)=>{return(String(element.name) == String(newCol.name))})] = newCol;
    setColumns(newColumns);
  } 
  else{
    const newStartChores = start[0].chores.filter((chore)=>{return String(chore.name) !== String(start[0].chores[source.index].name)});
    const newStartCol = {
      name: start[0].name,
      chores: newStartChores
    }
    const newEndChores = end[0].chores;
    newEndChores.splice(destination.index, 0 ,start[0].chores[source.index])
    const newEndCol= {
      name: end[0].name,
      chores: newEndChores,
    }
    const newColumns = Array.from(columns);
    newColumns[newColumns.findIndex((element)=>{return(String(element.name) == String(newStartCol.name))})] = newStartCol;
    newColumns[newColumns.findIndex((element)=>{return(String(element.name) == String(newEndCol.name))})] = newEndCol;
    setColumns(newColumns);
  }
  
  const response = await axios.put(`/update-chore`,{
    chore: choreToUpdate,
    new_user_id: end[0].user_id,
  })
  return null;
}

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 2fr 2fr',
          margin: '24px auto',
          width: '90%',
          gap: '8px'
        }}
      >
        {columns && columns.map((column, index)=>{
          return(
          <div>
            <ChoresColumn column = {column} index = {index}/>
          </div>
          )}
        )}
      </div>
    </DragDropContext>

  )
}
