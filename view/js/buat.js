function saveData() {
    var judul = document.getElementById("judul").value;
    var detail1 = document.getElementById("detail1").value;
    var detail2 = document.getElementById("detail2").value;
    var copyright = document.querySelector('input[name="copyright"]:checked').value;
    var arts = [];
    var checkboxes = document.querySelectorAll('input[name="art[]"]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
        arts.push(checkboxes[i].value);
    }

    var data = {
        judul: judul,
        detail1: detail1,
        detail2: detail2,
        copyright: copyright,
        arts: arts
    };

    sessionStorage.setItem("data", JSON.stringify(data));
    alert("Data berhasil disimpan");
    window.location.href = "../buat-art/art-tampil.html";
}