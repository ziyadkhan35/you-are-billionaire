import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { setTheme } from '../redux/changeThemeSlice';

const Header = () => {
    const money=useSelector((state)=>state.money);
    const {totalAmount}=useSelector(state=>state.basket);
    const {totalQuantity}=useSelector(state=>state.basket);
    const {dark}=useSelector((state)=>state.dark)

    const dispatch=useDispatch()

    const handleSetDarkMode=()=>{
      const body=document.querySelector('body');
      
      body.classList.toggle('lightmode');
      dispatch(setTheme());
      
      const icon=document.querySelector('.theme-icon')
      const navbar=document.querySelector('.navbar')

      if(body.classList.contains('lightmode')){
        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-sun-fill");

        navbar.classList.remove("navbar-dark");
      }else{
        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-fill");

        navbar.classList.add("navbar-dark");
      }
    }

  return (
        <>
         <Navbar  expand="xl" className='navbar navbar-dark fixed-top'>
          <Container fluid>
        <Navbar.Brand href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-currency-bitcoin" viewBox="0 0 16 16">
            <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25L5.5 13zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28V4.487zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927V8.539z"/>
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"> 
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href='basket'>Basket</Nav.Link>
            <NavDropdown title="Catagory" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/cars">Cars</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Houses
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/watches">
                Watches
              </NavDropdown.Item>
              <NavDropdown.Item href="/suits">
                Suits
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="about-us">About Us</Nav.Link>
          </Nav>

          <Navbar.Text className='me-4'>
            {
                totalAmount>0 ? <>Your money: ${money.amount-totalAmount}</>  : <span>Your money:${money.amount}</span>
            }
          </Navbar.Text>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant={dark?"outline-light":"outline-dark"}>Search</Button>
          </Form>
        </Navbar.Collapse>

                                  {/* Basket icon */}
        
        <Nav.Link className='basket-icon' href='/basket'>
          <div className="nav-bag">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bag-icon bi bi-bag-heart-fill" viewBox="0 0 16 16">
            <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
          </svg>
            <span className="bag-quantity">
              <span>{totalQuantity}</span>
            </span>
          </div>
        </Nav.Link>

                              {/* Dark/Light Mode */}

         <div className="theme-container" onClick={()=>handleSetDarkMode()}>
          <div className={dark?" theme-icon-circle":" theme-icon-circle"}>
            <div className="theme-icon-container">
              <i className="theme-icon bi bi-moon-fill"></i>
            </div>
          </div>
        </div> 

      </Container>
    </Navbar>
            {/* <nav className="navbar navbar-expand-xl navbar-dark bg-secondary fixed-top">
                <div className="container-fluid">
                    <a href="" className="navbar-brand"><img src='' alt="logo"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nContent" aria-controls="nContent" aria-expanded="false" aria-label="menu open/close button ">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="nContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a href="#" className="nav-link">HomePage</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Basket</a></li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" id="nDropdown" role="button" data-bs-toggle="dropdown">Catagories</a>
                                <ul className="dropdown-menu" aria-labelledby="nDropdown">
                                    <li><a href="#" className="dropdown-item">Houses</a></li>
                                    <li><a href="#" className="dropdown-item">Cars</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a href="#" className="dropdown-item">Watches</a></li>
                                    <li><a href="#" className="dropdown-item">Suits</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="#" className="nav-link" to={"/about"}>About</a></li>
                            <li className="nav-item"><a href="#" className="nav-link" to={"/contact"}>Contact Us</a></li>
                        </ul>
                        <span className='navbar-text me-5'>
                        {
                        totalAmount>0 ? <>Your money: ${money.amount-totalAmount}</>  : <span>Your money:${money.amount}</span>
                        }
                        </span>
                        <form action="" className="d-flex">
                            <input type="search" className="form-control me-xl-2" placeholder="Search..."/>
                            <button className="btn btn-outline-light">Search</button>
                        </form>
                    </div>
                </div>
            </nav> */}
        </>
  )
}

export default Header