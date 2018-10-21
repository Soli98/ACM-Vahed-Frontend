import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export class ChosenOfferingsTable extends Component {
  renderOfferings() {
    return this.props.offerings.map(offering => {
      return (
        <TableRow key={offering.id}>
          <TableCell>
            <IconButton onClick={() => this.props.deleteOfferingFromCurriculum(offering.id)}>
              <DeleteIcon />
            </IconButton>
          </TableCell>
          <TableCell>{offering.course.name}</TableCell>
          <TableCell>{offering.teacher}</TableCell>
          <TableCell numeric>{offering.course.credits}</TableCell>
          <TableCell numeric>{offering.course.course_id}-{offering.offering_id}</TableCell>
          <TableCell numeric>{offering.capacity}</TableCell>
          <TableCell numeric>{offering.exam_date && moment(offering.exam_date).format("YY-MM-DD")}</TableCell>
        </TableRow>
      )
    });
  }

  render() {
    return (
      <div style={{overflowX: 'auto'}}>
        <Typography variant="title" align="center" style={{padding: '10px'}}>دروس انتخاب‌شده</Typography>
        <Table style={{minWidth: '700px', overflowY: 'scroll'}}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>نام درس</TableCell>
              <TableCell>نام استاد</TableCell>
              <TableCell numeric>تعداد واحد</TableCell>
              <TableCell numeric>کد درس</TableCell>
              <TableCell numeric>ظرفیت</TableCell>
              <TableCell numeric>زمان امتحان</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.offerings && this.renderOfferings()}
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

export default connect(mapStateToProps, mapDispatchToProps)(ChosenOfferingsTable)