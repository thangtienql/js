function btn_phepnhan(){
    var num1 = document.getElementById('number_one').value;
    var num2 = document.getElementById('number_two').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var tich = "";
    tich = parseFloat(tich);
    tich = num1 * num2;
    document.getElementById('result').innerHTML = "Ket qua phep nhan: " +tich;
}

function btn_phepchia(){
    var num1 = document.getElementById('number_one').value;
    var num2 = document.getElementById('number_two').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var thuong = "";
    thuong = parseFloat(thuong);
    if(num2==0){
        document.getElementById('result').innerHTML = "khong the chia cho 0";
    }else{
        thuong = num1 / num2;
        document.getElementById('result').innerHTML = "Ket qua phep chia la :" + thuong;
    }
}