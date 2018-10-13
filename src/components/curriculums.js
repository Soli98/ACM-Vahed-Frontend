import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash';
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
import EditIcon from '@material-ui/icons/Edit';
import { deleteCurriculum, addCurriculum, editCurriculum, fetchCurriculums } from '../actions/curriculum_actions';
import { AddCurriculumForm } from './add_curriculum_form';

export class Curriculums extends Component {
  state = {
    addFormOpen: false,
  };

  componentDidMount() {
      console.log(this.props)
    this.props.fetchCurriculums();
  }

  renderCurriculums() {
    return  _.map(this.props.curriculums, (curriculum) => {
      return (
        <ListItem button key={curriculum.id} onClick={(e) => this.props.history.push(`/curriculum/${curriculum.id}`)}>
        <ListItemAvatar>
          <Avatar>
            <AssignmentIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={curriculum.name}
        />
          <ListItemSecondaryAction>
            <IconButton
            onClick={() => {this.props.deleteCurriculum(curriculum.id,  () => {this.props.history.push('/'); this.props.history.push('/curriculum');})}}
            aria-label="حذف">
              <DeleteIcon />
            </IconButton>
            <IconButton
            aria-label="توضیحات">
              <InfoIcon />
            </IconButton>
            <IconButton
            onClick={(e) => {}}
            aria-label="ویرایش">
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
      </ListItem>
      );
    });
  }

  handleClose() {
    this.setState({addFormOpen: false})
  }

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
          <AddCurriculumForm
            open={this.state.addFormOpen}
            handleClose={() => this.handleClose()}
            handleAdd={(data) => this.props.addCurriculum(data, () => {this.props.history.push('/'); this.props.history.push('/curriculum');})}
          />
          <div>
            <List style={{overflow: 'auto'}}>
              {this.props.curriculums && this.renderCurriculums()}
            </List>
          </div>
          <Button
          onClick={(e) => {this.setState({addFormOpen: true})}}
          variant="fab" color="secondary"
          style={{
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
  curriculums: state.curriculums
})

const mapDispatchToProps = {
  deleteCurriculum,
  editCurriculum,
  addCurriculum,
  fetchCurriculums
}

export default connect(mapStateToProps, mapDispatchToProps)(Curriculums)
