import React, { useState } from 'react';
import './App.css';
import Posts from './components/Posts';
import PostsAxios from './components/PostsAxios';

function App() {
  const [showPosts, setShowPosts] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setShowPosts(!showPosts)}>
          Switch to different API method
        </button>

        {showPosts ? <Posts /> : <PostsAxios />}
        
      </header>
    </div>
  );
}
export default App;
