function btn_result(){
    var nuachuvi = "";
    var duongcao = "";
    nuachuvi = parseInt(nuachuvi);
    nuachuvi = (5+6+7)/2;

    duongcao = parseInt(duongcao);
    duongcao = (2* Math.sqrt(nuachuvi*(nuachuvi-5)*(nuachuvi-6)*(nuachuvi-7)))/5

    var dientich = "";
    dientich = parseInt(dientich);
    dientich = (1/2)*5* duongcao;

    document.getElementById('result').innerHTML = dientich + "";
}