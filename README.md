# Better Doctor APIcall_

#### Javascript Project at Epicodus {2/16/18}_


#### By _**Kyle Tenzeldam**_


## Description
This app accesses the BetterDoctor API and queries request by first and last name as well as conditions.
## Setup/Installation Requirements

Clone repository

in Terminal run the following:
 $ npm install
 $ bower install
 $ gulp build
 $ gulp serve
-you may need to use the command line for windows as appose to power shell or a bash based solution.

-I've included a .env file in the top level of the project that houses the API key. To register for your own api key please go to https://developer.betterdoctor.com/signup and create your own account. 
## Specifications

| Behavior        | Input           | Outcome  |
| ------------- |:-------------:| -----:|
| program calls Api from BetterDoctor  | N/A | N/A |
| program pulls data from API based on "medical issue" input | "broken leg" | "List of doctors" |
| program pulls data from API based on "name" input | "john" | "first name, last name, address, phone number, website and whether or not the doctor is accepting new patients" |
| program returns specified error if API pulls an error | "404" | "Error" |
| program evaluates if no data is available  |  | "no data available" |


## Known Bugs
errors return undefined
## Future additions
Would like to add location menu/search.
## Technologies Used

HTML/CSS
Javascript es6
NODE.js
gulp
bower
karma
jasmine
### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2015 **_{List of contributors or company name}_**
