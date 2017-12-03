import React from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import helpers from '../helpers/index';


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
    const uri = '/api/prescription';

    helpers.getApiData(uri)
      .then((data) => {
        this.setState({
          orderList: data,
        });
      })
      .catch((err) => {
        console.log('error fetching users from database', err);
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

    const uri = `/api/prescription?id=${id}`;
    const dataParams = { pharmacyId: this.state.pharmacyId };

    helpers.putApiData(uri, dataParams)
      .then((data) => {
        this.setState({
          orderList: data,
        });
      })
      .catch((err) => {
        console.log('error fetching users from database', err);
      });
  }

  cellButton(cell, row) {
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
        <Button
          type="submit"
          onClick={this.onClickHandler}
          value={row.id}
          bsStyle="primary"
        >
          Share
        </Button>
      </form>
    );
  }


  render() {
    const options = {
      defaultSortName: 'id',
      defaultSortOrder: 'desc',
    };

    return (
      <BootstrapTable bsSize="sm" data={this.state.orderList} striped pagination search options={options}>
        <TableHeaderColumn dataField="id" isKey width="5%">Prescription ID</TableHeaderColumn>
        <TableHeaderColumn dataField="createdAt" width="10%">Prescription ID</TableHeaderColumn>
        <TableHeaderColumn dataField="patientId" width="5%">Patient ID</TableHeaderColumn>
        <TableHeaderColumn dataField="illnessId" width="5%">illnessId</TableHeaderColumn>
        <TableHeaderColumn dataField="doctorNotes" width="10%">doctorNotes</TableHeaderColumn>
        <TableHeaderColumn dataField="imageSrc" width="10%">PrescriptionImage</TableHeaderColumn>
        <TableHeaderColumn dataField="doctorId" dataFormat={this.cellButton} width="10%">Doctor ID</TableHeaderColumn>
        <TableHeaderColumn dataField="pharmacyId" dataFormat={this.cellButton} width="10%">pharmacyId</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default Order;
