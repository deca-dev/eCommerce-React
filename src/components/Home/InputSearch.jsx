import React from 'react'
import { useForm } from 'react-hook-form'
import './style/inputSearch.css'

const InputSearch = () => {

  const {handleSubmit, register, reset} = useForm()

  const submit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='form-home'>
      <input className='input-bar' placeholder='What are you looking for...?' type="text" {...register('searchText')} />
      <button className='input-bar-button'><i className="fa-solid fa-magnifying-glass"></i></button>
    </form>
  )
}

export default InputSearch