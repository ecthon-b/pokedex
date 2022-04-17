import { HiMenu } from 'react-icons/hi'
import './styles.scss'

export function Header() {
    return (
        <nav className="navbar">
            <a href="#" className='logo'>LOGO</a>
            <input type="checkbox" id="toggler" />
            <label htmlFor="toggler"><HiMenu/></label>

            <div className="menu">
                <ul className="list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}