import React from 'react';
import $ from 'jquery';

const PrescriptionItem = (props) => (
  <div>
    <span> {props.item.id} </span>
    <span> {props.item.doctorId} </span>
    <span> {props.item.doctorNotes} </span>
    <span> {props.item.illnessId} </span>
    <span> {props.item.imageSrc} </span>
  </div>
);


class Prescription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prescriptionList: [],
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/api/prescription',
      type: 'GET',
      success: (res) => {
        this.setState({
          prescriptionList: res
        });
      },
      error: () => {
        console.log('error fetching users from database');
      }
    });
  }

  render() {
    const prescriptionList = this.state.prescriptionList.map((prescription) => {
      console.log('prescription', prescription);
      return (
        <PrescriptionItem key={prescription.id} item={prescription} />
      )
    });

    return(
      <div>
        { prescriptionList }
      </div>
    );
  }
}

export default Prescription;
