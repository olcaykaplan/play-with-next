import { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer'

import classes from './layout.module.css';

function Layout(props) {
  return (
    <Fragment className={classes.main}>
      <Header/>
      <main>{props.children}</main>
      <Footer/>
    </Fragment>
  );
}

export default Layout;
