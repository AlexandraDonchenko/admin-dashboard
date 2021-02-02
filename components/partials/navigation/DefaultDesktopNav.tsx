import Link from 'next/Link';
import Image from 'next/image';
import styles from '../../../styles/DefaultDesktopNav.module.scss';

interface Props { }

const DefaultDesktopNav: React.FunctionComponent<Props> = (props) => (
  <div>
    <nav id={styles.nav}>
      <div id={styles.wrapper}>
        <Link href="/">
          <a>
            <img id={styles.logo} src="/media/logos/logo.png" />
          </a>
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
