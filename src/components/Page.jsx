import React from 'react';
import Profile from './Profile';

function Page() {
    return (
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
    );
}

export default Page;
