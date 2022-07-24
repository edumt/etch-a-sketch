import { SFooter } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <SFooter>
      <a href="https://github.com/edumt" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/edumt/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </SFooter>
  );
};

export default Footer;
