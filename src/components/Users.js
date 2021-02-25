import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/user'

const Users = (props) => {

    useEffect(() => {
        props.fetchAllUsers()
    }, [])

    return (
        <div>
            {
                props.userList.map((item) =>  {
                    return(
                        <div key={item.id}>
                            <div>{item.name}</div>
                            <div>{item.username}</div>
                        </div>
       
                    )
                })
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        userList: state.user.list
    }
}

const mapActionToProps = {
    fetchAllUsers: actions.fetchALL
}


export default connect(mapStateToProps, mapActionToProps) (Users);