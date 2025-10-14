document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menuToggle');
menuToggle?.addEventListener('click', () => {
    const nav = document.querySelector('.site-nav');
    if (!nav) return;
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
});


function handleForm(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();
    const status = document.getElementById('formStatus');

    if (!name || !email || !msg) {
        status.textContent = 'Please fill all fields.';
        status.style.color = 'red';
        return;
    }

    const subject = encodeURIComponent('Endurance Ride Inquiry from ' + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`);
    const mailto = `mailto:info@enduranceridepk.example?subject=${subject}&body=${body}`;
    window.location.href = mailto;

    status.textContent = 'Opening your email client...';
    status.style.color = 'green';
}


const bookingForm = document.getElementById("bookingForm");
const bookingStatus = document.getElementById("bookingStatus");

if (bookingForm) {
    bookingForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        bookingStatus.textContent = "Submitting...";
        bookingStatus.style.color = "#555";

        try {
            const response = await fetch(bookingForm.action, {
                method: bookingForm.method,
                body: new FormData(bookingForm),
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                bookingForm.reset();
                bookingStatus.textContent = "✅ Booking sent successfully!";
                bookingStatus.style.color = "#00cc66";
            } else {
                bookingStatus.textContent = "❌ Error submitting. Try again.";
                bookingStatus.style.color = "red";
            }
        } catch (err) {
            bookingStatus.textContent = "⚠️ Network issue. Try again later.";
            bookingStatus.style.color = "orange";
        }
    });
}
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;
    sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < trigger) {
            section.classList.add("show-section");
        }
    });
});
