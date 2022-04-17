import mewtwo from '../../public/mewtwo.png';
import './styles.scss'

import { SiDiscord } from 'react-icons/si';
import { FaLinkedinIn, FaArrowRight } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { Header } from '../Header';


export function Home() {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='hero'>
                    <div className='title'>
                        <h3>React</h3>
                        <h1>POKÉDEX</h1>
                        <p>
                            Explorando os poderes da PokéAPI com React.js e Typescript.
                        </p>
                    </div>
                    <img src={mewtwo} alt="Pokémon Mewtwo" />
                </div>
            </div>
            <div className='menu'>
                <a className="linkedin">
                    <p><FaLinkedinIn size={'32px'} /></p>
                </a>
                <a className="instagram">
                    <p><FiInstagram size={'32px'} /></p>
                </a>
                <a className="discord">
                    <p><SiDiscord size={'32px'} /></p>
                </a>
                <a className="explorar">
                    <p>EXPLORAR </p><span><FaArrowRight size={'24px'}/></span>
                </a>
            </div>
        </>
    )
}