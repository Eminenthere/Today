import React from 'react'
import '../styles/AddTask.css'
import { WriteSVG } from '../assets/dynamicSVG'
import AddBtn from './AddBtn'

const AddTask = () => {
  return (
    <form className='add-task'>
      <WriteSVG />
      <input type='text' placeholder='Create a task' />
      <AddBtn />
    </form>
  )
}

export default AddTask
