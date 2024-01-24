import logo from '../assets/logo.png';
// header部分のCSSをHeader.cssへ移し、importで読み込み
import './Header.css';
export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
