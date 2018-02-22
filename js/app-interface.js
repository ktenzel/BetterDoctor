import {docName} from './../js/docName.js';
import {docQuery} from './../js/docQueryb.js';

$(document).ready(function() {
// let info = new DocName();
// let docQuery = new DocQuery();
// let body.data = [];
// let nameArray = [];

  $('#nameForm').submit(function(event){
    $("#showDoctors").empty();
    $("#showErrors").empty();
    event.preventDefault();
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let nameQuery = docName(firstName, lastName);

    nameQuery.then(function(response) {
    let body = JSON.parse(response);
    if(body.data.length > 0) {
    for (var i = 0; i < body.data.length; i++) {
    if(body.data.length > 0) {
      $('#showDoctors').append(`<div class="list"><strong>
      ${body.data[i].profile.first_name} ${body.data[i].profile.last_name} </strong><br>${body.data[i].practices[0].visit_address.street}<br>
      ${body.data[i].practices[0].visit_address.city} ${body.data[i].practices[0].visit_address.state}, ${body.data[i].practices[0].visit_address.zip}
      <br>${body.data[i].practices[0].phones[0].number}<br>Accepting new patients: ${body.data[i].practices[0].accepts_new_patients}
      <br>Website: ${body.data[i].practices[0].website}<br></div>`);
    } else {
      $('.showErrors').append('<div class="list">No doctors availabe in your area fit that request.</div>');
      }
    };
  });


  $('#queryForm').submit(function(event){
  $("#showDoctors").empty();
  $("#showErrors").empty();
    event.preventDefault();
    let query = $('#query').val();
    let doctorQuery = docQuery(query);

    doctorQuery.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      if(body.data.length > 0) {
      for (var i = 0; i < body.data.length; i++) {
        $('#showDoctors').append(`<div class="list"><strong>${body.data[i].profile.first_name} ${body.data[i].profile.last_name}</strong><br>${body.data[i].practices[0].visit_address.street}
        <br>${body.data[i].practices[0].visit_address.city} ${body.data[i].practices[0].visit_address.state}, ${body.data[i].practices[0].visit_address.zip}<br>${body.data[i].practices[0].phones[0].number}
        <br>Accepting new patients: ${body.data[i].practices[0].accepts_new_patients}<br>Website: ${body.data[i].practices[0].website}<br></div>`);
      }
        } else {
        $('#showDoctors').append("There were no doctors that fit your search");
      } function(error) {
        $('#showErrors').append(`body.meta.message`);

      }
    });
  });
});
