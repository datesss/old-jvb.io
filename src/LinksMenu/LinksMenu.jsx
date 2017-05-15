import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import styles from '../assets/css/main.scss';
import Link from './Link.jsx'
class LinksMenu extends React.Component {
  render() {
    const linksArray = [
      {title: 'Email', href: 'mailto:jake.brooks@midsummerish.com' },
      {title: 'Portfolio', href: 'http://midsummerish.com/portfolio' },
    ]
    const links = _.map(linksArray, (link,i) => { return (<li key={i}><Link href={link.href} title={link.title} /></li>)});
    return (
      <div className={styles.LinksMenu}>
      <ul>
      {links}
    </ul>
  </div>)
  }
}

export default LinksMenu;
