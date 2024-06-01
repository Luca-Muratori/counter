/* eslint-disable react/no-unknown-property */
export default function Title() {
  return (
    <>
      <h1> Fancy Counter</h1>
      <Logo />
    </>
  );
}

export function Logo() {
  return <link rel="icon" type="image/svg+xml" href="/vite.svg" />;
}
