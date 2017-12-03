import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import helpers from '../helpers/index';

class Hospital extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hospitalList: [],
    };
  }

  componentDidMount() {
    const uri = '/api/hospital';

    helpers.getApiData(uri)
      .then((data) => {
        this.setState({
          hospitalList: data,
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
        data={this.state.hospitalList}
        striped
        pagination
        search
        options={options}
      >
        <TableHeaderColumn dataField="id" width="5%">Doctor ID</TableHeaderColumn>
        <TableHeaderColumn dataField="createdAt" isKey width="10%">createdAt</TableHeaderColumn>
        <TableHeaderColumn dataField="name" width="5%">Name</TableHeaderColumn>
        <TableHeaderColumn dataField="email" width="5%">Email</TableHeaderColumn>
        <TableHeaderColumn dataField="contact" width="10%">Contact</TableHeaderColumn>
        <TableHeaderColumn dataField="cityId" width="10%">cityId</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default Hospital;
