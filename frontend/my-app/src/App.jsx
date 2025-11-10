import { useEffect, useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Generate from './components/Generate'

import axios from "axios";


function App() {
  const currentTheme = localStorage.getItem('currentTheme');
  const [theme, setTheme] = useState(currentTheme ? currentTheme:'light');
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState(null);

  
 
  useEffect(() => {
    localStorage.setItem('currentTheme',theme);
  }, [theme])
  return (
    <>  
    <div className = {`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Generate/>
    </div>
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-6">AI Quiz Generator</h1>
      <input
        type="text"
        placeholder="Enter topic (e.g., AI, Python, Space)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="p-3 rounded text-black w-80 mb-4"
      />
      

      {quiz && (
        <div className="mt-8 w-full max-w-3xl bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl mb-4">{quiz.topic} Quiz</h2>
          {quiz.questions.map((q, i) => (
            <div key={i} className="mb-6">
              <p className="font-semibold">{i + 1}. {q.question}</p>
              <ul className="ml-6 mt-2">
                {Object.entries(q.options).map(([key, value]) => (
                  <li key={key}>{key}. {value}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>





    </>
  )
}

export default App
