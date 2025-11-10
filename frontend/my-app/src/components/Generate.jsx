import React from 'react'
import './Generate.css'

const Generate = () => {
   
    
    
    const generateQuiz = async () => {
      try {
        const response = await axios.post(`http://127.0.0.1:8000/generate_quiz/?topic=${topic}`);
        setQuiz(response.data);
      } catch (error) {
        console.error("Error generating quiz:", error);
        alert("Failed to fetch quiz. Check backend connection!");
      }
    };

  
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Generate Quiz</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <input type="text" placeholder='Example : https://en.wikipedia.org/wiki/....' className='input'/>
        </div>
        <div className='button-container'>
            <button className='button' onClick={generateQuiz}>Generate Quiz</button>
            <button className='button'>Past Quizzes</button>
        </div>
        
    </div>

  )
}

export default Generate
