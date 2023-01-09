import React from 'react';
import Profile from './Profile';
import keys from '../keys';

function Section() {
    const [user, setUser] = React.useState('dizzyDoc');
    const [profile, setProfile] = React.useState({});
    const [repos, setRepos] = React.useState([]);
    const [submit, setSubmit] = React.useState(false);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        fetch(
            `https://api.github.com/users/${user}?client_id=${keys.client_id}&client_secret=${keys.client_secret}`
        )
            .then((data) => data.json())
            .then((data) => setProfile(data))
            .catch((err) => {
                setError(true);
            });

        fetch(
            `https://api.github.com/users/${user}/repos?per_page=${keys.repos_count}&sort=${keys.repos_sort}&client_id=${keys.client_id}&client_secret=${keys.client_secret}`
        )
            .then((data) => data.json())
            .then((data) => setRepos(data))
            .catch((err) => {
                setError(true);
            });
    }, [submit]);

    function handleChange(e) {
        setUser(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmit((prev) => !prev);
    }

    return (
        <>
            {error ? (
                <Error />
            ) : (
                <main className="container searchContainer">
                    <div className="search card card-body">
                        <h1>Search GitHub Users</h1>
                        <p className="lead">
                            Enter a username to fetch a user profile and repos
                        </p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={user}
                                placeholder="GitHub Username..."
                                className="form-control"
                                onChange={handleChange}
                            />
                        </form>
                    </div>
                    <br />
                    <Profile profile={profile} reposData={repos} />
                </main>
            )}
        </>
    );
}

export default Section;
