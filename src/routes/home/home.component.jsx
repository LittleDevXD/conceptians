import './home.styles.css';

const Home = () => {
    return (
        <div>
            <section class="introduction">
                <div class="container">
                    <div class="flex intro">
                        <div class="left intro">
                            <h1>
                                A Community Built For <br />
                                all the International Students
                            </h1>
                            <p>
                                Dear freshmen,
                                Even the greatest were beginners.
                                Follow our lead <br /> to find yourself.
                            </p>
                            <button class="btn btn-intro">
                                Explore Articles
                            </button>
                        </div>
                        <div class="right intro">
                            <img src="/assets/images/intro.png" alt="" />
                        </div>
                    </div>
                    <div class="intro-links flex">
                        <div class="line"></div>
                        <div class="links">
                            <a href="">
                                <img src="/assets/icons/facebookicon.png" alt="" />
                            </a>
                            <a href="">
                                <img src="/assets/icons/youtubeicon.png" alt="" />
                            </a>
                            <a href="">
                                <img src="/assets/icons/discordicon.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="community">
                <div class="container">
                    <div class="flex com">
                        <div class="left com">
                            <h1>Join our Community</h1>
                            <p>Meet people with same interest and enlarge<br/> your network circle.</p>
                            <button class="btn btn-sm">Learn more</button>
                        </div>
                        <div class="right com">
                            <img src="/assets/images/community.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="blog-sec">
                <div class="container">
                    <div class="flex blog">
                        <div class="left blog">
                            <img src="/assets/images/blog.jpg" alt="" />
                        </div>
                        <div class="right blog">
                            <h1>Read our Blogs</h1>
                            <p>We have 100+ articles to help you understand more about <br/>
                                your academic pathways. </p>
                            <button class="btn btn-sm">Learn more</button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="podcast-sec">
                <div class="container">
                    <div class="flex pod">
                        <div class="left pod">
                            <h1>Join our Podcast</h1>
                            <p>We are very proud to announce that we are launching a podcast <br/>
                                where we meet and talk with senior students who have succeeded <br/>
                                in their academic lives.  
                            </p>
                            <button class="btn btn-sm">Learn more</button>
                        </div>
                        <div class="right pod">
                            <img src="/assets/images/podcast.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;