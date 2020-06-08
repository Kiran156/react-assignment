import React, { Component } from 'react';

import { connect } from 'react-redux';

import Post from './Post';

import EditComponent from './EditComponent';

class AllPost extends Component {
    render() {
        return (
            <div>
                <center>
                <h1 style={{color: 'red', width: '50%', background: 'lightblue'}}>SUBMITTED DATA</h1>
                <div style={{display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
                {this.props.posts.map((post) => (
                    
                    <div key={post.id} style={{minWidth: '30%'}}>
                        {post.editing ? <EditComponent post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}
                    </div>
                ))}
                </div>
                
                </center>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);