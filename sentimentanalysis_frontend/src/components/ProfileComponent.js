import React from 'react';
import './ProfileCSS.css'

function Profile() {
    // Sample data for past searches
    const pastSearches = [
        { id: 1, query: 'Etayi Coffee' },
        { id: 2, query: 'Enthanu bro modayano' },
        { id: 3, query: 'De chechi pinneyum ' },
        { id: 4, query: 'VISHNUUUU ' },
    ];

    return (
        <div className="container">
            <div className="row mt-5 justify-content-center align-items-center">
                <div className="col-md-2 text-center">
                    <div className="avatar">
                        <img src="/avatar.avif" alt="Profile Avatar" className="rounded-circle avatar-image" />
                    </div>
                </div>
                <div className="col-md-4">
                    <h2>Moda Bro</h2>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <h4>Past Searches</h4>
                    <ul className="list-group">
                        {pastSearches.map((search) => (
                            <li key={search.id} className="list-group-item">
                                {search.query}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Profile;
