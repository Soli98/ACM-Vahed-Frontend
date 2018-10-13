import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Paper, Typography } from '@material-ui/core';
import ChosenOfferingsTable from './chosen_offerings_table';
import OfferingsSearch from './offerings_search';
import OfferingsTimeline from './offerings_timeline';
import { fetchCurriculum } from '../actions/curriculum_actions';
import { addOfferingToCurriculum, deleteOfferingFromCurriculum } from '../actions/curriculum_actions';

export class Dashboard extends Component {
  componentWillMount() {
    if(!this.props.curr) {
      this.props.fetchCurriculum(this.props.match.params.id);
    }
  }

  addOToC(oid) {
    this.props.addOfferingToCurriculum(oid, this.props.match.params.id);
  }

  delOFromC(oid) {
    this.props.deleteOfferingFromCurriculum(oid, this.props.match.params.id);
  }

  render() {
    if (!this.props.curr) {
      return <Typography>در حال بارگذاری...</Typography>
    }
    return (
        <Grid container style={{height: "100%", width: '100%'}}>
          <Grid item sm={2} style={{padding: 4}}>
            <Paper square style={{height: '100%', width: '100%', overflowY: 'auto'}}>
              <OfferingsSearch addOfferingToCurriculum={(oid) => this.addOToC(oid)}></OfferingsSearch>
            </Paper>
          </Grid>
          <Grid item sm={10} container direction="column">
            <Grid item style={{flex:1, padding: 4}}>
              <Paper square style={{height: '100%', width: '100%'}}>
                <OfferingsTimeline offerings={this.props.curr.curr.offers}></OfferingsTimeline>
              </Paper>
            </Grid>
            <Grid item style={{flex:1, padding: 4}}>
              <Paper square style={{height: '100%', width: '100%'}}>
                <ChosenOfferingsTable offerings={this.props.curr.curr.offers} deleteOfferingFromCurriculum={(oid) => this.delOFromC(oid)}></ChosenOfferingsTable>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  curr: state.currentCurriculum
})

export default connect(mapStateToProps, { fetchCurriculum, addOfferingToCurriculum, deleteOfferingFromCurriculum })(Dashboard)
