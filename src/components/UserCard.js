import React from 'react'
import { getMergedEndpoints } from '../utils/api'
import { Comment } from './Comment'

export default class UserCard extends React.Component {

  state = {
    userData: null,
  }

  componentDidMount () {
    const { url1, url2 } = this.props
    getMergedEndpoints([url1, url2 ])
      .then((result) => {
        this.setState({userData: result})
      })
  }

  handleDelete = (id) => {
    this.setState(({userData}) => {
      const newState = userData.comments.filter(comment => comment.id !== id )
      return {
        userData: {
          profile: userData.profile,
          comments: newState,
        }
      }
    })
  }

  render() {
    const { userData } = this.state
    
    return (
      <React.Fragment>
        { userData && 
          <div className="mw7 center pa3 mt4">
            <div className="mb5 bg-near-white br3 pa3">
              <p className="f2 b dark-gray mt0 mb0">{userData.profile.username}</p>
              <p className="f3 b dark-gray mt2 mb2">{userData.profile.name}</p>
              <p className="mid-gray">{userData.profile.website}</p>
              <span className="f6 mid-gray pr4">{userData.profile.email}</span>
              <span className="f6 mid-gray">Tel: {userData.profile.phone}</span>
            </div>
            {userData.comments.map((comment, i) => (
              <Comment id={comment.id} handleDelete={this.handleDelete} key={i} title={comment.title} body={comment.body} />
            ))}
          </div>
        }
      </React.Fragment>
    )
  }
}