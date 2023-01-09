import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import Repos from './Repos';

function Profile({ profile, reposData }) {
    return (
        <>
            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-3">
                        <img
                            className="img-fluid mb-2"
                            src={profile.avatar_url}
                        />
                        <Button
                            href={profile.html_url}
                            target="_blank"
                            className="btn btn-primary btn-block mb-4"
                        >
                            View Full Profile
                        </Button>
                    </div>
                    <div className="col-md-9">
                        <Badge bg="primary">
                            Public Repos: {profile.public_repos}
                        </Badge>
                        <Badge bg="secondary">
                            Public Gists: {profile.public_gists}
                        </Badge>
                        <Badge bg="success">
                            Followers: {profile.followers}
                        </Badge>
                        <Badge bg="info">Following: {profile.following}</Badge>
                        <br />
                        <ul className="list-group">
                            <li className="list-group-item">
                                Company: {profile.company}
                            </li>
                            <li className="list-group-item">
                                Website/Blog:{' '}
                                <a href={profile.blog}>{profile.blog}</a>
                            </li>
                            <li className="list-group-item">
                                Location: {profile.location}
                            </li>
                            <li className="list-group-item">
                                Member Since: {profile.created_at}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Repos repos={reposData} />
        </>
    );
}

export default Profile;
