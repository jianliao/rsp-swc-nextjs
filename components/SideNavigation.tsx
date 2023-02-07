import '@spectrum-css/sidenav/dist/index-vars.css';
import styles from './SideNavigation.module.css';
import classNames from 'classnames';
import Link from 'next/link';

export default function SideNavigation() {
  return (
    <div className={styles.siteSideBar} id="site-overlay">
      <Link href="/" className={styles.siteSideBarHeader}>
        <h2 className={styles.siteTitle}>Next+RSP+SWC</h2>
      </Link>
      <div className={classNames(styles.scrollable, styles.siteNav)}>
        <nav>
          <ul className="spectrum-SideNav spectrum-SideNav--multiLevel">
            <li className="spectrum-SideNav-item">
              <a className="spectrum-SideNav-itemLink">Buttons</a>
              <ul className="spectrum-SideNav">
                <li className="spectrum-SideNav-item">
                  <Link href="/components/actionbutton" className="spectrum-SideNav-itemLink">
                    ActionButton
                  </Link>
                </li>
                <li className="spectrum-SideNav-item">
                  <Link href="/components/actiongroup" className="spectrum-SideNav-itemLink">
                    ActionGroup
                  </Link>
                </li>
                <li className="spectrum-SideNav-item">
                  <Link href="/components/button" className="spectrum-SideNav-itemLink">
                    Button
                  </Link>
                </li>
                <li className="spectrum-SideNav-item">
                  <Link href="/components/buttongroup" className="spectrum-SideNav-itemLink">
                    ButtonGroup
                  </Link>
                </li>
                <li className="spectrum-SideNav-item">
                  <Link href="/components/logicbutton" className="spectrum-SideNav-itemLink">
                    LogicButton
                  </Link>
                </li>
                <li className="spectrum-SideNav-item">
                  <Link href="/components/progresscircle" className="spectrum-SideNav-itemLink">
                    ProgressCircle
                  </Link>
                </li>
                <li className="spectrum-SideNav-item">
                  <Link href="/components/radio" className="spectrum-SideNav-itemLink">
                    RadioButton
                  </Link>
                </li>
                <li className="spectrum-SideNav-item">
                  <Link href="/components/togglebutton" className="spectrum-SideNav-itemLink">
                    ToggleButton
                  </Link>
                </li>
              </ul>
            </li>
            <li className="spectrum-SideNav-item">
              <a className="spectrum-SideNav-itemLink">Collections</a>
              <ul className="spectrum-SideNav">
                <li className="spectrum-SideNav-item">
                  <Link href="/components/actionmenu" className="spectrum-SideNav-itemLink">
                    ActionMenu
                  </Link>
                </li>
                <li className="spectrum-SideNav-item">
                  <Link href="/components/listbox" className="spectrum-SideNav-itemLink">
                    ListBox
                  </Link>
                </li>
                <li className="spectrum-SideNav-item">
                  <Link href="/components/menutrigger" className="spectrum-SideNav-itemLink">
                    MenuTrigger
                  </Link>
                </li>
                <li className="spectrum-SideNav-item">
                  <Link href="/components/tableview" className="spectrum-SideNav-itemLink">
                    TableView
                  </Link>
                </li>
                <li className="spectrum-SideNav-item">
                  <Link href="/components/togglebutton" className="spectrum-SideNav-itemLink">
                    ToggleButton
                  </Link>
                </li>
                <li className="spectrum-SideNav-item">
                  <Link href="/components/layout" className="spectrum-SideNav-itemLink">
                    Layout
                  </Link>
                </li>
              </ul>
            </li>
            <li className="spectrum-SideNav-item">
              <a className="spectrum-SideNav-itemLink">Color</a>
            </li>
            <li className="spectrum-SideNav-item">
              <a className="spectrum-SideNav-itemLink">Forms</a>
            </li>
            <li className="spectrum-SideNav-item">
              <a className="spectrum-SideNav-itemLink">Icons</a>
            </li>
            <li className="spectrum-SideNav-item">
              <a className="spectrum-SideNav-itemLink">Navigation</a>
            </li>
            <li className="spectrum-SideNav-item">
              <a className="spectrum-SideNav-itemLink">Overlays</a>
            </li>
            <li className="spectrum-SideNav-item">
              <a className="spectrum-SideNav-itemLink">Pickers</a>
            </li>
            <li className="spectrum-SideNav-item">
              <a className="spectrum-SideNav-itemLink">Sliders</a>
            </li>
            <li className="spectrum-SideNav-item">
              <a className="spectrum-SideNav-itemLink">Status</a>
            </li>
            <li className="spectrum-SideNav-item">
              <a className="spectrum-SideNav-itemLink">Content</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
