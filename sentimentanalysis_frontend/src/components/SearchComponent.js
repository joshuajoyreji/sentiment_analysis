import React, { useState } from 'react';
import './SearchCSS.css'
import { Input } from 'reactstrap'
import axiosInstance from '../auth/authHandler';
import { baseUrl } from '../utils/urls';

function Search() {
    const [tweet, setTweet] = useState('');
    const handleSearch = async (e) => {
        e.preventDefault();
        const authToken = localStorage.getItem('access_token');
        axiosInstance.defaults.headers['Authorization'] = `Bearer ${authToken}`;
        axiosInstance.post(`${baseUrl}/api/token/search/`, { tweet: tweet })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleChange = (event) => {
        setTweet(event.target.value);
    };

    return (
        <div className="container ">
            <div className='row '>
                <div className='mt-5 offset-5'>
                    <p className='txt'>Enter tweet to search</p>
                </div>
                <div className='row justify-content-center'>
                    <div className=' col-4 col-lg-4'>
                        <Input type="text" id="tweet" name="tweet" placeholder="Tweet..." value = {tweet} onChange={handleChange} autoComplete='off'/>
                    </div>
                    <button className="btn bttn col-2 col-lg-1" onClick={handleSearch}>
                            Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search
