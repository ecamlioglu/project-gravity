// mail senders

function isEmpty(value) {
    if (value === "" || value == null || typeof value == 'undefined') {
        return false;
    }
    return (value.length > 0);
}
function rightEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function sendEmailFromForm() {
    const senderMessage = document.getElementById("SenderStatus");

    var firstName = document.getElementById("firstName");
    var surname = document.getElementById("surName");
    var birthday = document.getElementById("birthday");
    var phone = document.getElementById("phoneNumber");
    var email = document.getElementById("email");
    var messageArea = document.getElementById("msgBox");

    if(!isEmpty(firstName.value)){
        return alert("İsim alanı boş bırakılamaz!");
    }if(!isEmpty(email.value)){
        return alert("E-Mail alanı boş bırakılamaz!");
    }else{
        if(!rightEmail(email.value)){
            return alert("Hatalı E-Mail adresi girişi yaptınız.");
        }
    }

    var mailBody = `<html><h2>Merhaba <italic> ${firstName.value} ${surname.value} </italic>,</h2><br><p>Bu mail doldurduğunuz form doğrultusunda gönderilmiştir.</p><br><strong>Doğum tarihiniz: ${birthday.value}<br>Telefon Numaranız: ${phone.value}<br></strong><br></br><em> Gönderdiğiniz Mesaj: ${messageArea.value}</em></html>`;
    Email.send({
        SecureToken: "1a21b1f2-214e-4fa0-8c23-3e7a717a43ad",
        To: email.value,
        From: 'gravitysender@gmail.com',
        Subject: "Mesajınız alınmıştır! [NO-REPLY]",
        Body: mailBody
    }).then(
        message => alert("Mail talebiniz başarılı bir şekilde işleme alınmıştır. Sağlıklı günler dileriz."),
        senderMessage.style.display = "block"
    );
}