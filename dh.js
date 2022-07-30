var tetAmLich = new Date(2022,12,22,0  ,0,0).getTime();
 
function newYear() {
    /*Lấy thời gian ngày hiện tại (mily giây) */
    var ngayHienTai = new Date().getTime();

    /*Tính thời gian còn lại (mily giây) */
    thoigianConLai = tetAmLich - ngayHienTai;

   /*Chuyển đơn vị thời gian tương ứng sang mili giây*/
    var giay = 1000;
    var phut = giay * 60;
    var gio = phut * 60;
    var ngay = gio * 24;

   /*Tìm ra thời gian theo ngày, giờ, phút giây còn lại thông qua cách chia lấy dư(%) và làm tròn số(Math.floor) trong Javascript*/
    var d = Math.floor(thoigianConLai / (ngay));
    var h = Math.floor((thoigianConLai % (ngay)) / (gio));
    var m = Math.floor((thoigianConLai % (gio)) / (phut));
    var s = Math.floor((thoigianConLai % (phut)) / (giay));

   /*Hiển thị kết quả ra các thẻ Div với ID tương ứng*/
    document.getElementById("day").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("second").innerText = s;
}

/*Thiết Lập hàm sẽ tự động chạy lại sau 1s*/
setInterval(function () {
    newYear()
}, 1000)