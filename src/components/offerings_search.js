import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextField, Select, Button, FormControl, MenuItem, List, ListItem, Typography, Divider, InputLabel, ListItemText } from '@material-ui/core';
import { searchOffering } from '../actions/curriculum_actions';

export class OfferingsSearch extends Component {
  state = {
    name: '',
    type: '',
  }

  renderResults() {
    return this.props.results.map(result => {
      return (
      <ListItem dense key={result.id} button onClick={() => this.props.addOfferingToCurriculum(result.id)}>
        <ListItemText primary={result.course.name} />
      </ListItem>
      )
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div style={{padding: '10px', height: '100%'}}>
        <div>
          <TextField
            name="name"
            fullWidth
            label="نام درس"
            type="text"
            onChange={(e) => this.handleChange(e)}
            value={this.state.name}
          />
          <FormControl fullWidth>
            <InputLabel htmlFor="offeringtype">نوع درس</InputLabel>
            <Select
              inputProps={{
                id: 'offeringtype',
              }}
              name="type"
              value={this.state.type}
              onChange={(e) => this.handleChange(e)}
            >
              <MenuItem value="0">اختصاصی</MenuItem>
              <MenuItem value="1">عمومی</MenuItem>
              <MenuItem value="2">علوم‌پایه</MenuItem>
            </Select>
          </FormControl>
          <Button onClick={() => this.props.searchOffering(this.state)} color="primary" fullWidth>
            بگرد
          </Button>
        </div>
        <Divider style={{margin: '5px 0 5px 0'}} />
        <Typography variant="title" style={{margin: 5}}>
          نتایج جست‌وجو
        </Typography>
        <div>
          <List>
            {this.props.results && this.renderResults()}
          </List>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  results: state.currentCurriculum.searchResults
})

const mapDispatchToProps = {
  searchOffering,
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferingsSearch)
