/* eslint-disable react/no-unknown-property */
import styles from './index.css'
export default function Title() {
  return (
    <>
      <h1 className='title'> Fancy Counter</h1>
      <Logo />
    </>
  );
}

export function Logo() {
  return <link rel="icon" type="image/svg+xml" href="/vite.svg" />;
}
