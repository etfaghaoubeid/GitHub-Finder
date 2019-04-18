import React from 'react';
import { Link } from 'react-router-dom';

export default function RepoInfos({ repo: { name, description, language, clone_url } }) {
  return (
    <div className="col-lg-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{name}</h4>

          <p className="card-text">{description}</p>
          <a href="#" className="card-link">
            {language}
          </a>
          <Link to={clone_url} className="card-link">
            Clone Url
          </Link>
        </div>
      </div>
    </div>
  );
}
