import React from 'react';

const clefOptions = ['treble', 'alto', 'tenor', 'bass']

function Dropdown(){
    let clefOption;
    const renderedOptions = [];
    for (let i=0; i < clefOptions.length; i++) {
        clefOption = (
        <option value="{clefOptions[i]}">{clefOptions[i]}</option>
        );
        renderedOptions.push(clefOption);
    };

    return (
        <div>
            <select name="selectClefs" id="selectClefs">
                {renderedOptions};
            </select>
        </div>
    )
}

export default Dropdown;