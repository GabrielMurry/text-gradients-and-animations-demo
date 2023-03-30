import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImNpm } from "react-icons/im";

const NpmGithubLinks = () => {
  return (
    <div className="links-wrapper">
      <a
        className="links-npm"
        href="https://www.npmjs.com/package/react-text-gradients-and-animations"
      >
        <span>NPM</span>
        <ImNpm className="npm-logo" />
      </a>
      <a
        className="links-github"
        href="https://github.com/GabrielMurry/react-text-gradients-and-animations"
      >
        <span>Github</span>
        <FaGithub className="github-logo" />
      </a>
    </div>
  );
};

export default NpmGithubLinks;
