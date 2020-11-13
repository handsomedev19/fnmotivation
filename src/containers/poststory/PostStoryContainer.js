import React from 'react'


const PostStoryContainer = () => {  

  return (
      <div className="wrapper">
        <section class="post-story-sec">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="post-story-inner">
                                <h3>Post your story here</h3>
                                <form>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Title</label>
                                                <input type="text" class="form-control" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Community Categories</label>
                                                <select class="form-control">
                                                    <option>Heart Diseases</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Short Summary of Story</label>
                                                <input type="text" class="form-control" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Thumbnail for Story</label>
                                        <label class="upload-file"> Upload
                                            <input type="file" size="60" />
                                        </label> 
                                        <span>No file selected</span>
                                    </div>
                                    <div class="form-group">
                                        <label>Body</label>
                                        <textarea class="form-control" placeholder=""></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label>Tags</label>
                                        <div class="bs-example">
                                            <input type="text" name="tags" class="form-control" value="tag" data-role="tagsinput" />
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
export default PostStoryContainer