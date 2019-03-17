function btn_confirmYear(){
    var year = document.getElementById('text_year').value;
    year = parseInt(year);

    if(year%4==0 && year %100 != 0 || year %400==0){
        document.getElementById('result').innerHTML = year +  " Là Năm nhuận";
    }else{
        document.getElementById('result').innerHTML = year + " không phải năm nhuận"
    }
}