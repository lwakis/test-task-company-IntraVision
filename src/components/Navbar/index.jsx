import React from 'react';
import './navbar.scss';

import logo from '../../assets/image/logo.png';
import book from '../../assets/image/book.png';
import file from '../../assets/image/file.png';
import people from '../../assets/image/people.png';
import city from '../../assets/image/city.png';
import analytics from '../../assets/image/analytics.png';
import settings from '../../assets/image/settings.png';


const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="logo" src={logo} alt="Лого"/>
            <div className="nav-item">
                <img src={book} alt="Книга"/>
                <h3>База знаний</h3>
            </div>
            <div className="nav-item active">
                <img src={file} alt="Файл"/>
                <h3>Заявки</h3>
            </div>
            <div className="nav-item">
                <img src={people} alt="Люди"/>
                <h3>Сотрудники</h3>
            </div>
            <div className="nav-item">
                <img src={city} alt="Город"/>
                <h3>Клиенты</h3>
            </div>
            <div className="nav-item">
                <img src={analytics} alt="Аналитика"/>
                <h3>Активы</h3>
            </div>
            <div className="nav-item">
                <img src={settings} alt="Настройка"/>
                <h3>Настройки</h3>
            </div>
        </nav>
    );
}

export default Navbar;
