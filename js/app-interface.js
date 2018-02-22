import {DocName} from './../js/docName.js';
import {docQuery} from './../js/docQueryb.js';

$(document).ready(function() {
// let info = new DocName();
// let docQuery = new DocQuery();
// let body.data = [];
// let nameArray = [];

  // $('#nameForm').submit(function(event){
  //   $("#showDoctors").empty();
  //   event.preventDefault();
  //   let firstName = $('#firstName').val();
  //   let lastName = $('#lastName').val();
  //   debugger;
  //   info.getDocName(firstName, lastName);
  //   for (var i = 0; i < info.docName.length; i++) {
  //   if(info.docName.length > 0) {
  //     $('#showDoctors').append(`<div class="list"><strong>
  //     ${info.docName[i].profile.first_name} ${info.docName[i].profile.last_name} </strong><br>${info.docName[i].practices[0].visit_address.street}<br>
  //     ${info.docName[i].practices[0].visit_address.city} ${info.docName[i].practices[0].visit_address.state}, ${info.docName[i].practices[0].visit_address.zip}
  //     <br>${info.docName[i].practices[0].phones[0].number}<br>Accepting new patients: ${info.docName[i].practices[0].accepts_new_patients}
  //     <br>Website: ${info.docName[i].practices[0].website}<br></div>`);
  //   } else {
  //     $('.showErrors').append('<div class="list">No doctors availabe in your area fit that request.</div>');
  //     }
  //   };
  // });
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
      } else {
        $('#showDoctors').append("There were no doctors that fit your search");
      }
      } function(error) {
        $('#showErrors').append(`body.meta.message`)

      }
    });
  });
});
