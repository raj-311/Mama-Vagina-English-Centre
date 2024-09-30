let currentPage = 0;
const pages = document.querySelectorAll(".page");

let startX = 0;
let isDragging = false;
const dragThreshold = 100; // টাচ বা ড্র্যাগ করার জন্য ন্যূনতম দূরত্ব

// পৃষ্ঠাগুলির মধ্যে পৃষ্ঠা উল্টানোর ইভেন্ট হ্যান্ডলিং
document.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
    isDragging = true;
});

document.addEventListener("touchmove", function (e) {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const diffX = currentX - startX;

    // যদি টাচের অনুভূমিক দূরত্ব threshold এর বেশি হয়
    if (Math.abs(diffX) > dragThreshold) {
        if (diffX > 0 && currentPage > 0) { // ডান দিকে টেনে কভার থেকে পৃষ্ঠা 1
            currentPage--;
            flipToPage(currentPage);
        } else if (diffX < 0 && currentPage < pages.length - 1) { // বামে টেনে পৃষ্ঠা 1 থেকে পৃষ্ঠা 2
            currentPage++;
            flipToPage(currentPage);
        }
        isDragging = false; // টাচের পর ড্র্যাগ বন্ধ করা
    }
});

document.addEventListener("touchend", function (e) {
    isDragging = false; // টাচ শেষ হলে ড্র্যাগিং বন্ধ করা
});

function flipToPage(pageNumber) {
    // সমস্ত ক্লাস রিমুভ করে শুরু করা
    document.body.classList.remove("flipped", "flipped-2", "flipped-3");

    // পৃষ্ঠাগুলির মধ্যে পরিবর্তন করা
    if (pageNumber === 0) {
        // কভার পৃষ্ঠায় থাকলে কিছুই করতে হবে না
    } else if (pageNumber === 1) {
        document.body.classList.add("flipped");
    } else if (pageNumber === 2) {
        document.body.classList.add("flipped-2");
    } else if (pageNumber === 3) {
        document.body.classList.add("flipped-3");
    }
}

// Alphabet-এর অডিও প্লেয়িং ইভেন্ট হ্যান্ডলিং (Page 1 এর জন্য)
const alphabetLettersPage1 = document.querySelectorAll("#page1 .letter");

alphabetLettersPage1.forEach((letter) => {
    letter.addEventListener("click", function () {
        const letterName = letter.textContent.trim();  // অক্ষরের নাম নেওয়া

        const audioPath = `${letterName}.mp3`;   // অডিও ফাইলের পথ
        const audio = new Audio(audioPath);            // নতুন অডিও অবজেক্ট তৈরি করা
        
        audio.play().catch((error) => {
            console.error("Alphabet sound play error on Page 1:", error);
        });  // অডিও প্লে করা এবং কোনো সমস্যা হলে কনসোলে দেখানো
    });
});

// Alphabet-এর অডিও প্লেয়িং ইভেন্ট হ্যান্ডলিং (Page 2 এর জন্য)
const alphabetLettersPage2 = document.querySelectorAll("#page2 .letter");

alphabetLettersPage2.forEach((letter) => {
    letter.addEventListener("click", function () {
        const letterName = letter.textContent.trim();  // অক্ষরের নাম নেওয়া

        const audioPath = `${letterName}.mp3`;   // অডিও ফাইলের পথ
        const audio = new Audio(audioPath);            // নতুন অডিও অবজেক্ট তৈরি করা
        
        audio.play().catch((error) => {
            console.error("Alphabet sound play error on Page 2:", error);
        });  // অডিও প্লে করা এবং কোনো সমস্যা হলে কনসোলে দেখানো
    });
});

// Short এবং Long sound এর জন্য অডিও প্লেয়িং ইভেন্ট হ্যান্ডলিং (Page 3 এর জন্য)
const shortVowels = document.querySelectorAll(".vowel.short");
const longVowels = document.querySelectorAll(".vowel.long");

shortVowels.forEach((vowel) => {
    vowel.addEventListener("click", function () {
        const vowelName = vowel.textContent.trim();  // vowel এর নাম নেওয়া

        const shortSoundPath = `${vowelName}-short.mp3`;   // short sound ফাইলের পথ
        const audio = new Audio(shortSoundPath);  // নতুন অডিও অবজেক্ট তৈরি করা
        
        audio.play().catch((error) => {
            console.error("Short sound play error:", error);
        });  // অডিও প্লে করা এবং কোনো সমস্যা হলে কনসোলে দেখানো
    });
});

longVowels.forEach((vowel) => {
    vowel.addEventListener("click", function () {
        const vowelName = vowel.textContent.trim();  // vowel এর নাম নেওয়া

        const longSoundPath = `long/${vowelName}-long.mp3`;   // long sound ফাইলের পথ
        const audio = new Audio(longSoundPath);  // নতুন অডিও অবজেক্ট তৈরি করা
        
        audio.play().catch((error) => {
            console.error("Long sound play error:", error);
        });  // অডিও প্লে করা এবং কোনো সমস্যা হলে কনসোলে দেখানো
    });
});
