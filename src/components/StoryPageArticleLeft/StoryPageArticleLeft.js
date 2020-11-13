import React from 'react'
import { Link } from 'react-router-dom'
import UserImg from '../../images/user-icon.png'
import ShareHoverImg from '../../images/share-hover.svg'
import ThumbUpHoverImg from '../../images/thumb-up-hover.svg'
import BookMarkHoverImg from '../../images/bookmark-hover.svg'
import ShareImg from '../../images/share-icon.svg'
import ThumbUpImg from '../../images/thumb-up-icon.svg'
import BookMarkImg from '../../images/bookmark-icon.svg'
import DrugAddictionImg from '../../images/drug-addiction-img.png'

const StoryPageArticleLeft = () => {

  return (
    <div>
        <div className="article-left">
                                <div className="breadcrumb-main">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item"><a href="/storyPage">Drug Addiction</a></li>
                                        <li className="breadcrumb-item active">Heroin Addiction</li>
                                    </ol>
                                </div>
                                <div className="article-blog">
                                    <div className="text-box">
                                        <span>Drug Addiction</span>
                                        <div className="article-title">
                                            <div className="article-title-left">
                                                <h2>Heroin Addiction</h2>
                                                <p>07/30/20 7:40 PM</p>
                                                <div className="article-title-user">
                                                    <div className="user-holder">
                                                        <img src={UserImg} alt="" fluid/>
                                                    </div>
                                                    <div className="text-inner">
                                                        <h3>bellajhuskey</h3>
                                                        <h4>Follow</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="article-title-right">
                                                <ul>
                                                    <li><a href="#"><img src={ShareImg} className="simple-state" alt=""/> <img src={ShareHoverImg} className="hover-state" alt=""/></a></li>
                                                    <li className="active"><a href="#"><strong>1</strong><img src={ThumbUpImg} className="simple-state" alt=""/><img src={ThumbUpHoverImg} className="hover-state" alt=""/></a></li>
                                                    <li><a href="#"><img src={BookMarkImg} className="simple-state" alt=""/><img src={BookMarkHoverImg} className="hover-state" alt=""/></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="story-page-text">
                                        <p>I was diagnosed with depression, anxiety and OCD when i was 10. I started visting a psychiatrist, i got some pills, nothing special. It kinda sucked that i had to deal with all that from a young age, but little did i know... Not much has changed in the next 3 years, but it suddenly got much worse, i was in a very dark place. My mom and sister died in a car accident. I don't know why but my dad kept blaming me for that. I started feeling suicidal. I wanted to die and end it all but i also wanted to live cause i knew how nice life can get, i was only 13, i had so much to live for. That's when i tried heroin and i gotta say, it saved my life. I'm not encouraging anyone to try it but in this situation i feel like that was the only help. I became an addict. I didn't know how addictive it actually is. I started panicking. I needed it but i didn't have enough money to buy it. </p>
                                        <p>Then my friend and her family said i can live with them till we figure something out, so i did. They helped me out. They talked to me, they cared about me, they payed for a rehab. I went to rehab for 2 weeks. It helped. I still have depression and sometimes i crave heroin, but it's much easier to control it. I really miss my mom and sister, i cry every day because it's hard to deal with the fact that someone you loved is gone and will never come back, but i'd say that my life is pretty okay now. I want to end this by saying few more things. If you are addicted, don't be embarrassed to share that with others, to seek help. If somebody wants to help you, appreciate it and let them help you. Go to rehab, it does help. And for those who want to help someone who is trapped in addiction, talk to them, that is the best way to help them, it shows that you care. Try to understand them, they want to stop it as much as you do, but it's not easy at all.</p>
                                    </div>
                                    <div className="article-title-right mobile-version">
                                        <ul>
                                            <li><a href="#"><img src={ShareImg} className="simple-state" alt=""/> <img src={ShareHoverImg} className="hover-state" alt=""/></a></li>
                                            <li className="active"><a href="#"><strong>1</strong><img src={ThumbUpImg} className="simple-state" alt=""/><img src={ThumbUpHoverImg} className="hover-state" alt=""/></a></li>
                                            <li><a href="#"><img src={BookMarkImg} className="simple-state" alt=""/><img src={BookMarkHoverImg} className="hover-state" alt=""/></a></li>
                                        </ul>
                                    </div>
                                    <div className="story-tag">
                                        <h3>Tags</h3>
                                        <ul>
                                            <li>depression</li>
                                            <li>loss</li>
                                            <li>heroin</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="article-comments">
                                    <div className="article-comments-write">
                                        <h3>Comments</h3>
                                        <textarea className="form-control" placeholder="Write here...."></textarea>
                                        <div className="comment-post">
                                            <a href="#">Post</a>
                                            <span>0/500</span>
                                        </div>
                                    </div>
                                    <div className="article-comments-reply">
                                        <div className="image-holder">
                                            <img src={UserImg} alt="" fluid/>
                                        </div>
                                        <div className="text-box">
                                            <h3>aamir91</h3>
                                            <div className="reply-box">
                                                <h4>Great post</h4>
                                                <span>07/30/20   7:30 PM</span>
                                            </div>
                                            <ul>
                                                <li><a href="#">Reply</a></li>
                                                <li><a href="#">Edit</a></li>
                                                <li><a href="#">Report</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="related-articles">
                                    <h3>Related Articles</h3>
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <a href="#">
                                                <div className="related-articles-box">
                                                    <div className="image-holder">
                                                        <img src={DrugAddictionImg} alt="" fluid/>
                                                    </div>
                                                    <div className="text-box">
                                                        <h4>Heroin Addiction</h4>
                                                        <span>bellajhuskey</span>
                                                        <p>I was diagnosed with depression, anxiety and OCD when i was 10.</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <a href="#">
                                                <div className="related-articles-box">
                                                    <div className="image-holder">
                                                        <img src={DrugAddictionImg} alt="" fluid/>
                                                    </div>
                                                    <div className="text-box">
                                                        <h4>Heroin Addiction</h4>
                                                        <span>bellajhuskey</span>
                                                        <p>I was diagnosed with depression, anxiety and OCD when i was 10.</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 d-none d-sm-block">
                                            <a href="#">
                                                <div className="related-articles-box">
                                                    <div className="image-holder">
                                                        <img src={DrugAddictionImg} alt="" fluid/>
                                                    </div>
                                                    <div className="text-box">
                                                        <h4>Heroin Addiction</h4>
                                                        <span>bellajhuskey</span>
                                                        <p>I was diagnosed with depression, anxiety and OCD when i was 10.</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 d-none d-sm-block">
                                            <a href="#">
                                                <div className="related-articles-box">
                                                    <div className="image-holder">
                                                        <img src={DrugAddictionImg} alt="" fluid/>
                                                    </div>
                                                    <div className="text-box">
                                                        <h4>Heroin Addiction</h4>
                                                        <span>bellajhuskey</span>
                                                        <p>I was diagnosed with depression, anxiety and OCD when i was 10.</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
    </div>
  )
}
  
export default StoryPageArticleLeft