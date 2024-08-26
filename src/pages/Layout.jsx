import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav style={{margin: 0,padding: 0,}}>
        <ul>
          <span style={{float:"left", marginLeft:50, backgroundImage:`url(${require("../assets/logow-removebg-preview.png")})`, backgroundRepeat:"no-repeat",backgroundSize:"cover", width:100, height:100,margin:20}}></span>
          <li>
            <Link to="/signUp" style={{textDecoration:"none",  fontSize:"120%",}}>Sign Up</Link>
          </li>
          <li>
            <Link to="/signIn" style={{textDecoration:"none",  fontSize:"120%"}}>Sign In</Link>
          </li>
          <li>
            <Link to="/aboutList" style={{textDecoration:"none",  fontSize:"120%"}}>About</Link>
          </li>
          <li>
            <Link to="/" style={{textDecoration:"none",  fontSize:"120%"}}>Home</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;