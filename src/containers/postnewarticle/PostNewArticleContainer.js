import React from 'react'
import ArticleImg from '../../images/related-articles-img.png'


const PostNewArticleContainer = () => {  

  return (
      <div className="wrapper">        
        <section class="post-story-sec">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="post-story-inner">
                                <h3>Enter the link of the article you want to share:</h3>
                                <form>
                                    <div class="row">
                                        <div class="col-md-7">
                                            <div class="form-group">
                                                <label>Article Link</label>
                                                <input type="text" class="form-control" placeholder="https://www.fnmotivation.com/category/weight-issues/d3t2mdqfcz6m5mjpbeaucsgkj/" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <a class="post-btn preview-article" href="#">Preview Article</a>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <a href="#">
                                                <div class="related-articles-box">
                                                    <div class="image-holder">
                                                        <img src={ArticleImg} alt="" class="img-fluid"/>
                                                    </div>
                                                    <div class="text-box">
                                                        <h4>Former model on childhood trauma, eating disorders and mental health</h4>
                                                        <span>www.fnmotivation.com</span>
                                                        <p>https://www.fnmotivation.com/category/weight-issues/d3t2mdqfcz6m5mjpbeaucsgkj/</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Select Category</label>
                                                <select class="form-control">
                                                    <option>Heart Diseases</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div> 
                                    <div class="form-group">
                                        <a class="post-btn" href="#">Post Story</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      </div>
  )
}
export default PostNewArticleContainer