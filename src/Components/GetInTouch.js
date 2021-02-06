import React, {useState} from 'react';

const GetInTouch = () => {
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        name : '',
        email : '',
        message : '',
    });

    const submitHandler = (event) => {
        event.preventDefault();
        setStatus("SUCCESS");
    }
    
    const changeHandler = (event) => {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value,
        })
    }

    return (
        <div className="GetInTouch">
            <form onSubmit={submitHandler}>

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name.." onChange={changeHandler} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email.." onChange={changeHandler} />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Write something.." style={{height:'200px'}} onChange={changeHandler} ></textarea>

                {status === "SUCCESS" ? <p>Thanks! Stay in touch..</p> : <input type="submit" value="Submit" />}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}

            </form>
        </div>
    )
}

export default GetInTouch;