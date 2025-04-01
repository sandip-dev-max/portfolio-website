// Open Modal Function
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex'; // Show the modal
        document.body.style.overflow = 'hidden'; // Disable scrolling
    }
}

// Close Modal Function
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none'; // Hide the modal
        document.body.style.overflow = 'auto'; // Enable scrolling
    }
}

// Close Modal on Outside Click
window.addEventListener('click', function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
<script>
    const year = new Date().getFullYear();
    document.querySelector("#footer p").innerHTML = `&copy; ${year} Sandip Bhatta. All Rights Reserved.`;
</script>