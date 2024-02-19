import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './Task.css'
export const Task = () => {
    const  [task,setTask]=useState('')
    const navigate=useNavigate()
    const {id}=useParams()

    useEffect(()=>{
        const task=JSON.parse(localStorage.getItem('todos'));
        const currentTask=task.find(task=>task.id===id)
        setTask(currentTask);
    },[])

    

  return (
    <div className='container'>
        <h2 className='todo-title_back'>
            {task.name}
        </h2>

        <Link to='/tasks' className='link-back'>
            Go Back
        </Link>
    </div>
  )
}
