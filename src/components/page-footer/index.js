import React from 'react';
import './style.scss';

function PageFooter({ author, githubUrl }) {
  return (
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © {new Date().getFullYear()}
        &nbsp;
        <a href={githubUrl}>{author}</a>
        &nbsp;powered by
        <a href="https://github.com/Choyoonyoung98/Choyoonyoung98.github.io">
          &nbsp;Choyoonyoung98.github.io
        </a>
      </p>
    </footer>
  );
}

export default PageFooter;
