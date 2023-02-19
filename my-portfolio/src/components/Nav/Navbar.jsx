import './nav.css';
import logo from '../../Assets/img-timnik.jpg';
import {IoIosColorPalette} from 'react-icons/io'

const data =[{id:1, link:'', title:'Home'},{id:2, link:'', title:'About'},{id:3, link:'', title:'Services'},{id:4, link:'', title:'Portfolio'}, {id:5, link:'', title:'Contact'}]

export const Navbar = () =>{
    return (
        <nav className='navbar'>
            <div className="container nav__container">
                <a href="index.html" className='logo'>
                    <img src={logo} alt="" />
                </a>

                <ul className="nav__menu">
                    {
                        data.map(item => <li><a  key={item.id} href={item.link}>{item.title}</a></li>)
                    }
                </ul>

                <button className="theme__icon"><IoIosColorPalette/></button>
            </div>
        </nav>
    )
}