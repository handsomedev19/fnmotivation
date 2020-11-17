import React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCategories } from "../../actions/articles";
import { postStory } from "../../actions/articles";

class PostStoryContainer extends React.Component {  

    constructor(props){
        super(props);

        this.state = {
            tempArticle: {
                tempTitle: '',
                tempCategory: '0',
                tempIntro: '',
                tempBody: '',
                tempTag: '',
            },
            tempImage: '',
            tempSubmitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageInputChange = this.handleImageInputChange.bind(this);
    }

    componentWillMount(){
        this.props.dispatch(getCategories());
    }

    componentWillReceiveProps(nextProps) {
       console.log(nextProps);
       //console.log("status: ", nextProps.articles.message);
    }

    handleChange(event) {    
        const { name, value } = event.target;
        const { tempArticle } = this.state;
        this.setState({
            tempArticle: {
                ...tempArticle,
                [name]: value
            }
        });

        console.log(name);
        console.log(value);
    }

    handleImageInputChange(event) {
        this.setState({
                tempImage: event.target.files[0],
            });
        console.log(event.target.files[0]);
        console.log(this.state.tempImage);
    }

    handleSubmit(event){
        event.preventDefault();

        console.log(this.state.tempArticle.tempTitle);
        console.log(this.state.tempArticle.tempCategory);
        console.log(this.state.tempArticle.tempIntro);
        console.log(this.state.tempArticle.tempTag);

        this.setState({tempSubmitted: true});
        
        const { tempArticle } = this.state;

        const formData = new FormData();
        formData.append('file', this.state.tempImage);

        // console.log("submittion data");
        // console.log(tempArticle.tempImage);
        // console.log(tempArticle.tempImage);

        const config = {
            title: tempArticle.tempTitle,
            article_category: tempArticle.tempCategory,
            intro: tempArticle.tempIntro,
            body: tempArticle.tempBody,
            //tag: tempArticle.tempTag,
            thumb: formData
        }

        //if (tempArticle.tempTitle && tempArticle.tempCategory != "0" && tempArticle.tempIntro && tempArticle.tempBody && tempArticle.tempTag){

            this.props.dispatch(postStory(config));
            this.setState({tempSubmitted: false});
        //}
    }

    render() {
        const {tempArticle, tempSubmitted} = this.state;


        return (
            <div className="wrapper">
              <section className="post-story-sec">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="post-story-inner">
                                    <h3>Post your story here</h3>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Title</label>
                                                    <input type="text" className="form-control" placeholder="" name="tempTitle" value={tempArticle.tempTitle} onChange={this.handleChange}/>
                                                    {tempSubmitted && !tempArticle.tempTitle && <div className="help-block">Title is required</div> }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Community Categories</label>
                                                    <select className="form-control" name="tempCategory" onChange={this.handleChange}>
                                                        <option value="0">Select Community</option>
                                                    { this.props.categories && this.props.categories.map(function(category) {
                                                        return (
                                                        <option value={category.id}>{category.title}</option>
                                                        );
                                                    }) }
                                                    </select>
                                                    {tempSubmitted && tempArticle.tempCategory == "0" && <div className="help-block">Please select a category</div> }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Short Summary of Story</label>
                                                    <input type="text" className="form-control" placeholder="" name="tempIntro" value={tempArticle.tempIntro} onChange={this.handleChange}/>
                                                    {tempSubmitted && !tempArticle.tempIntro && <div className="help-block">Summary is required</div> }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Thumbnail for Story</label>
                                            <label className="upload-file"> Upload
                                                <input type="file" name="files" onChange={this.handleImageInputChange}/>
                                            </label> 
                                            <span>No file selected</span>
                                        </div>
                                        <div className="form-group">
                                            <label>Body</label>
                                            <textarea className="form-control" placeholder="" name="tempBody" value={tempArticle.tempBody} onChange={this.handleChange}></textarea>
                                            {tempSubmitted && !tempArticle.tempBody && <div className="help-block">Body is required</div> }
                                        </div>
                                        <div className="form-group">
                                            <label>Tags</label>
                                            <div className="bs-example">
                                                <input type="text" name="tempTag" className="form-control" data-role="tagsinput" value={tempArticle.tempTag} onChange={this.handleChange} />
                                                {tempSubmitted && !tempArticle.tempTag && <div className="help-block">Tag is required</div> }
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input className="post-btn" value="Post Story" type="button" onClick={this.handleSubmit}/>
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
}
PostStoryContainer.contextType = {
    store: PropTypes.object.isRequired
}

PostStoryContainer.propTypes = {
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const {articles} = state;
    const {categories} = state.articles;
    const {message} = state.articles;

    return {
        categories: categories,
        message: message
    }
}

export default connect(mapStateToProps)(PostStoryContainer) 