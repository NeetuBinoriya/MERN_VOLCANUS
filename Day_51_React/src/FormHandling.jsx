import React, { useState } from 'react';


const FormHandling = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [name2, setname2] = useState("")
  const [email2, setemail2] = useState("")
  const [password2, setpassword2] = useState("")

  const [flag, setflag] =useState(false);
  // console.log(name,email,password);
  const onSubmitHandler = (e) =>{
    e.preventDefault()
    // Backend Logic here
    alert("Your form has been submitted")
    console.log(`name = ${name} \n email = ${email} \n password = ${password}`);
    setflag(true)
    setname2(name)
    setemail2(email)
    setpassword2(password)
    setName("")
    setemail("")
    setPassword("")
  }
  return (
    <>
      <form className="container" onSubmit={onSubmitHandler}>
        <h1>Form Handling</h1>
        Name :- <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <br />
        Gmail :- <input type="email" value={email} onChange={(e) => setemail(e.target.value)} />
        <br />
        <br />
        Password :- <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />
        <button className="btn btn-warning">Submit</button>
      </form>
      {flag && (
        <>
        <h1>Name = {name2}</h1>
        <h1>Email = {email2}</h1>
        <h1>Password = {password2}</h1>
        
        </>
      )}
    </>
  );
}

export default FormHandling;
