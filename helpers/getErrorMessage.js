/*
File name: helpers/getErrorMessage.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 20, 2022
*/

const getErrorMessage = (err) => {
  console.log(`[DEBUG] ${err}`);
  let message = "";

  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = "Username already exists";
        break;
      default:
        message = "Something went wrong";
    }
  } else {
    for (let errName in err.errors) {
      if (err.errors[errName].message) {
        message += `${err.errors[errName].message}\n`;
      }
    }
  }

  return message;
}

module.exports = getErrorMessage;
