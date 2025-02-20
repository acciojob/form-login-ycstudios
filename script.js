function getFormvalue() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        let firstName = document.querySelector('input[name="fname"]').value;
        let lastName = document.querySelector('input[name="lname"]').value;
        alert(`${firstName} ${lastName}`);
    });
}
