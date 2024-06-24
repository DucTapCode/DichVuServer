// scripts.js

(function() {
    emailjs.init('4Q1Sy9kLvqswOuNed'); // Thay thế YOUR_USER_ID bằng userID của bạn
})();

document.getElementById('appeal-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Lấy dữ liệu từ form
    var username = document.getElementById('username').value;
    var reason = document.getElementById('reason').value;
    var additional_info = document.getElementById('additional_info').value;
    var dev = 'xDucIsMe'; // Hoặc lấy từ một input khác nếu cần

    // Tạo object chứa dữ liệu để gửi email
    var templateParams = {
        username: username,
        reason: reason,
        additional_info: additional_info,
        dev: dev
    };

    // Gửi email thông qua EmailJS
    emailjs.send('service_ductapcode', 'template_vlrtidb', templateParams)
        .then(function(response) {
            alert('Đơn kháng cáo của bạn đã được gửi thành công!', response.status, response.text);
        }, function(error) {
            alert('Đã xảy ra lỗi khi gửi đơn kháng cáo. Vui lòng thử lại.', error);
        });
});
