import React from 'react';
import $ from 'jquery';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class Order extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orderList: [],
      pharmacyId: '',
    };

    this.cellButton = this.cellButton.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/api/prescription',
      type: 'GET',
      success: (res) => {
        this.setState({
          orderList: res,
        });
      },
      error: () => {
        console.log('error fetching users from database');
      },
    });
  }

  onChangeHandler(e) {
    const pharmacyId = e.target.value;

    this.setState({
      pharmacyId,
    });
  }

  onClickHandler(e) {
    e.preventDefault();
    const id = e.target.value;

    // update prescription api with id and pharmeasyId
    $.ajax({
      url: `/api/prescription?id=${id}`,
      type: 'PUT',
      data: { pharmacyId: this.state.pharmacyId },
      success: (res) => {
        this.setState({
          orderList: res,
        });
      },
      error: () => {
        console.log('error fetching users from database');
      },
    });
  }

  cellButton(cell, row, rowIndex) {
    return (
      <form>
        <FormGroup>
          <FormControl
            bsSize="sm"
            type="text"
            placeholder="enter code to share"
            onChange={this.onChangeHandler}
          />
        </FormGroup>
        <Button type="submit" onClick={this.onClickHandler} value={row.id} bsStyle="primary"> Share </Button>
      </form>
    );
  }


  render() {
    const options = {
      defaultSortName: 'id',
      defaultSortOrder: 'desc'
    };

    return (
      <BootstrapTable bsSize="sm" data={this.state.orderList} striped pagination search options={options}>
        <TableHeaderColumn dataField='id' width='5%'>Prescription ID</TableHeaderColumn>
        <TableHeaderColumn dataField='createdAt' isKey width='10%'>Prescription ID</TableHeaderColumn>
        <TableHeaderColumn dataField="patientId" width='5%'>Patient ID</TableHeaderColumn>
        <TableHeaderColumn dataField="illnessId" width='5%'>illnessId</TableHeaderColumn>
        <TableHeaderColumn dataField="doctorNotes" width='10%'>doctorNotes</TableHeaderColumn>
        <TableHeaderColumn dataField="imageSrc" width='10%'>PrescriptionImage</TableHeaderColumn>
        <TableHeaderColumn dataField="doctorId" dataFormat={this.cellButton} width='10%'>Doctor ID</TableHeaderColumn>
        <TableHeaderColumn dataField="pharmacyId" dataFormat={this.cellButton} width='10%'>pharmacyId</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default Order;
