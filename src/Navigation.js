import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <Link to="/newshop">New Shop</Link>
      <span> | </span>
      <Link to="/newproduct">New Product</Link>
    </div>
  );
}
export default Navigation;
