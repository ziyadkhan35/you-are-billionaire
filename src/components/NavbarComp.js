import React from 'react'

function NavbarComp(props) {

    let navLinks = ["Popular","Theatre","Kids","Drama","Comedie"]
    
    const dropDownMenu = document.querySelector('.dropdown_menu')
    const toggleBtn = document.querySelector('.toggle-btn')
    const menuDrop = () => {
         dropDownMenu.classList.toggle('d-none')
         if(dropDownMenu.classList.contains('d-none')){
            toggleBtn.innerHTML='<i class="fa-solid fa-bars"></i>'
         }else{
            toggleBtn.innerHTML='<i class="fa-solid fa-xmark"></i>'
         }
    }

  return (
    <>
        <nav className="nav-container fixed-top">
            <div className="link-box d-flex align-align-items-center justify-content-center ms-5">
                <button className="toggle-btn" onClick={()=>menuDrop()}><i class="fa-solid fa-bars"></i></button>
                <span className='logo fa-brands text-center d-flex align-items-center me-5'><span className='gala'>Gala</span>Film</span>
                <ul className="nav gap-2">
                    {navLinks.map((link,pos)=>{
                        return(
                            <li className="nav-item" key={pos}><a className="nav-link" href='#' name={link} onClick={(e)=>{props.getDataForNav(e.target.name)}}>{link}</a></li>
                        )
                    })}
                </ul>
            </div>
            <div className="search me-5">
                <input type="text" value={props.search} onKeyPress={props.searchMovie} onChange={(e) => {props.setSearch(e.target.value)}} className="srch-input fs-4 px-3 py-2 border-0" placeholder='Movie name, press enter' />
                <button className="srch-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <ul className="dropdown_menu d-none gap-2">
                {navLinks.map((link,pos)=>{
                    return(
                        <li className="nav-item" key={pos}><a className="nav-link" href='#' name={link} onClick={(e)=>{props.getDataForNav(e.target.name)}}>{link}</a></li>
                    )
                })} 
            </ul>
        </nav>
    </>
  )
}

export default NavbarComp