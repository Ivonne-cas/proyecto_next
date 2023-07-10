'use client';
import { useState,useEffect } from "react";
import Link from "next/link";
import LoadingPage from "../loading";

async function getBooks (){
    const res =await fetch("http://localhost:3000/api/books");
    const json = await res.json();
    return json;
}
const Books =  () => {
    const [books, setBooks] = useState([]);
    const[ loading, setLoading ]= useState(true);
    const [query, setQuery] = useState("");

    useEffect(() => {
        getBooks().then((books) =>{
            console.log("useEffect");
            setBooks(books);
            setLoading(false); 
        });
    },[]);

    if (loading){ return<LoadingPage />} 
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res= await fetch(`/api/books/search?query=${query}`);
        const books = await res.json();
        setBooks(books);
        setLoading(false);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search books..." value={query} onChange={(e) => setQuery(e.target.value)} className="input input-bordered input-secondary w-full max-w-xs" />
            <button type="submit" className="btn btn-primary">Search</button>
            </form>
            {books.map((book) => (
                <div key={book.id} >
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img src={book.img} width="200" height="150"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{book.id}</h2>
                            <p>{book.title}</p>
                            <div className="card-actions justify-end">
                                <Link href={book.link} className="btn btn-primary">see in Amazon</Link>                        </div>
                        </div>
                    </div>
                    <br />
                </div>
            ))}   
        </div>
    )
}
export default Books;