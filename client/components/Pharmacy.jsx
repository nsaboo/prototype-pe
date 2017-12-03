import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import helpers from '../helpers/index';

class Pharmacy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pharmacyList: [],
    };
  }

  componentDidMount() {
    const uri = '/api/pharmacy';

    helpers.getApiData(uri)
      .then((data) => {
        this.setState({
          pharmacyList: data,
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
        data={this.state.pharmacyList}
        striped
        pagination
        search
        options={options}
      >
        <TableHeaderColumn dataField="id" width="5%">Pharmacy ID</TableHeaderColumn>
        <TableHeaderColumn dataField="createdAt" isKey width="10%">createdAt</TableHeaderColumn>
        <TableHeaderColumn dataField="name" width="5%">Name</TableHeaderColumn>
        <TableHeaderColumn dataField="email" width="5%">Email</TableHeaderColumn>
        <TableHeaderColumn dataField="mobile" width="10%">Mobile</TableHeaderColumn>
        <TableHeaderColumn dataField="cityId" width="10%">cityId</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default Pharmacy;
