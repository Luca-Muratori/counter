/* eslint-disable react/no-unknown-property */
import styles from './index.css'
export default function Title({locked}) {
  return (
    <>
      <h1 className='title'> {locked ? <span>LIMIT REACHED, PLEASE BUY THE PRO VERSION</span> : <span>Fancy Counter</span>}</h1>
      <Logo />
    </>
  );
}

export function Logo() {
  return <link rel="icon" type="image/svg+xml" href="/vite.svg" />;
}
