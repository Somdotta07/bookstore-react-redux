import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="nav">
      <h1 className="logo">Bookstore CMS</h1>
      <div className="nav-item">
        <Link to="/"><li>BOOKS</li></Link>
        <Link to="/categories"><li>CATEGORIES</li></Link>
      </div>
    </nav>
  );
}
