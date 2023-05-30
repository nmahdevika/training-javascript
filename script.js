document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone-number').value;
    var vacancy = document.getElementById('lowongan').value;
    var location = document.getElementById('lokasi').value;

    // Create summary element
    var summaryElement = document.createElement('div');
    summaryElement.innerHTML = '<h2>Submitted Data Summary:</h2>' +
      '<p><strong>Name:</strong> ' + name + '</p>' +
      '<p><strong>Email:</strong> ' + email + '</p>' +
      '<p><strong>Mobile Phone:</strong> ' + phone + '</p>' +
      '<p><strong>Vacancy:</strong> ' + vacancy + '</p>' +
      '<p><strong>Location:</strong> ' + location + '</p>';

    console.log(summaryElement)

    // Append summary element to the page
    document.getElementById('summary').appendChild(summaryElement);

    // // Get form data
    // var name = document.getElementById('name').value;
    // var email = document.getElementById('email').value;
    // var phone = document.getElementById('phone').value;
    // var vacancy = document.getElementById('vacancy').value;
    // var location = document.getElementById('location').value;

    // You can perform validation or additional processing here

    // // Send the form data to the server
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', 'submit.php', true); // Replace with the URL to handle form submission
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    //     // Handle the response from the server
    //     console.log(xhr.responseText);
    //     // Optionally, display a success message or redirect the user
    //   } else {
    //     // Handle errors
    //     console.log(xhr.status);
    //   }
    // };
    // xhr.send(
    //   'name=' + encodeURIComponent(name) +
    //   '&email=' + encodeURIComponent(email) +
    //   '&phone=' + encodeURIComponent(phone) +
    //   '&vacancy=' + encodeURIComponent(vacancy) +
    //   '&location=' + encodeURIComponent(location)
    // );
});