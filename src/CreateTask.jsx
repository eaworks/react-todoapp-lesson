import React, { useState } from 'react'

export default function CreateTask() {
    const [task, setTask] = useState({
        title: '',
        content: ''
    })
    function detectChange(event) {
        console.log(event.target.value);
    }
    return (
        <div className='todoDivArea'>
            <form className='todoDiv'>
                <input type="text" value={task.title} onChange={detectChange} className='form-control todoText mb-3' name='title' placeholder='Başlık' />
                <textarea name="content" value={task.content} onChange={detectChange} className='form-control todoText mb-3' rows={3} placeholder='işinizi yazınız'></textarea>
                <button className='btn btn-primary todoButton'>Ekle</button>
            </form>
        </div>
    )
}
