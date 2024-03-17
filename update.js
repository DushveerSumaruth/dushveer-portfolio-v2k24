// code for input
const futureUpdates = document.querySelector('.retrive-email');

// subject
const updateSubject = document.querySelector('.subject-update');
console.log(updateSubject);
console.log(futureUpdates);


function receiveUpdate() {
    const updateMessage = `User Email: ${futureUpdates.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "netuser666x@gmail.com",
        Password : "78528511325FF7871B759466D33E94EF3DC1",
        To : 'netuser666x@gmail.com',
        From : "netuser666x@gmail.com",
        Subject : updateSubject.value,
        Body : updateMessage
    }).then(() => {
        futureUpdates.value = '';
        futureUpdates.focus();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Email Was Successfully Sent!",
            showConfirmButton: false,
            timer: 1500
          });
    })
};

const updateForm = document.getElementById('update-form');
console.log(updateForm);

updateForm.addEventListener("submit", function(e) {
    e.preventDefault();
    receiveUpdate();
    // checkInputs()
    // alert('Your Email Was sent, thank you!');
});