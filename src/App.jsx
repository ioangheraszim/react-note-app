import { useState } from 'react'
import Editor from "./components/Editor"
import Sidebar from "./components/Sidebar"
import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"

function App() {
      const [notes, setNotes] = useState([])
      const [currentNoteId, setCurrentNoteId] = useState (notes[0] && notes[0].id || "")
      return (
        <main>
          <Editor />
          <Sidebar />
        </main>
      )
}

export default App
