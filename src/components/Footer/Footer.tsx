import { AppleIcn, GooglePlayIcn } from "./Icons";
import './Footer.sass';

export default function Footer() {
  return (
    <footer>
      <div className="download-container">
        <GooglePlayIcn />
        <div className="download-text">
          <p className="download-text-small">get it on</p>
          <p className="download-text-medium">Google play</p>
        </div>
      </div>
      <div className="download-container">
        <AppleIcn />
        <div className="download-text">
          <p className="download-text-small">Available on the</p>
          <p className="download-text-medium">App Store</p>
        </div>
      </div>
    </footer>
  )
}
