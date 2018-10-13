import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';

export class OfferingsTimeline extends Component {
  renderDay(num) {
    const dayOfferings = this.props.offerings.filter(offering => (!!(offering.times[0].day === num) && (!!offering.times[1] && (offering.times[1].day === num))));
    console.log(dayOfferings)
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
              <TableCell padding="none">۱۲</TableCell>
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
              {this.props.offerings && this.renderDay(1)}
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell colSpan={3}>درس فلان</TableCell>
              <TableCell colSpan={0} style={{display: 'none'}}></TableCell>
              <TableCell colSpan={0} style={{display: 'none'}}></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow style={{height: '20%'}}>
              <TableCell>یک‌شنبه</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell colSpan={3}>درس فلان</TableCell>
              <TableCell colSpan={0} style={{display: 'none'}}></TableCell>
              <TableCell colSpan={0} style={{display: 'none'}}></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow style={{height: '20%'}}>
              <TableCell>دوشنبه</TableCell>
              <TableCell colSpan={3}>درس فلان</TableCell>
              <TableCell colSpan={0} style={{display: 'none'}}></TableCell>
              <TableCell colSpan={0} style={{display: 'none'}}></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow style={{height: '20%'}}>
              <TableCell>سه‌شنبه</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell colSpan={3}>درس فلان</TableCell>
              <TableCell colSpan={0} style={{display: 'none'}}></TableCell>
              <TableCell colSpan={0} style={{display: 'none'}}></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow style={{height: '20%'}}>
              <TableCell>چهارشنبه</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell colSpan={3}>درس فلان</TableCell>
              <TableCell colSpan={0} style={{display: 'none'}}></TableCell>
              <TableCell colSpan={0} style={{display: 'none'}}></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
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
