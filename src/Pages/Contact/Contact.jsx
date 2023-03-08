import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const buttonStyle = {
        left: "600px",
        top: "30px",
        height: '50px',
        width: '220px',
        border: 'none',
        outline: 'none',
        color: '#fff',
        background: '#111',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 0,
        borderRadius: '10px',
        boxShadow: isHovered
            ? '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF69B4, 0 0 50px #FF69B4, 0 0 60px #FF69B4, 0 0 80px #FF69B4, 0 0 100px #FF69B4'
            : 'none',
        transition: 'all 0.3s ease-in-out'
    };


    const buttonStyleHover = {
        boxShadow: '0 0 5px #FF69B4, 0 0 10px #FF69B4, 0 0 15px #FF69B4, 0 0 20px #FF69B4, 0 0 3px #FF69B4, 0 0 4px #FF69B4, 0 0 5px #FF69B4, 0 0 7px #FF69B4'
    };



    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1tfy14p', 'template_2d9nd87', form.current, '6xAwZTZd47UQQn7zZ')
            .then((result) => {
                alert("Thanks for feedback" + result.status);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div >

            <h2 className='common-heading' style={{
                position: "relative",

                fontSize: "50px",
                bottom: "70px",
                left: "120px"
            }}>
                QUESTIONS ❓
            </h2>

            <form ref={form} onSubmit={sendEmail} style={{
                position: "relative",
                top: "40px",
                right: "450px",
                padding: "20px", // add some padding to improve spacing
                borderRadius: "10px", // add some border-radius to round the corners
                width: "500px", // add a width property to adjust the width


            }} >
                <div style={{
                    display: "flex",



                }}>
                    <div style={{ display: "flex", position: "relative", bottom: "100px", marginRight: "100px", marginLeft: "130px" }}>

                        <label style={{
                            fontSize: "40px",
                            color: "white",
                            marginBottom: "5px"
                        }}>Name:</label>
                        <input type="text" id="from_name" placeholder='Enter Your Name' name="from_name" required style={{


                            height: "15px", // add a height property to make the input area taller
                            width: "300px", // add a width property to make the input area wider
                            padding: "10px", // add some padding to make the text more readable
                            borderRadius: "5px", // add some border-radius to round the corners
                            border: "none", // remove the default border
                            color: "black", // add a text color to improve readability
                            outline: "none",
                            marginTop: "10px",
                            marginBottom: "10px"

                        }} />
                    </div>
                    <div style={{ display: "flex", position: "relative", bottom: "100px", marginRight: "100px", marginLeft: "100px" }}>
                        <label style={{
                            fontSize: "40px"
                        }}>Email:</label>
                        <input type="email" id='email_id' name="email_id" placeholder='enter your mail' required style={{


                            height: "15px", // add a height property to make the input area taller
                            width: "300px", // add a width property to make the input area wider
                            padding: "10px", // add some padding to make the text more readable
                            borderRadius: "5px", // add some border-radius to round the corners
                            border: "none", // remove the default border
                            color: "white", // add a text color to improve readability
                            outline: "none",
                            marginTop: "10px",
                            marginBottom: "10px"

                        }}
                        />
                    </div>
                </div>
                <div style={{ marginLeft: "640px" }}>
                    <label style={{
                        fontSize: "40px"
                    }}>Message</label>
                </div>
                <div style={{ marginRight: "500px", marginLeft: "500px" }}>
                    <textarea name="message" placeholder='Enter your message' style={{


                        height: "100px", // add a height property to make the input area taller
                        width: "400px", // add a width property to make the input area wider
                        padding: "10px", // add some padding to make the text more readable
                        borderRadius: "5px", // add some border-radius to round the corners
                        border: "none", // remove the default border // add a text color to improve readability
                        outline: "none",
                        marginTop: "10px",
                        marginBottom: "10px"

                    }} />
                </div>
                <button
                    className="glow-on-hover"
                    style={isHovered ? { ...buttonStyle, ...buttonStyleHover } : buttonStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}

                >
                    Send
                </button>

            </form>

        </div>
    )
}

export default Contact