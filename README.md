jQuery.getJSON('https://docs.google.com/spreadsheets/d/1nT37x_ZJisrru8WZvl9EquLHu2dvi3F8rRPQIk8lc_w/export?format=csv', function (csvdata) {
  console.log(csvdata.csvToArray());
});
