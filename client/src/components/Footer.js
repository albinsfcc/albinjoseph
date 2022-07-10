import React from 'react';

function Footer() {
    const FACEBOOK_URL = "https://www.facebook.com/albinjoseph.dev";
    const INSTAGRAM_URL = "https://www.instagram.com/albinjoseph.dev/";
    const LINKEDIN_URL = "https://www.linkedin.com/in/albin-joseph-sfcc/";
    const TWITTER_URL = "https://twitter.com/albinjoseph_dev";
    const TRAILHEAD_URL = "https://trailblazer.me/id/albinjoseph";
    const GITHUB_URL = "https://github.com/albintryzens";
    const YOUTUBE_URL = "https://www.youtube.com/c/AlbinJoseph";


    return (
        <div className="footer">
            <div className="footer-inner">
                <div className="social-media">
                    <h3 className="footer-content-heading">
                        Follow Me
                    </h3>
                    <div className="social-media-icons-container">
                        <div className="social-media-icons">
                            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="icon-facebook"><i className="fab fa-facebook"></i></a>
                            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="icon-instagram"><i className="fab fa-instagram"></i></a>
                            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="icon-linkedin"><i className="fab fa-linkedin"></i></a>
                            <a href={TRAILHEAD_URL} target="_blank" rel="noopener noreferrer" className="icon-salesforce"><i className="fab fa-salesforce"></i></a>
                            <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="icon-twitter"><i className="fab fa-twitter"></i></a>
                            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="icon-github"><i className="fab fa-github"></i></a>
                            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="icon-youtube"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="rights-declaration">
                        <p className="rights-text">
                            &copy; All rights reserved to Albin Joseph, 2021
                        </p>
                        <p className="addres">
                            Kannur, Kerala
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
