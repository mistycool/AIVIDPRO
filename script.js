// Page Navigation Function
function navigateTo(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach((page) => {
        page.classList.remove('active');
    });

    // Show the selected page
    const selectedPage = document.querySelector(`#${pageId}`);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Update sidebar active state
    document.querySelectorAll('.menu-item').forEach((item) => {
        item.classList.remove('active');
    });
    const activeMenuItem = document.querySelector(`[onclick="navigateTo('${pageId}')"]`);
    if (activeMenuItem) {
        activeMenuItem.classList.add('active');
    }
}

// Language Selection
document.getElementById('language-select').addEventListener('change', function () {
    alert(`Language switched to: ${this.value}`);
});

// Generate Button Action (Mock)
document.querySelectorAll('.btn-generate').forEach((btn) => {
    btn.addEventListener('click', () => {
        alert('AI is generating your video...');
    });
});

// Authentication Links (Mock)
document.querySelectorAll('.btn-auth').forEach((link) => {
    link.addEventListener('click', () => {
        alert('This is a mock login/signup page.');
    });
});
