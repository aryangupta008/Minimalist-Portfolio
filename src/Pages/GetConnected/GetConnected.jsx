import React, { useState } from 'react'



const GetConnected = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const buttonStyle = {


        right: "20px",
        bottom: "180px",
        height: '54px',
        width: '70px',
        borderRadius: "50%",
        border: 'none',
        outline: 'none',
        color: 'none',
        background: 'none',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 0,

        // boxShadow: isHovered
        //     ? '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF69B4, 0 0 50px #FF69B4, 0 0 60px #FF69B4, 0 0 80px #FF69B4, 0 0 100px #FF69B4'
        //     : 'none',
        // transition: 'all 0.3s ease-in-out'
    };


    const buttonStyleHover = {
        // boxShadow: '0 0 5px #FF69B4, 0 0 10px #FF69B4, 0 0 15px #FF69B4, 0 0 20px #FF69B4, 0 0 3px #FF69B4, 0 0 4px #FF69B4, 0 0 5px #FF69B4, 0 0 7px #FF69B4'
    };
    const buttonStyle2 = {

        left: "87px",
        bottom: "180px",
        height: '55px',
        width: '70px',
        borderRadius: "50%",
        border: 'none',
        outline: 'none',
        color: '#fff',
        background: 'none',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 0,

        // boxShadow: isHovered
        //     ? '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF69B4, 0 0 50px #FF69B4, 0 0 60px #FF69B4, 0 0 80px #FF69B4, 0 0 100px #FF69B4'
        //     : 'none',
        // transition: 'all 0.3s ease-in-out'
    };


    const buttonStyleHover2 = {
        // boxShadow: '0 0 5px #4666FF, 0 0 10px #4666FF, 0 0 15px #4666FF, 0 0 20px #4666FF, 0 0 3px #4666FF, 0 0 4px #4666FF, 0 0 5px #4666FF, 0 0 7px #4666FF'
    };
    const buttonStyle3 = {

        left: "190px",
        bottom: "180px",
        height: '55px',
        width: '70px',
        borderRadius: "50%",
        border: 'none',
        outline: 'none',
        color: '#fff',
        background: 'none',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 0,

        // boxShadow: isHovered
        //     ? '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF69B4, 0 0 50px #FF69B4, 0 0 60px #FF69B4, 0 0 80px #FF69B4, 0 0 100px #FF69B4'
        //     : 'none',
        // transition: 'all 0.3s ease-in-out'
    };


    const buttonStyleHover3 = {
        // boxShadow: '0 0 5px  #fdf497, 0 0 10px  #fdf497, 0 0 15px #fd5949, 0 0 20px #d6249f, 0 0 3px #285AEB, 0 0 4px #4666FF, 0 0 5px #4666FF, 0 0 7px #4666FF'
    };
    const buttonStyle4 = {

        left: "290px",
        bottom: "180px",
        height: '55px',
        width: '70px',
        borderRadius: "50%",
        border: 'none',
        outline: 'none',
        color: '#fff',
        background: 'none',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 0,

        // boxShadow: isHovered
        //     ? '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF69B4, 0 0 50px #FF69B4, 0 0 60px #FF69B4, 0 0 80px #FF69B4, 0 0 100px #FF69B4'
        //     : 'none',
        // transition: 'all 0.3s ease-in-out'
    };


    const buttonStyleHover4 = {
        // boxShadow: '0 0 5px  #FF3131, 0 0 10px  #FF3131, 0 0 15px #FF3131, 0 0 20px #FF3131, 0 0 3px #285AEB, 0 0 4px #FF3131, 0 0 5px #FF3131, 0 0 7px #FF3131'
    };

    const style = {
        position: "relative",
        left: "12px",
        top: "18px",
        color: "pink"
    };
    const style2 = {
        position: "relative",
        left: "12px",
        top: "20px",
        color: "#4666FF"
    };
    const style3 = {
        position: "relative",
        left: "12px",
        top: "19px",
        color: "#FF6700"
    };
    const style4 = {
        position: "relative",
        left: "12px",
        top: "19px",
        color: "	#FF3131"
    };

    return (
        <div>
            <div style={{
                position: "relative",

                fontSize: "50px",
                bottom: "200px",
                left: "10px"
            }}>
                Get in Touch 🤝✉️📱

            </div>

            <div style={{
                display: "flex"
            }}>
                <a href='mailto:aryanetaundiya@gmail.com'>
                    <div className="glow-on-hover"
                        style={isHovered ? { ...buttonStyle, ...buttonStyleHover } : buttonStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>

                        <i class="fa-regular fa-envelope fa-2xl" style={style}></i>
                    </div >
                </a>
                <a href="https://www.linkedin.com/in/aryan-gupta-18270b1aa/" target="_blank" rel="noopener noreferrer">
                    <div className="glow-on-hover"
                        style={isHovered ? { ...buttonStyle2, ...buttonStyleHover2 } : buttonStyle2}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}><i class="fab fa-linkedin-in fa-2xl " style={style2}  ></i>
                    </div>
                </a>
                <a href="https://instagram.com/wakeupparyan?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer">
                    <div className="glow-on-hover"
                        style={isHovered ? { ...buttonStyle3, ...buttonStyleHover3 } : buttonStyle3}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}><i class="fab fa-instagram fa-2xl" style={style3}></i>
                    </div>
                </a>
                <a href="https://github.com/aryangupta008" target="_blank" rel="noopener noreferrer">
                    <div className="glow-on-hover"
                        style={isHovered ? { ...buttonStyle4, ...buttonStyleHover4 } : buttonStyle4}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}> <i class="fab fa-github fa-2xl" style={style4}></i></div>
                </a>

            </div>
            <a href="https://drive.google.com/file/d/15HzRxbCu7dP2BpiPUerXyqczbMyEOS-K/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <div style={{
                    color: 'black',
                    backgroundColor: '#32ffce',
                    border: '2px solid #32ffce',
                    borderRadius: '5px',
                    padding: '8px 16px',
                    position: 'relative',
                    left: '220px',
                    bottom: '30px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    display: 'inline-block'
                }}>
                    Resume
                </div>
            </a>




        </div>
    )
}

export default GetConnected