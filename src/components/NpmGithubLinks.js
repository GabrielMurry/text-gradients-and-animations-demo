import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImNpm } from "react-icons/im";

const NpmGithubLinks = () => {
  return (
    <div className="links-wrapper">
      <div className="links-npm">
        <span>NPM</span>
        <ImNpm className="npm-logo" />
      </div>
      <div className="links-github">
        <span>Github</span>
        <FaGithub className="github-logo" />
      </div>
    </div>
  );
};

export default NpmGithubLinks;
