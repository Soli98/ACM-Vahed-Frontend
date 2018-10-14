import React, { Component } from 'react'
import moment from 'moment';
import { connect } from 'react-redux';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

export class OfferingsTimeline extends Component {
  renderDay(num) {
    const dayOfferings = this.props.offerings.filter(offering => {
      return offering.times.filter(o => o.day === num).length > 0;
    });
    dayOfferings.sort((a, b) => {
      return (moment(a.times[0].start, "HH:mm:ss").diff(moment(b.times[0].start, "HH:mm:ss"), 'hours', true) > 0)
    })
    var cells = []
    var i = moment("07:00:00", "HH:mm:ss")
    while (i.isBefore(moment("20:00:00", "HH:mm:ss"))) {
      for (let j = 0; j < dayOfferings.length; j++) {
        const duration = moment(dayOfferings[j].times[0].finish, "HH:mm:ss").diff(moment(dayOfferings[j].times[0].start, "HH:mm:ss"), 'hours', true);
        if (moment(dayOfferings[j].times[0].start, "HH:mm:ss").isSame(i)) {
          cells.push(<TableCell colSpan={duration*2} style={{background: 'skyblue'}}>{dayOfferings[j].course.name}</TableCell>)
          i = i.add(duration, 'hours')
          for (let k = 0; k < duration*2; k++) {
            cells.push(<TableCell colSpan={0} style={{display: 'none'}}></TableCell>)
          }
        }
      }
      cells.push(<TableCell></TableCell>)
      i = i.add(30, 'minutes')
    }
    return cells;
  }
  render() {
    return (
      <div style={{height: '100%', overflowX: 'auto'}}>
        <Table padding="dense" style={{height: '100%', width: 'auto', overflow: 'scroll', tableLayout: "auto"}}>
          <TableHead>
            <TableRow>
              <TableCell padding="none"></TableCell>
              <TableCell padding="none">۷</TableCell>
              <TableCell padding="none"></TableCell>
              <TableCell padding="none">۸</TableCell>
              <TableCell padding="none"></TableCell>
              <TableCell padding="none">۹</TableCell>
              <TableCell padding="none"></TableCell>
              <TableCell padding="none">۱۰</TableCell>
              <TableCell padding="none"></TableCell>
              <TableCell padding="none">۱۱</TableCell>
              <TableCell padding="none"></TableCell>
              <TableCell padding="none">۱۲</TableCell>
              <TableCell padding="none"></TableCell>
              <TableCell padding="none">۱۳</TableCell>
              <TableCell padding="none"></TableCell>
              <TableCell padding="none">۱۴</TableCell>
              <TableCell padding="none"></TableCell>
              <TableCell padding="none">۱۵</TableCell>
              <TableCell padding="none"></TableCell>
              <TableCell padding="none">۱۶</TableCell>
              <TableCell padding="none"></TableCell>
              <TableCell padding="none">۱۷</TableCell>
              <TableCell padding="none"></TableCell>
              <TableCell padding="none">۱۸</TableCell>
              <TableCell padding="none"></TableCell>
              <TableCell padding="none">۱۹</TableCell>
              <TableCell padding="none"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow style={{height: '20%'}}>
              <TableCell>شنبه</TableCell>
              {this.props.offerings && this.renderDay(0)}
            </TableRow>
            <TableRow style={{height: '20%'}}>
              <TableCell>یک‌شنبه</TableCell>
              {this.props.offerings && this.renderDay(1)}
            </TableRow>
            <TableRow style={{height: '20%'}}>
              <TableCell>دوشنبه</TableCell>
              {this.props.offerings && this.renderDay(2)}
            </TableRow>
            <TableRow style={{height: '20%'}}>
              <TableCell>سه‌شنبه</TableCell>
              {this.props.offerings && this.renderDay(3)}
            </TableRow>
            <TableRow style={{height: '20%'}}>
              <TableCell>چهارشنبه</TableCell>
              {this.props.offerings && this.renderDay(4)}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferingsTimeline)
