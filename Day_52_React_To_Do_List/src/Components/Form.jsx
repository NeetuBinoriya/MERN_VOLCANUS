import React, { useState } from 'react';


const Form = ({ addToDo }) => {
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    // console.log(title);
    // console.log(description);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(title == "" || description == ""){
            alert("Please fill the title and description Input Field");
        }
        else{

            addToDo(title, description);
            alert("Your Data Added Successfully..!")
            settitle("")
            setdescription("")
        }
    };
    return (
        <>
            <div className="container p-3 mt-5">
                <form className='row d-flex justify-content-center align-item-center p-3' onSubmit={onSubmitHandler}>
                    <div className="mb-3 col-md-5">

                        <input value={title} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => settitle(e.target.value)}/>
                    </div>
                    <div className="mb-3 col-md-5">

                        <input value={description} type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setdescription(e.target.value)}/>
                    </div>
                    <div className="mb-3 col-md-2">
                        <button className="btn btn-primary">Add</button></div>
                </form>
            </div>
        </>
    );
}

export default Form;
