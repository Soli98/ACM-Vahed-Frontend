import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Paper, AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AssignmentIcon from '@material-ui/icons/Assignment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';

export class Plans extends Component {
  render() {
    return (
      <Paper style={{
        margin: 'auto',
        position: 'absolute',
				top: '50%',
				left: '50%',
  			transform: 'translate(-50%, -50%)',
      }}>

      
        <div style={{
          position: 'relative',
          width: '400px',
          minHeight: '400px',
        }}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="title" color="inherit">
                برنامه‌ها
              </Typography>
            </Toolbar>
          </AppBar>
          <div>
            <List>
                <ListItem button onClick={() => this.props.history.push('/signup')}>
                  <ListItemAvatar>
                    <Avatar>
                      <AssignmentIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="برنامه‌ی ۱"
                  />
                    <ListItemSecondaryAction
                    onClick={(e) => {this.props.deletePlan(e.target.id); e.stopPropagation();}}>
                      <IconButton aria-label="حذف">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                    <ListItemSecondaryAction style={{
                      marginLeft: '40px',
                    }}>
                      <IconButton aria-label="توضیحات">
                        <InfoIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
          </div>
          <Button variant="fab" color="secondary" style={{
            position: 'absolute',
            bottom: '15px',
            right: '15px',
          }}>
            <AddIcon />
          </Button>
        </div>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Plans)
