
// mail senders

function sendEmailFromForm() {
    const senderMessage = document.getElementById("SenderStatus");

    var firstName = document.getElementById("firstName").value;
    var surname = document.getElementById("surName").value;
    var birthday = document.getElementById("birthday").value;
    var phone = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var messageArea = document.getElementById("msgBox").value;

    
    var mailBody = `<html><h2>Merhaba <italic> ${firstName} ${surname} </italic>,</h2><br><p>Bu mail doldurduğunuz form doğrultusunda gönderilmiştir.</p><br><strong>Doğum tarihiniz: ${birthday}<br>Telefon Numaranız: ${phone}<br></strong><br></br><em> Gönderdiğiniz Mesaj: ${messageArea}</em></html>`;
    Email.send({
        SecureToken: "1a21b1f2-214e-4fa0-8c23-3e7a717a43ad",
        To: email,
        From: 'gravitysender@gmail.com',
        Subject: "Mesajınız alınmıştır! [NO-REPLY]",
        Body: mailBody
    }).then(
        message => alert("Mail talebiniz başarılı bir şekilde işleme alınmıştır. Sağlıklı günler dileriz."),
        senderMessage.style.display = "block"
    );
}