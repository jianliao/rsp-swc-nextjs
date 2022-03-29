import '@spectrum-css/sidenav/dist/index-vars.css';
import styles from './SideNavigation.module.css';
import classNames from 'classnames';
import Link from 'next/link';

export default function SideNavigation() {
  return (
    <div className={styles.siteSideBar} id='site-overlay'>
      <Link href='/'>
        <a className={styles.siteSideBarHeader}>
          <h2 className={styles.siteTitle}>RSP + Next.js</h2>
        </a>
      </Link>
      <div className={classNames(styles.scrollable, styles.siteNav)}>
        <nav>
          <ul className='spectrum-SideNav spectrum-SideNav--multiLevel'>
            <li className='spectrum-SideNav-item'>
              <a className='spectrum-SideNav-itemLink'>Buttons</a>
              <ul className='spectrum-SideNav'>
                <li className='spectrum-SideNav-item'>
                  <Link href='/components/actionbutton'>
                    <a className='spectrum-SideNav-itemLink'>ActionButton</a>
                  </Link>
                </li>
                <li className='spectrum-SideNav-item'>
                  <Link href='/components/actiongroup'>
                    <a className='spectrum-SideNav-itemLink'>ActionGroup</a>
                  </Link>
                </li>
                <li className='spectrum-SideNav-item'>
                  <Link href='/components/button'>
                    <a className='spectrum-SideNav-itemLink'>Button</a>
                  </Link>
                </li>
                <li className='spectrum-SideNav-item'>
                  <Link href='/components/buttongroup'>
                    <a className='spectrum-SideNav-itemLink'>ButtonGroup</a>
                  </Link>
                </li>
                <li className='spectrum-SideNav-item'>
                  <Link href='/components/logicbutton'>
                    <a className='spectrum-SideNav-itemLink'>LogicButton</a>
                  </Link>
                </li>
                <li className='spectrum-SideNav-item'>
                  <Link href='/components/togglebutton'>
                    <a className='spectrum-SideNav-itemLink'>ToggleButton</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className='spectrum-SideNav-item'>
              <a className='spectrum-SideNav-itemLink'>Collections</a>
              <ul className='spectrum-SideNav'>
                <li className='spectrum-SideNav-item'>
                  <Link href='/components/actionmenu'>
                    <a className='spectrum-SideNav-itemLink'>ActionMenu</a>
                  </Link>
                </li>
                <li className='spectrum-SideNav-item'>
                  <Link href='/components/listbox'>
                    <a className='spectrum-SideNav-itemLink'>ListBox</a>
                  </Link>
                </li>
                <li className='spectrum-SideNav-item'>
                  <Link href='/components/menu'>
                    <a className='spectrum-SideNav-itemLink'>Menu</a>
                  </Link>
                </li>
                <li className='spectrum-SideNav-item'>
                  <Link href='/components/menutrigger'>
                    <a className='spectrum-SideNav-itemLink'>MenuTrigger</a>
                  </Link>
                </li>
                <li className='spectrum-SideNav-item'>
                  <Link href='/components/tableview'>
                    <a className='spectrum-SideNav-itemLink'>TableView</a>
                  </Link>
                </li>
                <li className='spectrum-SideNav-item'>
                  <Link href='/components/togglebutton'>
                    <a className='spectrum-SideNav-itemLink'>ToggleButton</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className='spectrum-SideNav-item'>
              <a className='spectrum-SideNav-itemLink'>Color</a>
            </li>
            <li className='spectrum-SideNav-item'>
              <a className='spectrum-SideNav-itemLink'>Forms</a>
            </li>
            <li className='spectrum-SideNav-item'>
              <a className='spectrum-SideNav-itemLink'>Icons</a>
            </li>
            <li className='spectrum-SideNav-item'>
              <a className='spectrum-SideNav-itemLink'>Navigation</a>
            </li>
            <li className='spectrum-SideNav-item'>
              <a className='spectrum-SideNav-itemLink'>Overlays</a>
            </li>
            <li className='spectrum-SideNav-item'>
              <a className='spectrum-SideNav-itemLink'>Pickers</a>
            </li>
            <li className='spectrum-SideNav-item'>
              <a className='spectrum-SideNav-itemLink'>Sliders</a>
            </li>
            <li className='spectrum-SideNav-item'>
              <a className='spectrum-SideNav-itemLink'>Status</a>
            </li>
            <li className='spectrum-SideNav-item'>
              <a className='spectrum-SideNav-itemLink'>Content</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
