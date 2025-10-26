// ===============================
// MagiMir Việt Nam — Script chính
// ===============================

// --- 1. Toggle menu di động ---
const mobileToggle = document.getElementById("mobileToggle");
const mainNav = document.getElementById("mainNav");

if (mobileToggle && mainNav) {
  mobileToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  // Tự đóng menu khi click vào 1 liên kết
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => mainNav.classList.remove("open"));
  });
}

// --- 2. Cuộn mượt đến section ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId && targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// --- 3. Gửi form liên hệ ---
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Vui lòng nhập đầy đủ thông tin trước khi gửi!");
      return;
    }

    // Tạo liên kết mailto tự động
    const mailtoLink = `mailto:huanglidong3008@gmail.com?subject=Liên hệ từ ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}%0A%0AEmail: ${email}`;
    window.location.href = mailtoLink;

    contactForm.reset();
    alert("✅ Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
  });
}

// --- 4. Tạm dừng slider khi hover ---
const slider = document.querySelector(".slider-track");
if (slider) {
  let isPaused = false;

  slider.addEventListener("mouseenter", () => {
    slider.style.animationPlayState = "paused";
    isPaused = true;
  });
  slider.addEventListener("mouseleave", () => {
    slider.style.animationPlayState = "running";
    isPaused = false;
  });
}

// --- 5. Hiệu ứng Before/After slider ---
const baRange = document.getElementById("baRange");
const baOverlay = document.querySelector(".ba-overlay");

if (baRange && baOverlay) {
  baRange.addEventListener("input", (e) => {
    const value = e.target.value;
    baOverlay.style.width = `${value}%`;
  });
}

// --- 5. Khởi tạo chuyển động tự động cho phần "Tính năng nổi bật" ---
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slider-track");
  if (track) {
    // Đảm bảo animation hoạt động lại khi load
    track.style.animation = "scroll-left 40s linear infinite";

    // Nếu bạn muốn lặp nội dung để chuyển động mượt (tránh trống ở cuối)
    const clone = track.innerHTML;
    track.innerHTML += clone;
  }
});

// ===== Hiển thị popup khi bấm "Dùng thử miễn phí" =====
const trialBtn = document.getElementById("trialBtn");
const popup = document.getElementById("trialPopup");
const closePopup = document.getElementById("closePopup");

if (trialBtn && popup && closePopup) {
  trialBtn.addEventListener("click", () => {
    popup.style.display = "flex"; // Hiện popup
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none"; // Đóng popup
  });

  // Cho phép đóng khi click ra ngoài vùng popup-box
  popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.style.display = "none";
  });
}
