import Link from 'next/link';

import classes from './header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/products'>Play Next</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li> 
           
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
