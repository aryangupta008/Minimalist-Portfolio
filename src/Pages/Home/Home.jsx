import React from 'react'
import "./home.css"
import Contact from '../Contact/Contact'
import GetConnected from '../GetConnected/GetConnected'


const Home = () => {
    return (
        <body>



            <div className="home">
                <section>
                    <h1 className="Style1"> 👋 Hi there! Who am I, you ask? 🤔</h1>
                </section>
                <section>
                    <h1 className="Style"> I'm a 🎓 undergraduate student from the Electronics & Communication branch with a passion for 🌐 web development. 💻
                        <br /> <br />
                        I love exploring the endless possibilities of the digital world and creating stunning websites that are both functional <br /> and aesthetically pleasing. 🌟
                    </h1>
                </section>
                <section>
                    <h1 className="Style">  With a strong foundation in Electronics & Communications and a natural curiosity for coding, I'm always up for a challenge and eager to learn new technologies and frameworks. 🔍
                        <br /><br />
                        So if you're looking for a creative problem solver, an attention-to-detail enthusiast, and a dedicated team player, look no further! 😎
                    </h1>
                </section>
                <section>
                    <h1 className="Style1"> 🚀 Check out my exciting projects! 🤩</h1>
                </section>
                <section>
                    <h1 className="Style"> <h2> <a href="https://admin-dashboard-ebon-one.vercel.app/" style={{
                        textDecoration: 'none',
                        color: '#FF6700',
                        marginLeft: '500px'
                    }}  >💻 Admin Dashboard:</a></h2>
                        <br /><br />
                        I designed and developed a sleek, modern dashboard that makes data management a breeze. 🚀
                        <br /> <br />
                        The dashboard provides users with a wide range of functionalities, including user management, appointment tracking,<br /> and more. The graphical representations of data are stunning, making it easy for users to analyze and interpret key <br />metrics in real-time. 📊 🤩</h1>
                </section>
                <section>
                    <h1 className="Style"> <h2> <a href="https://aryangupta008.github.io/N-Queens/" style={{
                        textDecoration: 'none',
                        color: '#39FF14',
                        marginLeft: '470px'

                    }}  >👑 N-Queens Visualizer:</a></h2>
                        <br /><br />
                        I developed an interactive visualizer that uses the backtracking algorithm to solve the N-Queens problem. 🎓

                        <br /> <br />
                        The N-Queens problem is a classic computer science puzzle that involves placing N queens on an N x N chessboard in such a way that no two queens threaten each other. My visualizer allows users to enter the number of queens they want to place and then checks all the possibilities using the backtracking algorithm.🧐
                        <br /><br />
                        One of the standout features of my N-Queens visualizer is its speed function ⏩, enabling users to see how the algorithm works in real-time. 🤖
                    </h1>
                </section>
                <section>
                    <h1 className="Style"> <h2> <a href="https://booking-app-kappa.vercel.app/" style={{
                        textDecoration: 'none',
                        color: '#9D00FF',
                        marginLeft: '530px'

                    }}  >🏨 HotelBook:</a></h2>
                        <br /><br />
                        I developed a top-notch hotel booking website with a user-friendly interface using ReactJS. With HotelBook, users can effortlessly search for hotels, select their desired dates on a sleek calendar, and book their dream stay. 🗓️
                        <br /> <br />
                        In addition to the booking functionality, HotelBook also provides users with a comprehensive view of each hotel's details and amenities, such as pricing, reviews, and available services. This feature helps users make informed decisions and choose the perfect hotel for their needs. 🌟<br />

                        <br /> My HotelBook project is a testament to my skills in ReactJS development and user interface design🚀
                    </h1>
                </section>
                <section>
                    <h1 className="Style"> <h2> <a href="https://github.com/aryangupta008/Web-Scraper" style={{
                        textDecoration: 'none',
                        color: '#1F51FF',
                        marginLeft: '500px'

                    }}  >🕷️ Web Scraper Extension:</a></h2>
                        <br /><br />
                        I built a powerful web scraping tool using JSON that can extract massive amounts of data in just seconds. With this tool, users can quickly and efficiently scrape data from various websites and export it to a CSV file for further analysis. 📊
                        <br /> <br />
                        One of the most impressive features of my web scraper extension is its speed, which enables it to extract thousands of lines of data in seconds. This makes it an invaluable tool for businesses and individuals looking to gather and analyze large amounts of data.<br />

                        <br />Additionally, the data extracted by my web scraper extension can also be used for various applications such as Machine Learning training, data analytics, and market research. This functionality makes it an essential tool for businesses and researchers looking to leverage data for decision-making and insights.🔍
                    </h1>
                </section>
                <section>
                    <h1 className="Style"> <h2> <a href="https://to-do-list-algobulls.vercel.app/" style={{
                        textDecoration: 'none',
                        color: '#FFFF33',
                        marginLeft: '500px'

                    }}  >📝 Advanced To-do-List:</a></h2>
                        <br /><br />
                        I created a robust to-do list application that uses a mock API to showcase its powerful features. This application allows users to filter, search, add, and sort tasks with ease. With its clean and user-friendly interface, users can manage their tasks efficiently and stay organized.
                        <br /> <br />
                        One of the standout features of my Advanced To-do-List is its search functionality, which allows users to search for specific tasks based on their keywords. Additionally, users can also sort tasks based on priority or due date, enabling them to prioritize their work and stay on top of their to-do list.🤝<br />
                    </h1>
                </section>
                <section>
                    <h1 className="Style"> <h2> <a href="https://youtube-clone-zeta-nine.vercel.app/" style={{
                        textDecoration: 'none',
                        color: '#32ffce',
                        marginLeft: '500px'

                    }}  >📺 YouTube Clone:</a></h2>
                        <br /><br />
                        I developed a stunning YouTube clone using React JS, complete with a explore page and detailed video pages that feature comment boxes, like/dislike buttons, and more. Additionally, my clone includes a theme changer, allowing users to customize their viewing experience. 🌈
                    </h1>
                </section>

                <section>
                    <h1 className="Style1">
                        Let's Stay Connected❗
                    </h1>
                </section>
                <section>
                    <h1> <GetConnected></GetConnected></h1>

                </section>
                <section>
                    <h1>
                        <Contact></Contact>
                    </h1>
                </section>




            </div>
        </body>

    )
}

export default Home