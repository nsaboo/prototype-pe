import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import helpers from '../helpers/index';

class Doctor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doctorList: [],
    };
  }

  componentDidMount() {
    const uri = '/api/doctor';

    helpers.getApiData(uri)
      .then((data) => {
        this.setState({
          doctorList: data,
        });
      })
      .catch((err) => {
        console.log('error fetching users from database', err);
      });
  }

  render() {
    const options = {
      defaultSortName: 'createdAt',
      defaultSortOrder: 'asc',
    };

    return (
      <BootstrapTable
        bsSize="sm"
        data={this.state.doctorList}
        striped
        pagination
        search
        options={options}
      >
        <TableHeaderColumn dataField="id" width="5%">Doctor ID</TableHeaderColumn>
        <TableHeaderColumn dataField="createdAt" isKey width="10%">createdAt</TableHeaderColumn>
        <TableHeaderColumn dataField="name" width="5%">Name</TableHeaderColumn>
        <TableHeaderColumn dataField="age" width="5%">Age</TableHeaderColumn>
        <TableHeaderColumn dataField="gender" width="5%">Gender</TableHeaderColumn>
        <TableHeaderColumn dataField="email" width="5%">Email</TableHeaderColumn>
        <TableHeaderColumn dataField="mobile" width="10%">Mobile</TableHeaderColumn>
        <TableHeaderColumn dataField="cityId" width="10%">cityId</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default Doctor;
