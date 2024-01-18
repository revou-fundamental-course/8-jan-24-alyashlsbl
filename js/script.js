
function getLuasPersegi(){
    sisi = document.getElementById("squareSideLuas").value;
    if(sisi==""){
        alert("Panjang sisi harus diisi!");
    }
    else {
        luas = sisi * sisi;
        rumusLuasPersegi.innerHTML= "L = S x S";
        hitungLuasPersegi.innerHTML= "L = " + sisi + " x " + sisi;
        resultLuasPersegi.innerHTML= "L = " + luas;
    }
}

function getKelilingPersegi(){
    sisi = document.getElementById("squareSideKeliling").value;
    if(sisi==""){
        alert("Panjang sisi harus diisi!");
    }
    else {
        keliling = 4 * sisi;
        rumusKelilingPersegi.innerHTML= "K = 4 x S";
        hitungKelilingPersegi.innerHTML= "K = 4 x " + sisi;
        resultKelilingPersegi.innerHTML= "K = " + keliling;
    }
}

function reset(){
    document.getElementById("squareSideLuas").value="";
    document.getElementById("squareSideKeliling").value="";
    rumusLuasPersegi.innerHTML= "";
    hitungLuasPersegi.innerHTML= "";
    resultLuasPersegi.innerHTML= "";
    rumusKelilingPersegi.innerHTML= "";
    hitungKelilingPersegi.innerHTML= "";
    resultKelilingPersegi.innerHTML= "";
}
    