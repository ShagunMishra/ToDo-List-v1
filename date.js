//jshint esversion:6

exports.getDate  = function() {

  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }; //options here is format of the datatype in which we want our date

  return day = today.toLocaleDateString("en-US", options)

};

exports.getDay = function() {

  const today = new Date();

  const options = {
    weekday: "long"
  };

   return today.toLocaleDateString("es-US", options);
}
