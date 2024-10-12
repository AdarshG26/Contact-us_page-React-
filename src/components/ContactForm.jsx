import React, { useState } from 'react'
import './ContactForm.css'
import Button from './Button'
import { RiMessage2Fill } from "react-icons/ri";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";


const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    function handleChat(){
        alert("Wanna Call Support?")
    }
    function handleCall(){
        alert("Wanna Call Support?")
    }
    function handleEmail(){
        alert("Want to Send Email?")
    }
    function submitForm(e){
        e.preventDefault()
        alert("Name:"+e.target[0].value + " " + "Email:"+e.target[1].value + " " + "Text"+e.target[1].value) 

        setName(e.target[0].value)
        setEmail(e.target[1].value)
        setText(e.target[2].value)
    }


  return (
    <div className='main-div'>
        <div className="form-div">
            <div className="btn-div">
                <Button icon={<RiMessage2Fill/>} text='Via Support Chat' click={handleChat}/>
                <Button icon={<MdCall/>} text='Via Call'click={handleCall}/>
            </div>  
            <div className="email-btn">
                <Button className='email-button' icon={<IoIosMail/>} text='Via email form' click={handleEmail}/>
            </div>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' />
                <label htmlFor="email">E-mail: </label>
                <input type="email" name="email" id="" />
                <label htmlFor="text">Text: </label>
                <textarea name="text" rows={5}></textarea>
                <Button text='Submit'/>
            </form> 
        </div>

        <div className="img-div">
            <img src="/public/images/istockphoto-1452771551-612x612.jpg" alt="" />
        </div>

        <div>
            Name: {name} <br />
            Email: {email} <br />
            Text: {text}
        </div>
    </div>
  )
}

export default ContactForm