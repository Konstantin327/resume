import React from 'react'
import MenuItem from './MenuItem'
import About from './About'

export default function Header() {
  return (
    <div>
        <div className='header'>
          <div className='logo'>
              <div className='photo'></div>
              <p className='name'>Фомин Константин Игоревич
                <p className='number_phone'>+7 (930) 9233922</p></p>
              
          </div>

          <nav>
              <ul className='nav'>
                  <MenuItem lable="Обо мне" />
                  <MenuItem lable="Навыки" />
                  <MenuItem lable="Контакты" />
              </ul>
          </nav>
      </div>
      <About/>
      </div>)
}
