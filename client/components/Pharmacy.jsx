import React from 'react';
import $ from 'jquery';
import { Table } from 'react-bootstrap';

const PharmacyTableHead = () => {
  return <thead>
    <tr>
      <th> Name </th>
      <th> Email </th>
      <th> Mobile </th>
      <th> cityId </th>
    </tr>
  </thead>
};

const PharmacyTableRow = (props) => (
  <tr>
    <td> {props.item.name} </td>
    <td> {props.item.email} </td>
    <td> {props.item.mobile} </td>
    <td> {props.item.cityId} </td>
  </tr>
);

const PharmacyTableBody = (props) => {
  const pharmacyBody = props.list.map((item) => {
    return (
      <PharmacyTableRow key={item.id} item={item} />
    )
  });

  return(
    <tbody>
      { pharmacyBody }
    </tbody>
  );
};


class Pharmacy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pharmacyList: [],
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/api/pharmacy',
      type: 'GET',
      success: (res) => {
        this.setState({
          pharmacyList: res
        });
      },
      error: () => {
        console.log('error fetching users from database');
      }
    });
  }

  render() {
    return(
      <Table responsive>
        <PharmacyTableHead />
        <PharmacyTableBody list={this.state.pharmacyList} />
      </Table>
    );
  }
}

export default Pharmacy;
