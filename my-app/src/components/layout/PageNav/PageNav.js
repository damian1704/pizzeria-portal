import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.scss';
import {Link} from 'react-router-dom';


const PageNav = () => {
  return (
    <nav className={styles.component}>
      <Link className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</Link>
      <Link className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Link>
      <Link className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Link>
      <Link className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/ordering`} activeClassName='active'>Ordering</Link>
      <Link className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Link>
    </nav> 
  );
};

export default PageNav;

