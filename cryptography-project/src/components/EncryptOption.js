import React from 'react'

function EncryptOption() {

    const algoSelect = (e) => {
        if(e.target.checked === false){
            // alert('Select Algorithm For Incryption')
            console.log('Select Algorithm')
            // console.log(e.target)
        }else{
            if(e.target.id === 'choice1'){
                console.log("Symmetric")
            }else if(e.target.id === 'choice2'){
                console.log("Assymmetric")
            }
        }
    }

    return (
        <div className='d-flex flex-column  align-self-center m-5'>
            <div className='m-1 d-flex align-self-center'>
                <h3>
                  <input type='checkbox' className='p-2' id='choice1' onChange={algoSelect} />
                    Symmetric
                </h3>
            </div>
            <div className='m-1'>
                <h3>
                    <input className='p-2' type='checkbox' id='choice2' onChange={algoSelect} />
                    Assymmetric
                </h3>
            </div>
        </div>
    )
}

export default EncryptOption
