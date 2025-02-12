import React from 'react'

export const About = () => {
  return (
    <>
   <div className="container my-5">
      <h1 className="text-center mb-4">About TextUtils</h1>

      <div className="card p-4 shadow-lg border-0">
        <p className="lead">
          Welcome to <strong>TextUtils</strong>, a powerful yet simple text manipulation tool designed to make your text-processing tasks faster and more efficient.
        </p>

        <h3 className="mt-4">📌 Why I Built TextUtils</h3>
        <p>
          Hi, I'm <strong>[Avinash kushawaha]</strong>, a <strong>Computer Science Engineering student</strong> passionate about web development. While learning <strong>React.js and the MERN stack</strong>, I wanted to build a useful project that would solve a common problem: quick text formatting. Thus, <strong>TextUtils</strong> was born!
        </p>

        <h3 className="mt-4">✨ Features</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">🔠 Convert text to **UPPERCASE** and **lowercase**</li>
          <li className="list-group-item">🧹 Remove extra spaces from text</li>
          <li className="list-group-item">📊 Count words and characters in real-time</li>
          <li className="list-group-item">🌙 Toggle between **Light Mode & Dark Mode**</li>
          <li className="list-group-item">🚀 More features coming soon...</li>
        </ul>

        <h3 className="mt-4">🛠 Technologies Used</h3>
        <ul>
          <li><strong>Frontend:</strong> React.js</li>
          <li><strong>UI:</strong> Bootstrap for a responsive design</li>
          <li><strong>Future Plans:</strong> MERN Stack for full-stack functionality</li>
        </ul>

        <h3 className="mt-4">🚀 Future Enhancements</h3>
        <p>I'm actively working on adding new features like:</p>
        <ul>
          <li>✅ AI-powered **Grammar Checker**</li>
          <li>✅ **Text Summarization** using Machine Learning</li>
          <li>✅ Multi-language **Translation Support**</li>
        </ul>

        <h3 className="mt-4">📬 Connect with Me</h3>
        <p>If you have feedback or suggestions, feel free to reach out!</p>
        <p><strong>Email:</strong> [Mauryaavinash085@gmail.com]</p>
        <p><strong>GitHub:</strong> <a href="[https://github.com/Avinashkushawaha]" target="_blank" rel="noopener noreferrer">[Avinashkushawaha]</a></p>
      </div>
    </div>
    </>
  )
}
