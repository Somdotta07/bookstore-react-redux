import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="nav">
      <h1 className="logo">Bookstore CMS</h1>
      <div className="nav-item">
        <Link to="/"><li className="nav-b">BOOKS</li></Link>
        <Link to="/categories"><li className="nav-c">CATEGORIES</li></Link>
        {/* <Link to="/"><li className="oval">Profile</li></Link> */}
      </div>
    </nav>
  );
}
