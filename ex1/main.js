var ngay = new Date();
var thutuNgay = ngay.getDay();
var day_name = "";

switch (thutuNgay) {
    case 0:
        day_name = 'Chủ nhật';
        break;
    case 1:
        day_name = 'Thứ Hai';
        break;
    case 2:
        day_name = 'Thứ Ba';
        break;
    case 3:
        day_name = 'Thứ Tứ';
        break;
    case 4:
        day_name = 'Thứ Năm';
        break;
    case 5:
        day_name = 'Thứ Sáu';
        break;
    case 7:
        day_name = 'Thứ Bảy';
        break;
}
document.getElementById('demo').innerHTML = day_name;