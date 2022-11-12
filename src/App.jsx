import axios from 'axios'
import { useState } from 'react'
import './App.css'
import AddBtn from './components/AddBtn'
import UsersList from './components/UsersList'
import Swal from 'sweetalert2'
import UsersForm from './components/UsersForm'

function App() {
  const [users, setUsers] = useState([])
  const [add, setAdd] = useState(false)

  const getUsers = () => {
    axios
      .get('https://users-crud1.herokuapp.com/users/')
      .then((res) => setUsers(res.data))
  }

  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then((res) => getUsers())
  }

  useState(() => {
    getUsers()
  }, [])

  // console.log(add)

  return (
    <div
      className={`min-h-screen relative bg-gradient-to-b from-gray-900 p-3 to-gray-800 overflow-hidden  ${
        add && 'overflow-y-hidden'
      }`}
    >
      <UsersList users={users} deleteUser={deleteUser} />
      {add && <UsersForm getUsers={getUsers} setAdd={setAdd} />}
      <AddBtn add={add} setAdd={setAdd} />
    </div>
  )
}

export default App
