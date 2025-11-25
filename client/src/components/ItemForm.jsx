import React, { useState, useEffect } from 'react'

export default function ItemForm({ initial, onSubmit, onCancel }){
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(()=>{
    if(initial){
      setTitle(initial.title || '')
      setDescription(initial.description || '')
    }
  }, [initial])

  const submit = (e) =>{
    e.preventDefault()
    if(!title) return alert('Title required')
    onSubmit({ title, description })
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={submit} className="form">
      <label>Title</label>
      <input value={title} onChange={e=>setTitle(e.target.value)} />
      <label>Description</label>
      <textarea value={description} onChange={e=>setDescription(e.target.value)} />
      <div className="actions">
        <button type="submit">Save</button>
        {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  )
}
