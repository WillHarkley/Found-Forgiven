// Function to open the prayer request popup
function openPrayerPopup() {
    document.getElementById('prayer-popup').style.display = 'block';
     }
   
  
     // Function to close the prayer request popup
     function closePrayerPopup() {
    document.getElementById('prayer-popup').style.display = 'none';
     }
   
  
     // Function to handle form submission
  function submitPrayerRequest(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const request = document.getElementById('request').value;

    // You would typically send this data to a server here
    // For now, let's just log it to the console
    console.log('Prayer Request Submitted:');
    console.log('Name:', name);
    console.log('Request:', request);

    // Prepare the email body
    const emailBody = `
    Prayer Request Details:
    Name: ${name || 'Anonymous'}
    Request: ${request}
    `;

    // Use mailto: link to open the user's default email client
    window.location.href = `mailto:harkleywilliam@gmail.com?subject=New Prayer Request&body=${encodeURIComponent(emailBody)}`;


    // Provide feedback to the user (e.g., a thank you message)
    alert('Your prayer request has been sent to harkleywilliam@gmail.com. Thank you!');

    // Clear the form
    document.getElementById('prayer-form').reset();

    // Close the popup
    closePopup();
  }

/*  async function submitPrayerRequest(event) {
    event.preventDefault(); // Prevent default form submission

    const form = document.getElementById('prayer-form');
    const formData = new FormData(form); // Get form data

    try {
        const response = await fetch('/submit-prayer-request.php', { // Replace with your server-side script URL
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const result = await response.text(); // Or response.json() if you send JSON
            alert(result); // Show success message (replace with better UI)
            form.reset(); // Clear the form
            closePopup(); // Close the popup
        } else {
            alert('Error submitting prayer request. Please try again.'); // Show error (replace with better UI)
            console.error('Server error:', response.status);
        }
    } catch (error) {
        alert('Error submitting prayer request. Please try again.'); // Show error (replace with better UI)
        console.error('Fetch error:', error);
    }
}
   
  
     // Close the popup if the user clicks outside of it
     window.onclick = function(event) {
    const modal = document.getElementById('prayer-popup');
    if (event.target == modal) {
    closePrayerPopup();
    }
     }
    */
// Function to close the popup when the user clicks outside of it