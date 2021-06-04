import Header from './Images/header.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
       <div className='Container'>
          <h1 className='Title'>Temple Data Science Community</h1>
          <img className='Header' src={Header} alt=''></img>
        </div>
        <div className='Information'>
          <h1>Who we are?</h1>
            <p>Temple Data Science Community (TDSC) connects students across the many colleges of Temple University to collaborate and learn about data science and its interdisciplinary applications. TDSC aims to provide students with practical experiences outside of the classroom to engage students in research projects, professional development events, and establish a community for data scientists and all those interested.</p>
          <h1>What we do?</h1>
            <p>TDSC hosts a variety of opportunities for students to engage in. From student-led projects to short courses, monthly panels, and networking events, TDSC aims to provide students at Temple with experiences that can allow them to grow professionally and academically.</p>
          <h1>How do I join or learn more?</h1>
            <p>Join us on discord at <a href ='http://bit.ly/templedatasciencecommunity'>http://bit.ly/templedatasciencecommunity</a>. For further questions or inquiries, email us at templedatasciencecommunity@gmail.com.</p>
        </div>
    </div>
  );
}

export default App;
