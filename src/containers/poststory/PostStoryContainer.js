import React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCategories } from "../../actions/articles";
import { postStory } from "../../actions/articles";
import TagsInput from "../../components/TagsInput/TagsInput";
import { getTags } from "../../actions/articles";

class PostStoryContainer extends React.Component {  

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

        const formElement = document.querySelector("#post-story-submit");

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
                    //console.log("In case of alt image");
                    //console.log(data["article_category"]);
                    const tempdata = this.props.categories.filter(category => category.id == data["article_category"])[0];
                    data["thumb"] = tempdata.thumb;
                    //console.log("alt image url: ");
                    //console.log(data["thumb"]);
                }
            }
        }

        data["outer"] = false;
        data["article_author"] = this.props.auth.id;

        const data1 = {};
        data1["article_tags"] = this.props.articleTags;


        formData.append('data', JSON.stringify(data));
        //console.log(data);

        //request.open('POST', `http://localhost:1337/articles`);

        //request.send(formData);

        /*console.log(this.state.tempArticle.title);
        console.log(this.state.tempArticle.article_category);
        console.log(this.state.tempArticle.intro);
        console.log(this.state.tempArticle.article_tags);*/

        this.setState({tempSubmitted: true});
        
        const { tempArticle } = this.state;

        //console.log(tempArticle);

        if (tempArticle.title && tempArticle.article_category != "0" && tempArticle.intro && tempArticle.body){

            this.props.dispatch(postStory(formData));
            this.setState({tempSubmitted: false});
            this.setState({isImgaeSelected: false});
        }
    }

    render() {
        const {tempArticle, tempSubmitted} = this.state;

        const selectedTags = tags => {
            //console.log(tags);
            };


        return (
            <div className="wrapper">
              <section className="post-story-sec">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="post-story-inner">
                                    <h3>Post your story here</h3>
                                    <form id="post-story-submit">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Title</label>
                                                    <input type="text" className="form-control" placeholder="" name="title" value={tempArticle.title} onChange={this.handleChange}/>
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
                                                    <input type="text" className="form-control" placeholder="" name="intro" value={tempArticle.intro} onChange={this.handleChange}/>
                                                    {tempSubmitted && !tempArticle.intro && <div className="help-block">Summary is required</div> }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Thumbnail for Story</label>
                                            <label className="upload-file"> Upload
                                                <input type="file" name="thumb" onChange={this.handleImageInputChange}/>
                                            </label> 
                                            {this.state.isImgaeSelected ? <span>A file selected</span> : <span>No file selected</span>}
                                        </div>
                                        <div className="form-group">
                                            <label>Body</label>
                                            <textarea className="form-control" placeholder="" name="body" value={tempArticle.body} onChange={this.handleChange}></textarea>
                                            {tempSubmitted && !tempArticle.body && <div className="help-block">Body is required</div> }
                                        </div>
                                        <div className="">
                                            <label>Tags</label>
                                            <div className="">
                                                {/*<input type="text" name="article_tags" className="form-control" value={tempArticle.article_tags} onChange={this.handleChange} />*/}
                                                <TagsInput type="tags" selectedTags={selectedTags}  tags={[]}/> 
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
    const {auth} = state;
    const { tags } = articles;

    return {
        categories: categories,
        message: message,
        auth: auth,
        articleTags: tags 
    }
}

export default connect(mapStateToProps)(PostStoryContainer) 