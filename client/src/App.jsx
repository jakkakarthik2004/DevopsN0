import React, { useEffect, useState } from 'react'
import { getItems, createItem, updateItem, deleteItem } from './api'
import ItemForm from './components/ItemForm'
import ItemList from './components/ItemList'

export default function App(){
  const [items, setItems] = useState([])
  const [editing, setEditing] = useState(null)

  const load = async () => {
    const data = await getItems()
    setItems(data)
  }

  useEffect(()=>{
    load()
  }, [])

  const handleCreate = async (payload) => {
    await createItem(payload)
    await load()
  }

  const handleUpdate = async (id, payload) => {
    await updateItem(id, payload)
    setEditing(null)
    await load()
  }

  const handleDelete = async (id) => {
    if(!confirm('Delete this item?')) return
    await deleteItem(id)
    await load()
  }

  return (
    <div className="container">
      <h1>MERN CRUD</h1>
      <div className="grid">
        <div>
          <h2>Create</h2>
          <ItemForm onSubmit={handleCreate} />
        </div>
        <div>
          <h2>Items</h2>
          <ItemList items={items} onEdit={(it)=>setEditing(it)} onDelete={handleDelete} />
        </div>
      </div>

      {editing && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Item</h3>
            <ItemForm initial={editing} onSubmit={(p)=>handleUpdate(editing._id, p)} onCancel={()=>setEditing(null)} />
          </div>
        </div>
      )}
    </div>
  )
}
