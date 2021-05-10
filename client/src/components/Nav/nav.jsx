import React, { Component } from 'react'
import logo from './eng-exp-logo-wht-bg-no-txt.png'
import './nav.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCurrentUser } from '../../actions/auth-actions'

class nav extends Component {
  render () {
    console.log(this.props.auth.user)
    const { user } = this.props.auth
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-none'>
          <a className='navbar-brand text-white' href='#'>
            <img classname="logo responsive" src={logo} height='250' width='250' />
          </a>{' '}
          <span className='title text-white'>English Experience </span>
          <button
            className='navbar-toggler navbar-dark'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse ' id='navbarNavAltMarkup'>
            <div className='navbar-nav ml-auto'>
              <img
                src={user.thumbnail}
                height='40'
                width='40'
                className='user-img rounded-circle responsive'
              />
              <span className='user text-white'>{user.displayName}</span>
              {/* <Link to="/home" className="nav-item nav-link active text-white align-right">
                Home <span className="sr-only">(current)</span>
              </Link> */}
              <Link to='/dashboard' className='nav-item nav-link text-white'>
                Levels
              </Link>
              {/* <Link to="/Activity" className="nav-item nav-link text-white">
                Activities
              </Link> */}
              <Link to='/' className='nav-item nav-link text-white'>
                Log Out
              </Link>
            </div>
          </div>d
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps, { setCurrentUser })(nav)
