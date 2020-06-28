
 var text = $('#hour').text();

 localStorage.setItem('hour', text);
 alert(localStorage.getItem('hour'));

 // the date 
$.datepicker.formatDate('yy/mm/dd', new Date());

