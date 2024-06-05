import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg d-flex align-items-center bg-info shadow navbar-light">
                <div className="container-fluid">
                    <h2 className="navbar-brand rounded shadow p-2" href="#" style={{marginLeft:"100px",fontSize:"25px",color:"white",border:"1px solid black"}}>REACT CRUD</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item me-3 mt-3 ">
                                <Link to="/" className="nav-link active" aria-current="page"  style={{backgroundColor:"#dc3545",width:"70px",textAlign:"center", borderRadius:"10%",color:"white",padding:"10px",border:"1px solid black",fontSize:"20px"}}>Add</Link>
                            </li>
                            <li className="nav-item me-3 mt-3 ">
                                <Link to="/View" className="nav-link active" aria-current="page"  style={{backgroundColor:"#dc3545",width:"70px",textAlign:"center", borderRadius:"10%",color:"white",padding:"10px",border:"1px solid black",fontSize:"20px"}}>View</Link>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header
