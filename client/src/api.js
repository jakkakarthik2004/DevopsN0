import axios from 'axios'

const API = axios.create({ baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:5000/api' })

export async function getItems(){
  const res = await API.get('/items')
  return res.data
}
export async function createItem(payload){
  const res = await API.post('/items', payload)
  return res.data
}
export async function updateItem(id, payload){
  const res = await API.put(`/items/${id}`, payload)
  return res.data
}
export async function deleteItem(id){
  const res = await API.delete(`/items/${id}`)
  return res.data
}
