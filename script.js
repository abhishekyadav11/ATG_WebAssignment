document.getElementById('signInLink').addEventListener('click', function () {
    event.preventDefault();
    $('#exampleModalToggle').modal('hide');
    $('#exampleModalToggle2').modal('show');
});

document.getElementById('createAccountLink').addEventListener('click', function () {
    event.preventDefault();
    $('#exampleModalToggle2').modal('hide');
    $('#exampleModalToggle').modal('show');
});

function followBtn(f) {
    var f1 = document.getElementById(f);

    if (f1.textContent == 'Follow') {
        f1.textContent = 'Followed';
        f1.style.backgroundColor = '#000';
        f1.style.color = '#fff';
    } else {
        f1.textContent = 'Follow';
        f1.style.backgroundColor = '#EDEEF0';
        f1.style.color = '#000';
    }

}
