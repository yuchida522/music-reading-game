import React from 'react'

const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
function Buttons() {
    let noteBtn
    const renderedBtns = []
    for (let i=0; i < notes.length; i++) {
        noteBtn = (<button>{notes[i]}</button>);
        renderedBtns.push(noteBtn)
    };
    return (
        <div>{renderedBtns}</div>   
    )
}
export default Buttons