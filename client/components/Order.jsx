import React from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import helpers from '../helpers/index';


class Order extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orderList: [],
      inputId: '',
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
    const inputId = e.target.value;

    this.setState({
      inputId,
    });
  }

  onClickHandler(e, cell, row, enumObject, rowIndex) {
    e.preventDefault();
    const rowId = e.target.value;

    const uri = `/api/prescription?id=${rowId}`;
    let dataParams;
    if (enumObject === 'doctor') {
      dataParams = { doctorId: this.state.inputId };
    } else {
      dataParams = { pharmacyId: this.state.inputId };
    }

    helpers.putApiData(uri, dataParams)
      .then((data) => {
        console.log(`Shared Prescription id: ${rowId} with ${enumObject} id: ${this.state.inputId}`);
        this.setState({
          inputId: '',
        });
      })
      .catch((err) => {
        console.log('error fetching users from database', err);
      });
  }

  cellButton(cell, row, enumObject, rowIndex) {
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
          onClick={e => this.onClickHandler(e, cell, row, enumObject, rowIndex)}
          value={row.id}
          field={enumObject}
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
        <TableHeaderColumn dataField="doctorId" dataFormat={this.cellButton} formatExtraData="doctor" width="10%">Doctor ID</TableHeaderColumn>
        <TableHeaderColumn dataField="pharmacyId" dataFormat={this.cellButton} formatExtraData="pharmacy" width="10%">pharmacy ID</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default Order;
