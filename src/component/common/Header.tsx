import React from 'react'
import jpegArmyLogo from '../../assets/images/logo.png';

const Header = () => {
  const menu = [
    {
      'label': 'Welcome',
      'link': '#welcome',
    },
    {
      'label': 'About',
      'link': '#about'
    },
    {
      'label': 'Roadmap',
      'link': '#roadmap'
    },
    {
      'label': 'Team',
      'link': '#team'
    },
    {
      'label': 'FAQ',
      'link': '#faq'
    }
  ]

  return (
    <div className="header">
      <a href="/">
        <img src={jpegArmyLogo} alt="Header Logo" />
      </a>

      <div className="header__box">
        <ul className="header__menu">
          {menu.map(item => (
              <li 
                className="header__menu-item"
                key={`header-menu-${item.label}`}
              >
                <a href={item.link}>
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  )
}

export default Header