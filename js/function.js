document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // 一度表示したら監視を解除
            }
        });
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in2");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // 一度表示したら監視を解除
            }
        });
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in3");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // 一度表示したら監視を解除
            }
        });
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".slide-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // 一度表示したら監視を解除
            }
        });
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".slide-in2");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // 一度表示したら監視を解除
            }
        });
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".slide-in3");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // 一度表示したら監視を解除
            }
        });
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});


// ヘッダーのスクロール挙動
document.addEventListener("DOMContentLoaded", () => {
	const header = document.querySelector(".header");
	let lastScrollY = window.scrollY;

	window.addEventListener("scroll", () => {
		const currentScrollY = window.scrollY;

		if (currentScrollY === 0) {
			header.classList.remove("hidden");
		} else if (currentScrollY > lastScrollY) {
			header.classList.add("hidden");
		} else {
			header.classList.remove("hidden");
		}

		lastScrollY = currentScrollY;
	});
});
