import React from 'react';
import { Link } from 'react-router-dom';

export default function Repository(props) {
  const { name, description, language, forks, stargazers_count } = props.repo;
  return (
    <div className="col-lg-4">
      <div className="github-cards">
        <Link
          to="https://github.com/Nexmo/nexmo-ruby"
          className="github-card"
          data-github="Nexmo/nexmo-ruby"
        >
          <h3>{name}</h3>
          <p>{description}</p>
          <span className="github-card__meta">
            <span className="github-card__language-icon">●</span> {language}
          </span>
          <span className="github-card__meta">
            <i className="fa fa-star" />
            <span data-stars>
              {!stargazers_count ? (
                <i className="fa fa-spinner" aria-hidden="true" />
              ) : (
                stargazers_count
              )}
            </span>
          </span>
          <span className="github-card__meta">
            <i className="fa fa-code-branch" />
            {!forks ? (
              <span data-forks>
                <i className="fa fa-spinner" aria-hidden="true" /> forks
              </span>
            ) : (
              forks
            )}
          </span>
        </Link>
      </div>
    </div>
  );
}
