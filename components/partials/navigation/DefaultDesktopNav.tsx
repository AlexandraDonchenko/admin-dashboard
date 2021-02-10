import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from '../../../styles/DefaultDesktopNav.module.scss';

interface Props { }

const DefaultDesktopNav: React.FunctionComponent<Props> = (props) => (
  <div>
    <nav id={styles.nav}>
      <div id={styles.wrapper}>
        <Link href="/dashboard/Overview">
          <img id={styles.logo} src="/media/logos/logo.png" />
        </Link>
        <div>
          <Link href="/"><a id={styles.link}>Start</a></Link>
          <Link href="/Login"><a id={styles.link}>Login</a></Link>
        </div>
      </div>
    </nav>
  </div>
);

export default DefaultDesktopNav;
