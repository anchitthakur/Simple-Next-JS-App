import Link from 'next/link'

function Navbar() {
  return (
    <>
      <h1>My App</h1>
      <Link href="/"><a>Home</a></Link><br />
      <Link href="/About"><a>About</a></Link><br />
      <Link href="/ApiPages"><a>API</a></Link><br />
    </>);
}

export default Navbar;