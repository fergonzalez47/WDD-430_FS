import { useState } from "react"


export function NewTodoForm({onSubmit}) {

    const [newItem, setnewItem] = useState("");


    function henadleSubmit(e) {
        e.preventDefault();

        if (newItem === "") return
        

        onSubmit(newItem);
        //This is for cleanning the input
        setnewItem("");
    }


    return (
        <form onSubmit={henadleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New item</label>
                <input type="text" id="item" onChange={e => setnewItem(e.target.value)} value={newItem} />
            </div>
            <button className="btn">Add</button>
        </form>)
}