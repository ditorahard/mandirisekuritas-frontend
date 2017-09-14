import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
        return null;
    }
    
    // The gray background
    const backdropStyle = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 50
    };
    
    // The modal "window"
    const modalStyle = {
        backgroundColor: '#fff',
        borderRadius: 5,
        maxWidth: 500,
        minHeight: 300,
        margin: '0 auto',
        padding: 30
    };

    const repliesStyle = {
        backgroundColor: '#fff',
        borderRadius: 5,
        maxWidth: 300,
        minHeight: 200,  
        padding: 30
    };
    
    return (
        <div className="backdrop" style={ backdropStyle }>
            <div className="modal-content" style={ modalStyle }>
                { this.props.children }
        
                <div className="modal-footer">
                    <button onClick={ this.props.onClose }>
                          Close
                   </button>
                 </div>

            </div>

            <div class="modal-replies">
               <div class="card card--reply">
                    <div className="card__content">
                        <div className="profile-pic">
                            <a href="#"><img className="img-circle" src="assets/img/abc.jpg" alt="" /></a>
                            </div>
                            <div className="reply-info"><a className="profile-name" href="#">tes</a>
                                <div className="post-date"><small>20 April 2017</small></div>
                            </div>
                            <button className="more-button"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></button>
                            <div className="form-box">
                                <div className="comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae possimus quibusdam magni, cumque, aspernatur at et inventore ipsum, nemo ullam molestias magnam dolorum accusamus odio nihil, repellendus in provident numquam.
                                </div>
                            </div>
                        <button className="view-conversation-button" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat"><i className="fa fa-comment-o" aria-hidden="true"></i></button>
                    </div>
                </div> 
            </div>
        </div>
        );
      }
    }

    Modal.propTypes = {
        onClose: PropTypes.func.isRequired,
        show: PropTypes.bool,
        children: PropTypes.node
    };

    export default Modal;
