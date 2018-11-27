import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { logout } from '../actions/user_actions';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

export class Header extends Component {
  render() {
    if (!this.props.auth.user) {
      return <Redirect to="/login" />
    }
    return (
      <div style={{flexGrow: 1}}>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <Typography color="inherit" style={{flexGrow: 1}}>
            سامانه‌ی انتخاب واحد مجازی
          </Typography>
          {this.props.auth.user &&
            <Button component={Link} to="/curriculum/" color="inherit">برنامه‌ها</Button>
          }
          {this.props.auth.user &&
            <Button onClick={() => this.props.logout()} color="inherit">خروج</Button>
          }
        </Toolbar>
      </AppBar>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
