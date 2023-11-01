import Link from "next/link";
import MyFontAwesomeIcon from "./MyFontAwesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Links() {
  return (
    <div>
      <Link
        aria-label="Visit my Github"
        rel="noreferrer"
        target="_blank"
        href="https://github.com/RyanJMS"
        className="px-2"
      >
        <MyFontAwesomeIcon size="lg" icon={faGithub} />
      </Link>
      <Link
        aria-label="Visit my Linkedin"
        href="https://www.linkedin.com/in/ryanjmschock/"
        rel="noreferrer"
        target="_blank"
        className="px-2"
      >
        {" "}
        <MyFontAwesomeIcon size="lg" icon={faLinkedin} />
      </Link>
      <Link
        aria-label="Visit my Twitter"
        href="https://twitter.com/dev_RyanJMS"
        rel="noreferrer"
        target="_blank"
        className="px-2"
      >
        {" "}
        <MyFontAwesomeIcon size="lg" icon={faTwitter} />
      </Link>
      <Link
        aria-label="Send me an email"
        href="mailto:ryanjms613@gmail.com"
        rel="noreferrer"
        target="_blank"
        className="px-2"
      >
        {" "}
        <MyFontAwesomeIcon size="lg" icon={faEnvelope} />
      </Link>
    </div>
  );
}
