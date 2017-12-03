import React from 'react';
import $ from 'jquery';
import { Table } from 'react-bootstrap';

const HospitalTableHead = () => {
  return <thead>
    <tr>
      <th> Name </th>
      <th> Email </th>
      <th> Contact </th>
      <th> cityId </th>
    </tr>
  </thead>
};

const HospitalTableRow = (props) => (
  <tr>
    <td> {props.item.name} </td>
    <td> {props.item.email} </td>
    <td> {props.item.contact} </td>
    <td> {props.item.cityId} </td>
  </tr>
);

const HospitalTableBody = (props) => {
  const hospitalBody = props.list.map((item) => {
    return (
      <HospitalTableRow key={item.id} item={item} />
    )
  });

  return(
    <tbody>
      { hospitalBody }
    </tbody>
  );
};


class Hospital extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hospitalList: [],
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/api/hospital',
      type: 'GET',
      success: (res) => {
        this.setState({
          hospitalList: res
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
        <HospitalTableHead />
        <HospitalTableBody list={this.state.hospitalList} />
      </Table>
    );
  }
}

export default Hospital;
