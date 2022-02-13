import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material'
import Todo from '../components/Todo'
import db from '../firebase'
import { collection, getDocs, addDoc, deleteDoc, doc, getDoc } from 'firebase/firestore'

// Create input an button
// Create List
// Create useState and add todos into it

export default function Main() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const addTodo = (e) => {
        e.preventDefault()
        // setTodos([...todos, input])
        const colRef = collection(db, 'todos');
        addDoc(colRef, { todo : input })
            .then(res => {
                console.log('result', res)
                setTodos([...todos, {todo : input, id: res.id}])
            })
        setInput('')
    }

    const deleteItem = (id) => {
        const docRef = doc(db, 'todos', id)
        deleteDoc(docRef)
        .then(() => {
            let filteredTodos = todos.filter(todo => todo.id != id)
            setTodos(filteredTodos)
        })
    }

    //console.log(todos)
    const getTodos = async (db) => {
        let todos = []
        const colRef = collection(db, 'todos');
        const todoSnapshot = await getDocs(colRef)
        console.log(todoSnapshot)

        todoSnapshot.docs.forEach(doc => {
            todos.push({...doc.data(), id: doc.id})
        })
        console.log('returned data', todos)

        setTodos(todos)
    }

    useEffect(() => {
        getTodos(db)
    },[])

    return (
        <div>
            <h1> TO DO APP </h1>
            <form onSubmit={addTodo}>
                <TextField value={input} onChange={handleInputChange} id="outlined-basic" label="Outlined" variant="outlined" />
                <Button disabled={!input} type="submit" onClick={addTodo} variant="contained">Add Todo</Button>
            </form>

            <ul>
                {
                    todos.map((obj) => {
                        return <Todo id={obj.id} deleteItem={deleteItem} todo={obj.todo}/>
                    })
                }
            </ul>
        </div>
    )
}
