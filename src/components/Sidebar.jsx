import React from "react"

function Sidebar(props) {
    return (
        <div>
            <div className={`title${note.id === props.currentNote.id ? "selected-note" : ""}`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">Note {index + 1}</h4>
            </div>
        </div>
    )
}

export default Sidebar;