import React, { useState } from "react";
import styles from "./toDoList.module.css";


// export const BookList = () => {
const toDoList = () => {

    const toDoList = [
        "I need to complete my homework",
        "Clean one room in my house",
        "Complete a long-term project",
        "Read a new book"
    ];

    const [lists, setlists] = useState(toDoList);
    const [newBook, setNewBook] = useState();
    const [searchBookValue, setSearchBookValue] = useState("");
    // console.log(lists)
    // console.log(newBook)
    
    const deleteHandler = (removeBook) =>{
        setlists(lists.filter((book)=> book !== removeBook))
        // toDoList.filter((book) => book !== removeBook)

        console.log(removeBook)
    }

    

    const collectBookTitle = (e) => {
        setNewBook(e.target.value.trim())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newBook){
            setlists(prevBook => [...prevBook, newBook])
            // setlists([...lists, newBook]) // bad approach

        }


    // const[] = useState(toDoList)
    }

    const handleFilterlists = (e) => {
        let searchValue = e.target.value.toLowerCase();
        // setFilteredlists(filteredlists);
        setSearchBookValue(searchValue)
        console.log(filteredlists)
    }

    const filteredlists = lists.filter((book)=> book.toLowerCase().includes(searchBookValue));


    return(
        <div id={styles.wrapper}>
            <header>
                <div id={styles.pageBanner}>
                    <h1 className={styles.title}> Book Collections</h1>
                    <p>lists</p>
            <form id={styles.searchlists}>
                <input type="text" placeholder="Search lists..." onKeyUp={handleFilterlists}/>
            </form>
                </div>
            </header>


            <div id={styles.toDoList}>
                <h2 className={styles.title}>lists to Read</h2>
                <ul>    
                    {
                        filteredlists.map((book, index)=>(
                            <li key={index}>
                                <span className={styles.name}>{book}</span>
                                <span className={styles.delete} onClick={()=> deleteHandler(book)}>delete</span>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>

            <form onSubmit={handleSubmit} id={styles.addBook}>
                <input type="text" placeholder="Add a book..." onChange={collectBookTitle}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default toDoList;