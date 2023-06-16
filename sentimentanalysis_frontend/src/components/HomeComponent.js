import React from 'react';
import { Link } from 'react-router-dom';
import './HomeCSS.css'
import Search from '../assets/search.png';
import Dataset from '../assets/dataset.png'
import History from '../assets/history.png'
function Home({ isLoggedIn }) {
    const features = [
        { title: 'Dataset Analysis: Perform sentiment analysis on a pre-existing dataset of tweets', image: Dataset },
        { title: 'Tweet Analysis: Provide a tweet text and get its sentiment classification.', image: Search },
        { title: 'Data Visualization: Visualize sentiment analysis results using charts, graphs, or word clouds.', image: '/path/to/export-and-save-results.png' },
        { title: 'View History: Easily access and review your past searches to see the sentiment analysis results of previous tweets.', image: History },
    ];
    return (
        <div className="container mt-5">
            <h1 className='head'>Welcome to Twitter Sentiment Analysis</h1>
            <p className='para'>
                This application performs sentiment analysis on tweets to classify them as positive or negative. It uses machine learning techniques to analyze the sentiment expressed in the text of the tweets and provides insights into the overall sentiment of the dataset.
            </p>
            <h2 className='head2 mt-4'>Features:</h2>
            <div className="row">
                {features.map((feature, index) => (
                    <div key={index} className="col-md-6">
                        <div className="card mb-3 card-with-border">
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title">{feature.title}</h5>
                                <div className="d-flex justify-content-center">
                                    <img src={feature.image} alt={feature.title} className="card-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className='heading mt-4'>How to Use:</h2>
            <ol>
                <li className='list'>Login with your email/username and password. If you don't have an account, sign up first.</li>
                <li className='list'>Navigate to the search page.</li>
                <li className='list'>Enter the tweet text in the input field and click the "Search" button.</li>
                <li className='list'>View the sentiment analysis result, which will classify the tweet as positive or negative.</li>
                <li className='list'>Explore additional features like data visualization and exporting results.</li>
            </ol>
            <p className='endpara'>
                By analyzing the sentiment of tweets, you can gain insights into public opinion, track brand sentiment, or understand the sentiment expressed in specific tweets. Start analyzing tweet sentiments now and discover valuable insights from your dataset.
            </p>
            {isLoggedIn ? (
                <Link to="/search" className="btn  bttn">Search</Link>
            ) : (
                <Link to="/login" className="btn bttn">Get Started</Link>)}
            <div className='mt-4'>

            </div>
        </div>
    )
}

export default Home;