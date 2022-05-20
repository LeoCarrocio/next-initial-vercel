
import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map((menuItem, index) => { 
          return (
              <ActiveLink key={index} href={menuItem.href}  text={menuItem.text}/>
          )
        })
      }
    {/* 
      <ActiveLink href="/"  text= "Home"/>
      <ActiveLink href="/about" text= "About"/>
      <ActiveLink href="/contact" text= "Contact"/> 
      */}
    </nav>
  )

}