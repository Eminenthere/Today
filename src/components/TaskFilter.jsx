import React from 'react'
import { ArrowIcon } from '../assets'
import '../styles/TaskFilter.css'
import Filter from './Filter'

const TaskFilter = () => {
  return (
    <div className='task-filter'>
      <img src={ArrowIcon} alt='Arrow Icon' />
      <span>Pending (3)</span>
      <Filter />
    </div>
  )
}

export default TaskFilter
