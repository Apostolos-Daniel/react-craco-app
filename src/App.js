import React, { useState } from 'react';
import './App.css';
import Posts from './components/Posts';
import PostsAxios from './components/PostsAxios';
import PostsReactQuery from './components/PostsReactQuery';


function App() {
  const [currentComponent, setCurrentComponent] = useState('Posts');

  const handleDropdownChange = (event) => {
    setCurrentComponent(event.target.value);
  };
  const renderComponent = () => {
    switch(currentComponent) {
      case 'Posts':
        return <Posts />;
      case 'PostsAxios':
        return <PostsAxios />;
      case 'PostsReactQuery':
        return <PostsReactQuery />;
      default:
        return <Posts />;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <select value={currentComponent} onChange={handleDropdownChange}>
          <option value="Posts">Posts</option>
          <option value="PostsAxios">Posts using Axios</option>
          <option value="PostsReact Query">Posts using React Query</option>
        </select>
        
        {renderComponent()}
        
      </header>
    </div>
  );
}
export default App;
