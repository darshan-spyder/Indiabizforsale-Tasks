FileValidation = (event) => {
    var image = document.getElementById('output');
    const fi = document.getElementById("file");
    image.src = URL.createObjectURL(event.target.files[0]);
    console.log(image);
    console.log(image.src);
    document.getElementById("demoi").src = image.src;
}
$(function () {
    $('#output').on('click', function () {
        $('#file').click();
    });
});

function visib() {
    document.getElementById('vi').style.cssText = 'display:none;';
    document.getElementById('vi_update').style.cssText = 'display:block';
}

function visiedit() {
    document.getElementById('vi_update').style.cssText = 'display:none;';
    document.getElementById('vi').style.cssText = 'display:block';
}

function toggleFormElements(bDisabled) {
    var inputs = document.getElementsByTagName("input");
    // console.log(inputs.length);
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = bDisabled;
    }
    var selects = document.getElementsByTagName("select");
    for (var i = 0; i < selects.length; i++) {
        selects[i].disabled = bDisabled;
    }
    var textareas = document.getElementsByTagName("textarea");
    for (var i = 0; i < textareas.length; i++) {
        textareas[i].disabled = bDisabled;
    }
    
  
    var phname;
    hname = document.getElementById("hname").value;
    localStorage.setItem("Name", hname)
    document.getElementById("phname").innerHTML = hname;

    var phone;
    phone = document.getElementById("phone").value;
    localStorage.setItem("phone no", phone)
    document.getElementById("pphone").innerHTML = phone;

    var zip;
    zip = document.getElementById("zip").value;
    localStorage.setItem("zipcode", zip)
    document.getElementById("pzip").innerHTML = zip;

    var pcname;
    cname = document.getElementById("cname").value;
    localStorage.setItem("comapany name", cname)
    document.getElementById("pcname").innerHTML = cname;

    var budget;
    budget = document.getElementById("budget").value;
    localStorage.setItem("budget", budget)
    document.getElementById("pbudget").innerHTML = budget;

    var checkedValue1, checkedValue11;
    let che = [];
    let boxes = document.getElementsByClassName('cbox').length;
    let bo = document.getElementsByClassName('cbox')
    for (var i = 0; i < boxes; i++) {
        if (bo[i].checked) {
            checkedValue1 = bo[i].value;
            che.push(checkedValue1);
        }
    }
    localStorage.setItem("activities", che)
    document.getElementById("pcbox").innerHTML = che;

    var lcheckedValue1;
    let lche = [];
    let lboxes = document.getElementsByClassName('lbox').length;
    let lbo = document.getElementsByClassName('lbox')
    for (var i = 0; i < lboxes; i++) {
        if (lbo[i].checked) {
            lcheckedValue1 = lbo[i].value;
            lche.push(lcheckedValue1);
        }
    }
    localStorage.setItem("activities", lche)
    document.getElementById("plbox").innerHTML = lche;

    var scheckedValue1;
    let sche = [];
    let sboxes = document.getElementsByClassName('sbox').length;
    let sbo = document.getElementsByClassName('sbox')
    for (var i = 0; i < sboxes; i++) {
        if (sbo[i].checked) {
            scheckedValue1 = sbo[i].value;
            sche.push(scheckedValue1);
        }
    }
    localStorage.setItem("activities", sche)
    document.getElementById("psbox").innerHTML = sche;


    let boxes1 = document.getElementsByClassName('rans').length;
    let boo = document.getElementsByClassName('rans')
    for (var i = 0; i < boxes1; i++) {
        if (boo[i].checked) {
            checkedValue11 = boo[i].value;
            console.log(checkedValue11);
        }
    }
    localStorage.setItem("Funding source", checkedValue11)
    document.getElementById("prans").innerHTML = checkedValue11;

    var e = document.getElementById("ind");
    var value = e.value;
    var text1 = e.options[e.selectedIndex].text;
    localStorage.setItem("Industries", text1)
    document.getElementById("pind").innerHTML = text1;

}