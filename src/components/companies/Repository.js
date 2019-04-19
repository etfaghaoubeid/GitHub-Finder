import React from 'react';
import { Link } from 'react-router-dom';

export default function Repository({
  repo: { name, description, stargazers_count, language, forks_count },
}) {
  return (
    <div className="col-lg-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{description}</p>
          <div className="row">
            <div className="col-lg-4">
              <p>{language}</p>
            </div>
            <div className="col-lg-4">
              <p>
                <i className="far fa-star" />: {stargazers_count}
              </p>
            </div>
            <div className="col-lg-4">
              <p>
                <i className="fas fa-code-branch" />: {forks_count}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
