import React from 'react';
import { Badge } from 'react-bootstrap';

function Repos({ repos }) {
    return (
        <>
            <h3 className="page-heading mb-3">Latest Repos</h3>
            {repos.map((repo) => (
                <div key={repo.id} className="card card-body mb-2">
                    <div className="row">
                        <div className="col-md-6">
                            <a href={repo.html_url} target="_blank">
                                {repo.name}
                            </a>
                        </div>
                        <div className="col-md-6">
                            <Badge bg="primary">
                                Stars: {repo.stargazers_count}
                            </Badge>
                            <Badge bg="secondary">
                                Watchers: {repo.watchers_count}
                            </Badge>
                            <Badge bg="success">
                                Forks: {repo.forks_count}
                            </Badge>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Repos;
