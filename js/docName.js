var apiKey = require('./../.env').apiKey;

export class DocName{

  constructor() {
    // this.docName = [];
    this.firstName = firstName;
    this.lastName = lastName;
  }

getDocName(firstName, lastName) {
  let docName = [];
  let that = this;
  let apiCall = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&last_name=${lastName}&location=or-portland&user_location=45.523%2C-122.676&skip=0&limit=10&user_key=${apiKey}`;
    console.log(url);
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.message));
      }
    };
    request.open("GET", url, true);
    request.send();
    });
    apiCall.then(function(response) {
    let body = JSON.parse(response);
    for (var i = 0; i < body.data.length; i++) {
      if(body.data.length > 0){
        docName.push(body.data[i]);
      }
    }
  });
  }
}
