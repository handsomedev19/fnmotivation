import React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCategories, getOneArticle } from "../../actions/articles";
import { editStory } from "../../actions/articles";
import TagsInput from "../../components/TagsInput/TagsInput";

class EditStoryContainer extends React.Component {  

    constructor(props){
        super(props);

        this.state = {
            tempArticle: {
                title: '',
                article_category: '0',
                intro: '',
                body: '',
                article_tags: '',
                thumb: '',
            },
            tempSubmitted: false,
            tags: [],
            isImgaeSelected: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageInputChange = this.handleImageInputChange.bind(this);
    }

    componentDidMount(){
        const categoryId = this.props.match.params.articleId;
        this.props.dispatch(getCategories());
        this.props.dispatch(getOneArticle(categoryId));
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

        //console.log(name);
        //console.log(value);
    }

    handleImageInputChange(event) {
        this.setState({isImgaeSelected: true});        
    }

    handleSubmit(event){
        event.preventDefault();

        //console.log("article_tags");
        //console.log(this.props.articleTags);

        const formElement = document.querySelector("#edit-story-submit");

        const formData = new FormData();

        const formElements = formElement.elements;

        console.log(formElements);

        const data = {};

        for (let i = 0; i < formElements.length; i++) {
            const currentElement = formElements[i];
            if (!['submit', 'file'].includes(currentElement.type)) {
                data[currentElement.name] = currentElement.value;
                //console.log(currentElement.name);
                //console.log(currentElement.value);
            } else if (currentElement.type === 'file') {
                if (currentElement.files[0]) {
                    const file = currentElement.files[0];
                    formData.append(`files.${currentElement.name}`, file, file.name);
                } else {
                   
                }
            }
        }

        data["outer"] = false;
        data["article_author"] = this.props.auth.id;

        const data1 = {};
        data1["article_tags"] = this.props.articleTags;


        formData.append('data', JSON.stringify(data));
        //console.log(data);

        this.setState({tempSubmitted: true});
        
        const { tempArticle } = this.state;

        //console.log(tempArticle);

        if (tempArticle.title && tempArticle.article_category != "0" && tempArticle.intro && tempArticle.body){

            this.props.dispatch(editStory(formData, this.props.match.params.articleId));
            this.setState({tempSubmitted: false});
            this.setState({isImgaeSelected: false});
        }
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
                                    <h3>Edit your story here</h3>
                                    <form id="edit-story-submit">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Title</label>
                                                    <input type="text" className="form-control" placeholder={this.props.oneArticle.title} name="title" value={tempArticle.title} onChange={this.handleChange}/>
                                                    {tempSubmitted && !tempArticle.title && <div className="help-block">Title is required</div> }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Community Categories</label>
                                                    <select className="form-control" name="article_category" onChange={this.handleChange}>
                                                        <option value="0">Select Community</option>
                                                    { this.props.categories && this.props.categories.map(function(category) {
                                                        return (
                                                        <option value={category.id}>{category.title}</option>
                                                        );
                                                    }) }
                                                    </select>
                                                    {tempSubmitted && tempArticle.article_category == "0" && <div className="help-block">Please select a category</div> }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Short Summary of Story</label>
                                                    <input type="text" className="form-control" placeholder={this.props.oneArticle.intro} name="intro" value={tempArticle.intro} onChange={this.handleChange}/>
                                                    {tempSubmitted && !tempArticle.intro && <div className="help-block">Summary is required</div> }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Thumbnail for Story</label>
                                                <p>Selected file: {!!this.props.oneArticle.thumb ? this.props.oneArticle.thumb.url : "Social Image"}</p>
                                            <label className="upload-file"> Upload
                                                <input type="file" name="thumb" onChange={this.handleImageInputChange}/>
                                            </label> 
                                            {this.state.isImgaeSelected ? <span>A file selected</span> : <span>No file selected</span>}
                                        </div>
                                        <div className="form-group">
                                            <label>Body</label>
                                            <textarea className="form-control" placeholder={this.props.oneArticle.body} name="body" value={tempArticle.body} onChange={this.handleChange}></textarea>
                                            {tempSubmitted && !tempArticle.body && <div className="help-block">Body is required</div> }
                                        </div>
                                        {/*<div className="">
                                            <label>Tags</label>
                                            <div className="">                                                
                                                <TagsInput type="tags" selectedTags={selectedTags}  tags={[]}/> 
                                            </div>
                                                </div>*/}
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
EditStoryContainer.contextType = {
    store: PropTypes.object.isRequired
}

EditStoryContainer.propTypes = {
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const {articles} = state;
    const {categories} = state.articles;
    const {message} = state.articles;
    const {auth} = state;
    const { tags } = articles;
    const {oneArticle} = state.articles;

    return {
        categories: categories,
        message: message,
        auth: auth,
        articleTags: tags,
        oneArticle
    }
}

export default connect(mapStateToProps)(EditStoryContainer) 