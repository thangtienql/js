var number_random = Math.floor(Math.random() * 10);

var duDoan = prompt('Hãy nhập số đoán');
duDoan = parseInt(duDoan);

if(duDoan == number_random){
    alert('Công việc tốt');
}else{
    alert('Không khớp');
}