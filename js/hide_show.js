// ننشئ مراقباً للعناصر
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // إذا أصبح العنصر مرئياً في الشاشة
        if (entry.isIntersecting) {
            // نضيف له كلاس 'show' الذي ينشط الحركة
            entry.target.classList.add('show');
            
            // (اختياري) نتوقف عن مراقبة العنصر بعد ظهوره
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // عندما يكون 10% من العنصر ظاهراً
});

// نختار كل العناصر التي نريد مراقبتها
const elementsToAnimate = document.querySelectorAll('.skills_sect');

// نبدأ مراقبة كل عنصر
elementsToAnimate.forEach(element => {
    observer.observe(element);
});