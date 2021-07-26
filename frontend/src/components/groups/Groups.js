import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGroups } from '../../actions/groups';

export class Groups extends Component {
    static propTypes = {
        groups: PropTypes.array.isRequired
    }
    
    componentDidMount() {
        this.props.getGroups()
    }


    render() {
        return (
            <Fragment>
                <h2>Groups</h2>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.groups.map(group =>(
                            <tr key={group.id}>
                                <td>{group.id}</td>
                                <td>{group.name}</td>
                                <td>{group.description}</td>
                                <td><button className='btn btn-danger btn-sm'>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    groups: state.groups.groups
});


export default connect(mapStateToProps, { getGroups })(Groups);

