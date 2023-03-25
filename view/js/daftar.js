function saveData() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var nomor = document.getElementById("nomor").value;
    var share_content = document.querySelector('input[name="share"]:checked').value;
    var arts = [];
    var checkboxes = document.querySelectorAll('input[name="art[]"]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
        arts.push(checkboxes[i].value);
    }
    var member = document.getElementById("member").value;

    var data = {
        Nama: nama,
        Email: email,
        Nomor_Telepon: nomor,
        share_content: share_content,
        Arts: arts,
        Member: member
    };

    sessionStorage.setItem("data", JSON.stringify(data));
    alert("Data berhasil disimpan");
    window.location.href = "../daftar/tampil-daftar.html";
    // console.log(JSON.parse(sessionStorage.getItem("data")))
}