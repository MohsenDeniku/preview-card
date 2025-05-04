import './App.css';
export default function App() {

  return (
    <div className="app">
      <div className="card">
        <img className="card-img" src="/assets/images/illustration-article.svg" alt="illustration" />
        <div className="card-text-container">
          <div className="status-text">
            Learning
          </div>
          <div className="date-text">
            Published 21 Dec 2023
          </div>
          <h2 className='card-title'>HTML & CSS foundation</h2>
        </div>
        <p className='card-description'>
          These languages are the backbone of every website,
          defining structure, content, and presentation.
        </p>
        <div className="author-container">
          <img src="/assets/images/image-avatar.webp" alt="author" />
          <h4>Greg Hooper</h4>
        </div>
      </div>
    </div>
  )
}