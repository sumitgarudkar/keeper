import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [inputNote, setInputNote] = useState({
        title: "", content: ""
    })

    const [isExpanded, setExpanded] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setInputNote((prevVal) => {
            return ({ ...prevVal, [name]: value });
        })
    }

    function handleClick(event) {
        event.preventDefault();
        props.addNote(inputNote);
        setInputNote(() => {
            return ({ title: "", content: "" });
        });
    }

    function expand(){
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {
                    isExpanded && <input
                    name="title"
                    placeholder="Title"
                    value={inputNote.title}
                    onChange={handleChange} />
                }
                
                    
                <textarea
                    name="content"
                    placeholder="Take a Note.."
                    value={inputNote.content}
                    onChange={handleChange}
                    onClick={expand}
                    rows={isExpanded ? 3 : 1}>
                </textarea>
                <Zoom in={isExpanded}>
                    <Fab onClick={handleClick}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea;