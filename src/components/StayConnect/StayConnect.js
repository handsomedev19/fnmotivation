import { support } from 'jquery'
import React from 'react'
import CategoryModal from "../CategoryModal/CategoryModal";


class StayConnect extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            modalShow: false
        };
    }

    render() {
        return (
            <div>
                <section class="stay-connected-sec">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12">
                                    <div class="stay-connected-inner">
                                        <h2>Stay connected <br/>
                                            Have stories sent to your inbox</h2>
                                        <a onClick={() => this.setState({modalShow: true})}>SUBSCRIBE NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <CategoryModal
                        show={this.state.modalShow}
                        onHide={() => this.setState({modalShow: false})}
                    />
            </div>
        );
    }  
}

export default StayConnect
  
