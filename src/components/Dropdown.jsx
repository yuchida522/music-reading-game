import React from 'react';

// const clefOptions = ['treble', 'alto', 'tenor', 'bass']
// const instrumentOptions = ['violin', 'cello', 'piano']

function Dropdown(props){
    console.log("here is props: ", props)

    return (
        <div>
            <select name="selectClefs" id="selectClefs">
                {/* {renderedOptions}; */}
                {props.value.map((option, i) => (<option key={i}>{option}</option>))}
            </select>
        </div>
    )
}

export default Dropdown;