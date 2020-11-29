import React, { Component } from 'react';

class FacebookModal extends Component {
    render() {
        return <>
            <div className="title-wrap">
                <h1>Facebook followers</h1>
                <h3>
                    <i className="ms-icon icon-facebook"></i>
                    <span>@nathanf</span>
                </h3>
            </div>
            <div className="statistics">
                <strong>1987</strong>
                <span>Total <br />followers</span>
                <strong className="lime"><i className="ms-icon icon-up"></i> 81</strong>
                <span>New followers in <br />the past 10 days</span>
                <strong className="lime"><i className="ms-icon icon-up"></i> 12</strong>
                <span>New followers <br />TODAY</span>
            </div>
            <div className="graph">
                <div className="gutter">
                    <h5>May 4 - May 13</h5>
                </div>
            </div>
        </>
    }
}

export default FacebookModal;
