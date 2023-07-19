import React from 'react'
import '../styles/AddBtn.css'
import { AddIcon } from '../assets'

const AddBtn = () => {
  return (
    <button>
      <img src={AddIcon} alt='Add Button' />
    </button>
  )
}

export default AddBtn
