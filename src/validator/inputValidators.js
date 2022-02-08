export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validatePassword(password) {
  // matches a string of 8 or more characters;
  // that contains at least one digit (\d is shorthand for [0-9]);
  // at least one lowercase character
  // at least one uppercase character
  var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/;
  return re.test(password);
}
