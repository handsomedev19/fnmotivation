import React from 'react';
import "./TagsInput.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setTags } from "../../actions/articles";

class TagsInput extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            tags: []
        }

        this.removeTags = this.removeTags.bind(this);
        this.addTags = this.addTags.bind(this);
    }

    

    //const [tags, setTags] = React.useState(props.tags);

    removeTags = indexToRemove => {
        const {tags} = this.state;
        this.setState({tags : [...tags.filter((_, index) => index !== indexToRemove)]});

        this.props.dispatch(setTags([...tags.filter((_, index) => index !== indexToRemove)]));
    };

    addTags = event => {
        const {tags} = this.state;
        if (event.target.value !== "") {
            this.setState({tags : [...tags, event.target.value]});
            //this.props.selectedTags([...tags, event.target.value]);

            //console.log("setTag action payload : ");
            //console.log([...tags, event.target.value]);

            this.props.dispatch(setTags([...tags, event.target.value]));
            event.target.value = "";
        }

        
    };

    render () {
        const {tags} = this.state;

        return (
            <div className="tags-input">
                <ul id="tags">
                    {tags.map((tag, index) => (
                        <li key={index} className="tag">
                            <span className='tag-title'>{tag}</span>
                            <span className='tag-close-icon'
                            onClick={() => this.removeTags(index)}
                            >
                            x
                            </span>
                        </li>
                    ))}
                </ul>
                <input
                type="text"
                onKeyUp={event => event.key === "Enter" ? this.addTags(event) : null}
                placeholder="Press enter to add tags"
                />
            </div>
        );
    }   
}

TagsInput.contextType = {
    store: PropTypes.object.isRequired
}

TagsInput.propTypes = {
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const {articles} = state;
    const {tags} = articles;

    return {
        tags: tags
    }
}

export default connect(mapStateToProps)(TagsInput) 
