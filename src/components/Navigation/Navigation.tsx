import './Navigation.css'
import imgM from '../../ui/map.png'
import imgA from '../../ui/actor.png'
import imgC from '../../ui/cart.png'
import { useState } from 'react'
import { SideMenu } from '../SideMenu/SideMenu'
export function Navigation(){
    const [isOpen, setIsOpen] = useState(false)

    return(
        <header className="header">
            <div className="header_container">
                <div className="header_top">
                    <ul className='h_top_ul'>
                        <li>
                            <a className='h_top_but_items'>
                                <img  src={imgM} width={13} height={13}  alt='' />
                                <button className='nameBut'>Нижний Новгород</button>
                            </a>
                        </li>
                        <li>
                            <a className='h_top_but_items'>
                                <button className='nameBut'>Продавайте на Wildberries</button>
                            </a>
                        </li>
                        <li>
                            <a className='h_top_but_items'>
                                <button className='nameBut'>Работа в Wildberries</button>
                            </a>
                        </li>
                        
                    </ul>
                </div>
                    <div className='header_bottom'>
                    <div className='header_l'>
                        <span className="title">WILDBERRIES</span>
                        
                        <button 
                        className='but_menu'
                        onClick={()=>setIsOpen(!isOpen)}
                        ><input className="checkbox" type="checkbox" name="" id="" /><div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                      </div>  </button>
                        
                    </div>
                    
                    <div className='search'>Найти на Wildberries</div>
                    <div className="header_r">
                        <div className='h_but'>
                            <a className='h_but_items'>
                                <img className='imgBut' src={imgM} width={30} height={30}  alt='' />
                                <button className='nameBut'>Адреса</button>
                            </a>
                            <a className='h_but_items'>
                                <img className='imgBut' src={imgA} width={30} height={30}  alt='' />
                                <button className='nameBut'>Войти</button>
                            </a>
                            <a className='h_but_items'>
                                <img className='imgBut' src={imgC} width={30} height={30}  alt='' />
                                <button className='nameBut'>Корзина</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        <div className={`Sidemenu ${isOpen ? "active" : ""}`}>
            <SideMenu />
        </div>
        </header>
    )
}