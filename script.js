// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

// Interactive elements to trigger cursor hover effect
const interactiveElements = document.querySelectorAll('a, button, input');

document.addEventListener('mousemove', (e) => {
    // Check if device supports hover (desktop)
    if (window.matchMedia("(pointer: fine)").matches) {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        follower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    }
});

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
    });
});

// Login Logic
const loginForm = document.getElementById('login-form');
const loginOverlay = document.getElementById('login-overlay');
const mainContent = document.getElementById('main-content');
const errorMsg = document.getElementById('error-msg');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = usernameInput.value.trim();
    const pass = passwordInput.value.trim();

    if (user === 'AlokM' && pass === 'AlokM') {
        // Success
        loginOverlay.classList.add('fade-out');
        setTimeout(() => {
            loginOverlay.style.display = 'none';
            mainContent.classList.remove('hidden');
        }, 800);
    } else {
        // Failure
        errorMsg.classList.remove('error-hidden');
        errorMsg.classList.add('error-visible');
        loginForm.classList.add('shake');

        setTimeout(() => {
            loginForm.classList.remove('shake');
            errorMsg.classList.remove('error-visible');
            errorMsg.classList.add('error-hidden');
        }, 800);
    }
});

// Shake Animation Style injection
const style = document.createElement('style');
style.innerHTML = `
    @keyframes shake {
        0%, 100% { transform: perspective(1000px) translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: perspective(1000px) translateX(-10px); }
        20%, 40%, 60%, 80% { transform: perspective(1000px) translateX(10px); }
    }
    .shake { animation: shake 0.6s cubic-bezier(.36,.07,.19,.97) both; }
`;
document.head.appendChild(style);


// Download Logic
const downloadBtns = document.querySelectorAll('.btn-download');
const popup = document.getElementById('download-popup');

downloadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const fileName = e.target.dataset.file;

        // Show Popup
        popup.classList.add('show');

        // Wait 2 seconds then download
        setTimeout(() => {
            popup.classList.remove('show');
            downloadFile(fileName);
        }, 2000);
    });
});

function downloadFile(fileName) {
    // Create invisible link to trigger download
    const a = document.createElement('a');
    a.href = fileName; // Assumes files are in same root directory
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Initialize Vanilla Tilt
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
});
