import axios from 'axios'
import { useState } from 'react'
import './App.css'
import AddBtn from './components/AddBtn'
import UsersList from './components/UsersList'
import Swal from 'sweetalert2'
import UsersForm from './components/UsersForm'
import Background from './components/Background'
import Ul from './components/Ul'
import { HashRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'

function App() {
  const [users, setUsers] = useState([])
  const [add, setAdd] = useState(false)
  const [selected, setSelected] = useState(null)

  const getUsers = () => {
    axios
      .get('https://users-crud1.herokuapp.com/users/')
      .then((res) => setUsers(res.data))
  }

  const deleteModal = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#0c4a6e',
      cancelButtonText: 'No, cancel!',
      cancelButtonColor: '#7f1d1d',
      background: '#0f172a',
      color: '#d1d5db',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'The User has been deleted.',
          icon: 'success',
          background: '#0f172a',
          color: '#d1d5db',
        })
        deleteUser(id)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled',
          text: 'The user is safe',
          icon: 'error',
          background: '#0f172a',
          color: '#d1d5db',
        })
      }
    })
  }

  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then((res) => getUsers())
  }

  const select = (user) => {
    setSelected(user)
  }

  useState(() => {
    getUsers()
  }, [])

  const unSelect = () => {
    setSelected(null)
  }

  return (
    <HashRouter>
      <Background>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <div>
                <UsersList
                  users={users}
                  deleteModal={deleteModal}
                  setAdd={setAdd}
                  select={select}
                  selected={selected}
                />
                {add && (
                  <UsersForm
                    getUsers={getUsers}
                    setAdd={setAdd}
                    selected={selected}
                    setSelected={setSelected}
                    unSelect={unSelect}
                  />
                )}
                <AddBtn add={add} setAdd={setAdd} />
              </div>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
      </Background>
    </HashRouter>
  )
}

export default App
