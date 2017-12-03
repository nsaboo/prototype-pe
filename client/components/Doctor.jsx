import React from 'react';
import $ from 'jquery';
import { Table } from 'react-bootstrap';

const DoctorTableHead = () => {
  return <thead>
    <tr>
      <th> Name </th>
      <th> Age </th>
      <th> Gender </th>
      <th> Email </th>
      <th> Mobile </th>
      <th> cityId </th>
    </tr>
  </thead>
};

const DoctorTableRow = (props) => (
  <tr>
    <td> {props.item.name} </td>
    <td> {props.item.age} </td>
    <td> {props.item.gender} </td>
    <td> {props.item.email} </td>
    <td> {props.item.mobile} </td>
    <td> {props.item.cityId} </td>
  </tr>
);

const DoctorTableBody = (props) => {
  const doctorBody = props.list.map((item) => {
    return (
      <DoctorTableRow key={item.id} item={item} />
    )
  });

  return(
    <tbody>
      { doctorBody }
    </tbody>
  );
};


class Doctor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doctorList: [],
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/api/doctor',
      type: 'GET',
      success: (res) => {
        this.setState({
          doctorList: res
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
        <DoctorTableHead />
        <DoctorTableBody list={this.state.doctorList} />
      </Table>
    );
  }
}

export default Doctor;
