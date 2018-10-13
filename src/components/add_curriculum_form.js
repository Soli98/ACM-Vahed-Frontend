import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export class AddCurriculumForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
      name: '',
      valid: false
    }
  }

  handleChange(data) {
    this.setState({[data.id]: data.value});
    if(data.value) {
      this.setState({valid: true});
    } else {
      this.setState({valid: false});
    }
  }

  render() {
    return (
      <div>
          <Dialog
          maxWidth="sm"
          fullWidth
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
          >
          <DialogTitle id="form-dialog-title">افزودن برنامه‌ی جدید</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              label="نام"
              type="text"
              onChange={(e) => this.handleChange(e.target)}
              value={this.state.name}
              fullWidth
            />
            <TextField
              required
              multiline={true}
              margin="dense"
              id="description"
              label="توضیحات"
              type="text"
              onChange={(e) => this.handleChange(e.target)}
              value={this.state.description}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="primary">
              لغو
            </Button>
            <Button onClick={() => this.state.name && this.props.handleAdd({name: this.state.name,description: this.state.description})} color="primary">
              اضافه کن
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

const mapDispatchToProps = {
  
}

export default connect(null, mapDispatchToProps)(AddCurriculumForm)
