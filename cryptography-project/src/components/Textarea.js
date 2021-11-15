import React from 'react'

function Textarea() {
    const textSubmitted = (e) => {
        console.log(e.target.value)
    }
    return (
        <div>
            <div class="form-group" onSubmit="textSubmitted">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                <input type='submit' value='Submit' className='btn btn-primary btn-block mt-4' />
            </div>
        </div>
    )
}

export default Textarea;
