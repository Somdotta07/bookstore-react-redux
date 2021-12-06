import { React } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import BooksPage from './components/BooksPage';
import CategoriesPage from './components/CategoriesPage';

const demoList = [{
  id: 1, title: 'The Hunger Games', author: 'Suzanne Collins',
}, {
  id: 2, title: 'Dune', author: 'Frank Herbert',
}, {
  id: 3, title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins',
}];

function App() {
  return (
    <Router>
      <header>
        <nav>
          <h1>Awesome Bookstore</h1>
          <div className="nav-links">
            <Link to="/">Book</Link>
            <div />
            <Link to="/categories">Categories</Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<BooksPage bookList={demoList} />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
