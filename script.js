function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (dob === "") {
        document.getElementById('age-result').textContent = "Please enter your date of birth!";
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    document.getElementById('age-result').textContent = `Your age is ${age} years old`;
}
