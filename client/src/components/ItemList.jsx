import React from 'react'

export default function ItemList({ items, onEdit, onDelete }){
  if(!items || items.length===0) return <div>No items yet</div>
  return (
    <div>
      <ul className="items">
        {items.map(item => (
          <li key={item._id}>
            <div className="item-head">
              <strong>{item.title}</strong>
              <div className="actions">
                <button onClick={()=>onEdit(item)}>Edit</button>
                <button onClick={()=>onDelete(item._id)}>Delete</button>
              </div>
            </div>
            {item.description && <p>{item.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  )
}
