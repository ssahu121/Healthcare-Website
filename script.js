// Chat open/close toggle
function toggleChat() {
    const chatWin = document.getElementById('chat-window');
    chatWin.classList.toggle('hidden');
}

// Enter key se send karne ke liye
function handleEnter(event) {
    if (event.key === "Enter") {
        sendMsg();
    }
}

function sendMsg() {
    const input = document.getElementById('userQuery');
    const chatBody = document.getElementById('chat-body');
    const query = input.value.trim();

    if (!query) return;

    // User Message add karein
    chatBody.innerHTML += `<div class="user-msg">${query}</div>`;
    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    // Simple AI/Automation Reply
    setTimeout(() => {
        let response = "Main abhi seekh raha hoon. Kya aap 'Doctor' ya 'Registration' ke baare mein jaanna chahte hain?";
        
        const q = query.toLowerCase();
        if(q.includes("doctor")) response = "Humare paas 10+ specialist doctors hain.";
        if(q.includes("registration") || q.includes("form")) response = "Aap left side wala form bhar kar register kar sakte hain.";
        if(q.includes("hi") || q.includes("hello")) response = "Hello! Seva-Health mein aapka swagat hai.";

        chatBody.innerHTML += `<div class="bot-msg">🤖: ${response}</div>`;
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 800);
}
function sendMsg() {
    const input = document.getElementById('userQuery');
    const chatBody = document.getElementById('chat-body');
    const query = input.value.trim().toLowerCase();

    if (!query) return;

    // 1. User ka message screen par dikhayein
    chatBody.innerHTML += `<div class="user-msg">${input.value}</div>`;
    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    // 2. AI/Automation Reply Logic
    setTimeout(() => {
        let response = "Maafi chahta hoon, mujhe iske baare mein zyada jaankari nahi hai. Kya aap 'Doctor' ya 'Help' ke baare mein puchna chahte hain?";

        // --- Volunteer & Registration Keywords ---
        if (query.includes("volunteer") || query.includes("join")) {
            response = "NGO join karne ke liye aap 'Volunteer Registration' section mein apna naam aur contact details bhar dein. Humari team aapse 24 ghante mein sampark karegi!";
        } 
        else if (query.includes("register") || query.includes("form") || query.includes("appointment")) {
            response = "Aap screen ke left side wale form ka use karke register kar sakte hain. Bas apna naam, age aur problem likh kar 'Submit' dabayein.";
        }

        // --- Health Related Automated Answers (Triage Concept) ---
        else if (query.includes("fever") || query.includes("bukhar")) {
            response = "🤒 Fever ke liye: Khoob paani piyein aur araam karein. Agar temperature 102°F se zyada hai, toh turant doctor se milein. Humara volunteer aapko call kar sakta hai.";
        }
        else if (query.includes("pain") || query.includes("dard")) {
            response = "🤕 Pain ke liye: Dard wali jagah ko move na karein. Agar dard 'Severe' (bohot zyada) hai, toh turant emergency form bhariye.";
        }
        else if (query.includes("breathing") || query.includes("saans")) {
            response = "🚨 EMERGENCY: Agar saans lene mein dikkat ho rahi hai, toh bina deri kiye nazdeeki hospital jayein aur 'High Priority' form submit karein.";
        }
        else if (query.includes("injury") || query.includes("chot")) {
            response = "🩹 Injury ke liye: Chot wali jagah ko saaf paani se dhoyein aur antiseptic lagayein. Jyada khoon behne par turant medical help lein.";
        }
        
        // --- Greeting ---
        else if (query.includes("hi") || query.includes("hello") || query.includes("namaste")) {
            response = "Namaste! Main Seva-Health Assistant hoon. Main Registration, Volunteering aur Health Tips mein aapki madad kar sakta hoon.";
        }

        // 3. Bot ka message screen par dikhayein
        chatBody.innerHTML += `<div class="bot-msg">🤖: ${response}</div>`;
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 800);
}
function toggleFAQ(element) {
    const item = element.parentElement;
    item.classList.toggle('active');
    
    // Baki sabko band karne ke liye (Optional)
    const allItems = document.querySelectorAll('.faq-item');
    allItems.forEach(i => {
        if (i !== item) i.classList.remove('active');
    });
}

function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}

