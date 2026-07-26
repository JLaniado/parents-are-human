import { creditsStyles, link } from "./Credits.css";

function Credits() {
  return (
    <div className={creditsStyles}>
      Inspired by{" "}
      <a className={link} href="https://parentsarehuman.com" target="_blank" rel="noreferrer">
        Parents Are Human
      </a>
    </div>
  );
}

export default Credits;
