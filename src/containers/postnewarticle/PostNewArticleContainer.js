import React from 'react'
import ArticleImg from '../../images/related-articles-img.png'
import {connect} from "react-redux";
import {getLinkPreview1, postNewsArticle} from "../../actions/articles";
import { getCategories } from "../../actions/articles";


class PostNewArticleContainer extends React.Component { 

    constructor(props){
        super(props);

        this.state= {
            preview : "",
            categoryId: "0",
            submitted: false
        }


        this.handleChange = this.handleChange.bind(this);
        this.handlePreviewClick = this.handlePreviewClick.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(getCategories());

    }

    handleChange(event){
        event.preventDefault();

        const {name, value} = event.target;
        //console.log(name + " " + value);

        this.setState({preview: value});
        console.log(this.state.preview);

    }

    handlePreviewClick(event){
        event.preventDefault();

        this.props.dispatch(getLinkPreview1(this.state.preview));
        
        
        // this.setState({title: data.title});
        // this.setState({link: data.link});
        // this.setState({image: data.image});
        // this.setState({description: data.description});
    }

    handleSelectChange(event){
        event.preventDefault();

        const {name, value} = event.target;
        this.setState({categoryId: value});

    }

    handleSubmit(event){
        event.preventDefault();
        
        this.setState({submitted: true});

        let config = {
            title: this.props.linkPreviewData.title,
            intro: this.props.linkPreviewData.description,
            outer: true,
            outer_image: this.props.linkPreviewData.image,
            outer_url: this.props.linkPreviewData.link,
            article_category: this.state.categoryId,
            article_author: this.props.auth.id
        }

        this.props.dispatch(postNewsArticle(config));

    }

    render() {
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
                                                      <input type="text" class="form-control" name="preview" onChange={this.handleChange} placeholder="https://www.fnmotivation.com/category/weight-issues/d3t2mdqfcz6m5mjpbeaucsgkj/" />
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <a class="post-btn preview-article" href="" onClick={this.handlePreviewClick}>Preview Article</a>
                                          </div>
                                         { this.props.linkPreviewData.isLinked && 
                                         <>
                                          <div class="row">
                                              <div class="col-md-4">
                                                  <a href={this.props.linkPreviewData.link}>
                                                      <div class="related-articles-box">
                                                          <div class="image-holder">
                                                            { 
                                                                <img src={this.props.linkPreviewData.image} alt="" class="img-fluid"/>
                                                            }
                                                              
                                                          </div>
                                                          <div class="text-box">
                                                              <h4></h4>
                                                              <span>{this.props.linkPreviewData.title}</span>
                                                              <p>{this.props.linkPreviewData.link}</p>
                                                          </div>
                                                      </div>
                                                  </a>
                                              </div>
                                          </div>
                                          <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label>Select Category</label>
                                                      <select class="form-control" onChange={this.handleSelectChange}>
                                                          <option value="0">Communities</option>
                                                          { this.props.categories && this.props.categories.map(function(category) {
                                                                return (
                                                                <option value={category.id}>{category.title}</option>
                                                                );
                                                            }) }
                                                      </select>
                                                      {this.state.submitted && this.state.categoryId == "0" && <div className="help-block">Please select a category</div> }
                                                  </div>
                                              </div>
                                          </div> 
                                          <div class="form-group">
                                              <a class="post-btn" href="" onClick={this.handleSubmit}>Post Story</a>
                                          </div>
                                        </>
                                        }
                                      </form>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
            </div>
        )
    }
}
function mapStateToProps(state){

    const {linkPreviewData} = state.articles || {};
    const { categories } = state.articles || {};
    const {auth} = state;

    return {
        linkPreviewData,
        categories,
        auth
    }
}
export default connect(mapStateToProps)(PostNewArticleContainer)