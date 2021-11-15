import React, { Fragment, useState } from 'react'
import EncryptOption from './EncryptOption';
// import axios from 'axios'
// import express from 'express'
// const appp = express()


function FileUpload() {

    const [file, setFile] = useState();
    // const [fileName, setFileName] = useState('Choose Files')
    const [uploaded, setUploaded] = useState(false);

    const onChange = (e) => {
        console.log(e.target.files[0])
        // setFileName(e.target.files[0].name);
        // setFile()
        setFile(e.target.files[0])
        setUploaded(true);
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file)
        console.log(formData)
        // FormData.bind('file',file)
        // http://localhost:3000/http://localhost:3001/upload

        // try{
            // const res = await 
            fetch(
                'http://localhost:3001/upload', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((result) => {
                    console.log('Success:', result);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            // console.log(res.json());

            // const {fileName, filePath} = res.body;

            // setUploaded({ fileName, filePath})
            setUploaded(true)
            console.log(uploaded)

        // } catch (err){
        //     if(err.status === 500){
        //         console.log("There was an 500 error")
        //     }else{
        //         console.log(err.response.data.msg);
        //     }
        // }
    }


    return (
            <div  className="border w-75 mx-auto p-3">    
                <div className="d-flex justify-content-between">
                    <div className="border p-5"> 
                       <Fragment>
                            <form onSubmit={onSubmit}>
                                <div className='custom-file m-2'>
                                    <input type='file' className="custom-file-input" id="customFile" onChange={onChange} accept=".txt" />
                                    {/* <label className='custom-file-label' htmlFor='customFile'>
                                        Choose File 
                                    </label> */}
                                </div> 
                                <input type='submit' value='Upload' className='btn btn-primary btn-block mt-4' />
                            </form>
                       </Fragment>
                    </div>
                    <div className="border">
                        <div className="m-2 p-2">
                            <EncryptOption />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default FileUpload;
