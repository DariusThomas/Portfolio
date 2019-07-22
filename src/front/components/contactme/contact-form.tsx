import * as React from "react"
import { useState, useContext } from "react"
import {DMContext} from "../../utils/context/ContactContext"
import "../../style/contact-form.scss"

const ContactForm: React.SFC<IFormProps> = () => {

    const {res,setRes} = useContext(DMContext)

    const [form, setForm] = useState({
        Name: "",
        Tel:"",
        Email: "",
        Message: ""
    }
    )


    function handleName(e: React.FormEvent<HTMLInputElement>) {
        setForm({ ...form, Name: e.currentTarget.value })
    }

    function handleTel(e: React.FormEvent<HTMLInputElement>) {
        setForm({ ...form, Tel: e.currentTarget.value })
    }

    function handleEmail(e: React.FormEvent<HTMLInputElement>) {
        setForm({ ...form, Email: e.currentTarget.value })
    }

    function handleMessage(e: React.FormEvent<HTMLTextAreaElement>) {
        setForm({ ...form, Message: e.currentTarget.value })
    }

   async function sendMessage(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setRes({...res,attempt:true,pending:true})
        try{
             let res = await fetch("/DM",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(form)
            })
            if(res.ok){
                setRes({...res,attempt:true,pending:false,success:true})
            }else{
                throw new Error ("Messenging system down")
            }
        }catch(e){
            console.log(e)
            setRes({...res,attempt:true,pending:false,success:false})
        }
        setForm({
            Name: "",
            Tel:'',
            Email: "",
            Message: ""
        })
    }

    return (
        <>
            <form onSubmit={sendMessage} className="direct-message-form">
                <div className="title">Leave a message</div>

                <label htmlFor="email">Name</label>
                <input id="name" required type="name" onChange={handleName} value={form.Name} placeholder="Name:" />

                <label htmlFor="phone">Phone Number (optional)</label>
                <input id="tel" type="tel" onChange={handleTel} value={form.Tel} placeholder=" Phone Number (optional):" />

                <label htmlFor="email">Email</label>
                <input id="email" required type="email" onChange={handleEmail} value={form.Email} placeholder=" Your email address:" />

                <label htmlFor="message">Message</label>
                <textarea  onChange={handleMessage} required value={form.Message} placeholder="message..."></textarea>

                <button type="submit" >Send Message</button>
            </form>
        </>
    )
}

interface IFormProps {
}

export default ContactForm