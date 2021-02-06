import React, {useState} from 'react';
import axios from 'axios';

const GetInTouch = () => {
    const [status, setStatus] = useState('');
    const [sending, setSending] = useState(false);
    const [formError, setFormError] = useState(false);
    const [formData, setFormData] = useState({
        name : '',
        email : '',
        message : '',
    });

    const submitHandler = async (event) => {
        event.preventDefault();
        if(!formData.name || !formData.email || !formData.message) {
            setFormError(true);
            return;
        }
        try {
            setSending(true);
            await axios.post("/api/contact-me", formData);
            setStatus("SUCCESS");
            setFormData({
                name : '',
                email : '',
                message : '',
            });
            setSending(false);
        }
        catch(err) {
            console.log(err.message);
            setStatus("ERROR");
        }
    }
    
    const changeHandler = (event) => {
        setFormError(false);
        setFormData({
            ...formData,
            [event.target.name] : event.target.value,
        });

    }

    return (
        <div className="GetInTouch">
            <form onSubmit={submitHandler}>

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} placeholder="Your name.." onChange={changeHandler} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} placeholder="Your Email.." onChange={changeHandler} />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Write something.." value={formData.message} style={{height:'200px'}} onChange={changeHandler} ></textarea>

                {status === "SUCCESS" && !sending ? <p>Thanks! Stay in touch..</p> : sending ? <p><i className="fas fa-cog fa-spin"></i> Sending ...</p> : <input type="submit" value="Submit" />}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
                {formError && <p>Ooops! Fill all the fields please.. </p>}

            </form>
        </div>
    )
}

export default GetInTouch;