export function Header({ toggleSideBar }) {
  return (
    <header>
      <button onClick={toggleSideBar}>☰</button>
      <h1>Portfolio of Rushiraj</h1>
    </header>
  );
}
