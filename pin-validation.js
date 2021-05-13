function validatePIN(pin) {
  //return true or false
  //   if (pin.length != 6 || !Number(pin)) {
  //     console.error("Please try again");
  //     return false;
  //   }
  //   if (pin.length != 4 || !Number(pin)) {
  //     console.error("Please try again");
  //     return false;
  //   }
  //   console.log(pin);
  //   return true;

  if ((pin.length == 4 || pin.length == 6) && !pin.match(/\D/)) {
    console.log(pin);
    return true;
  }
  return false;
}
validatePIN("1234");
validatePIN("1a34");
validatePIN("1212334");
validatePIN("1a356");
validatePIN("12aa56");
validatePIN("1.356");
validatePIN("1.56");
validatePIN("126356");
validatePIN("126356");
