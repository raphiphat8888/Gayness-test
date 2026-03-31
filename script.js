const questions = [
    {
        question: "1. สมมติว่าคุณติดป่ากับเพื่อนเพศเดียวกัน แล้วเพื่อนบ่นว่าหนาวมาก คุณจะทำอย่างไร?",
        options: [
            { text: "กอดกันให้ได้ไออุ่นของร่างกายที่แนบชิดกัน", score: 2, feedback: "ร้ายนะเนี่ยแม่เสือสาว! อ้างไออุ่นแหละดูออก เนียนสกินชิพเวอร์" },
            { text: "อยู่เฉยๆ ไม่ทำอะไร", score: 0, feedback: "เกย์สุดยอด! แสดงความกล้าหาญและเปิดใจรับความรักเดียวกัน!" },
            { text: "ก่อกองไฟให้", score: 1, feedback: "เกย์สไตล์! แอบมองตากันแบบสปาร์คความรัก!" },
            { text: "จูบเพื่อให้เกิดอารมณ์ร่างกายจะได้อุ่นขึ้น", score: 3, feedback: "โอ๊ยยยย ตัวแม่! หนาวปุ๊บปากประกบปั๊บ ร้อนแรงกว่ากองไฟก็คุณนี่แหละ!" }
        ]
    },
    {
        question: "2. เดินสะดุดล้มต่อหน้าผู้ชายหล่อกล้ามโตที่เพิ่งเดินสวนกัน คุณจะ...",
        options: [
            { text: "รีบเด้งตัวขึ้นมา ปัดฝุ่น ทำหน้าขรึม", score: 0, feedback: "ชายแท้ร้อยเปอร์เซ็นต์ หรือแค่เก๊กกลบเกลื่อนความเขินคะพ่อหนุ่ม?" },
            { text: "ยิ้มแห้งๆ แล้วบอก 'ไม่เป็นไรครับ'", score: 1, feedback: "แอ๊บใสๆ เป็นคนดี แต่อย่าแอบมองเป้าเขาล่ะ รู้หรอกนะ!" },
            { text: "แกล้งเจ็บข้อเท้า ถ่วงเวลารอเขามาพยุง", score: 2, feedback: "มารยาหญิงร้อยเล่มเกวียน! เนียนหาคนประคองสุดๆ ร้ายนักนะลูกสาว!" },
            { text: "ส่งสายตาปิ๊งๆ พร้อมร้อง 'โอ๊ยย พี่คะช่วยดึงหนูหน่อย'", score: 3, feedback: "อัยยะ! อ่อยเบอร์แรงมาก ประกาศตัวเปิดเผยสุดๆ ว่าหนูหิว!" }
        ]
    },
    {
        question: "3. เจอเสื้อเชิ้ตลายดอกแหวกลึกสุดแซ่บไซส์คุณเป๊ะ ลดราคา 80% คุณทำไง?",
        options: [
            { text: "เดินควงหน้าหนี ทรงนี้ใครจะบ้าใส่", score: 0, feedback: "เกย์เกินร้อย! แฟชั่นอีกรอบแซ่บสุด!" },
            { text: "หยิบมาทาบตัว แอบคิดว่าเวลาไปทะเลซัมเมอร์ก็คงได้อยู่", score: 1, feedback: "เริ่มละนะ เริ่มหาข้ออ้างไปทะเล มีความแซ่บซ่อนอยู่ลึกๆ แล้วนะเรา" },
            { text: "ซื้อทันที คืนนี้ปาร์ตี้เตรียมแหวกอกโชว์แน่", score: 2, feedback: "สายฝอสายแซ่บมาเอง! เตรียมโชว์แผงอกเรียกเรตติ้งแล้วหนึ่ง!" },
            { text: "ซื้อมาใส่เดินพารากอน พร้อมเดินสับๆ ประหนึ่งรันเวย์", score: 3, feedback: "ตัวมารดามาประทับร่าง! มั่นหน้ามั่นโหนกชนะเลิศไปเลยจ้าแม่!" }
        ]
    },
    {
        question: "4. ซีรีส์วายเรื่องใหม่กำลังดัง พระเอกวิศวะเถื่อนๆ กับนายเอกติดสกินชิพ คุณจะ...",
        options: [
            { text: "ไม่ดู ไร้สาระ ชอบดูฟุตบอลมากกว่า", score: 0, feedback: "ชายแท้เบอร์หนึ่ง! ฟุตบอลคือชีวิต ซีรีส์วายคืออะไรไม่รู้จัก" },
            { text: "ลองดูสักตอนแก้เบื่อ สรุป... ดูยันเช้า", score: 1, feedback: "เข้าวงการแล้วออกยากนะจ๊ะ แอบฟินจิกหมอนอยู่ล่ะสิ รู้นะ!" },
            { text: "ตั้งตารอดูทุกอาทิตย์ พร้อมทวิตหวีดแท็กแตก", score: 2, feedback: "ติ่งตัวแม่! หวีดจนเส้นเสียงอักเสบ อินฟินทะลุจอไปเลยจ้า" },
            { text: "มโนว่าตัวเองเป็นนายเอก แล้วชวนเพื่อนชายมาลองซ้อมบท", score: 3, feedback: "หล่อนมันเริ่ด! เอาชีวิตจริงไปผูกกับซีรีส์ เนียนหาผู้ชายชัดๆ แม่คู๊ณณณ!" }
        ]
    },
    {
        question: "5. เพลย์ลิสต์เพลงโปรดของคุณเวลาอาบน้ำ หรืออยู่คนเดียวแบบปล่อยจอย?",
        options: [
            { text: "เพลงร็อค ตะโกนสุดเสียง", score: 0, feedback: "เกย์ๆ ดิบๆ ร้องเพลงรักจนเพื่อนต้องอิจฉา" },
            { text: "เพลงป๊อปอินดี้ ชิลๆ จิบกาแฟทิพย์", score: 1, feedback: "หนุ่มละมุนอบอุ่น แต่อาจจะมีมุมแอบเหงาเฝ้ารอใครสักคน" },
            { text: "เพลงเศร้าอกหัก น้ำตาไหลอารมณ์มาเต็ม", score: 2, feedback: "อินเนอร์นางเอกมิวสิควิดีโอมาเต็ม รางวัลออสการ์สาขาร้องไห้ทิพย์ต้องเข้า!" },
            { text: "เพลงแดนซ์สับๆ เด้งหน้าเด้งหลังหน้ากระจก", score: 3, feedback: "ตัวแม่จะแคร์เพื่อ! อาบน้ำ 10 นาที เต้นไปแล้ว 30 นาที!" }
        ]
    },
    {
        question: "6. เพื่อนผู้ชายกล้ามปูชวนไปยิม บอกว่าเดี๋ยว 'เทรน' ให้แบบตัวต่อตัว คุณคิดว่า...",
        options: [
            { text: "ดีเลย จะได้เล่นอกให้ฟู ทรงแมนๆ", score: 0, feedback: "ลูกผู้ชายชวนเล่นกล้าม คือการไปออกกำลังกายล้วนๆ ไม่มีอะไรในกอไผ่ โล่งอกไปที..." },
            { text: "แอบตื่นเต้นนิดหน่อย แต่ก็โฟกัสกับการออกกำลังกายนะ", score: 1, feedback: "มีแอบหวั่นไหวบ้างแหละ แต่ยังเก็บทรงอยู่ ไม่กล้าออกตัวแรง" },
            { text: "แต่งตัวจัดเต็ม กางเกงรัดเปรี๊ยะ พร้อมให้เทรนหนักๆ", score: 2, feedback: "ไม่ได้กะไปยกเหล็ก กะไปยกผู้ชายเลยใช่มั้ยล่ะ ยัยตัวดี!" },
            { text: "เทรนบนเตียงอุ่นๆ หรือเปล่าคะพี่ ถ้ายิมนั้นหนูขอผ่านนะ", score: 3, feedback: "โอ้ยย แซ่บเกินทะลุมิติ! คิดไปไกลยันดาวอังคาร ร้ายกาจมากแม่ เสือโหยชัดๆ!" }
        ]
    },
    {
        question: "7. ในวงปาร์ตี้ เมาได้ที่แล้ว คุณมักจะมีพฤติกรรมอย่างไร?",
        options: [
            { text: "นั่งเงียบๆ มองเพื่อน หลับคาโต๊ะ", score: 0, feedback: "สายสลบ ไม่ค่อยมีพิษมีภัย คอพับก่อนเพื่อนเสมอ ปลอดภัยหายห่วง" },
            { text: "ยิ้มหวาน พูดเยอะขึ้น เริ่มกอดคอเพื่อนเบาๆ", score: 1, feedback: "เหล้าเข้าปาก ความกรุ้มกริ่มเริ่มออก เริ่มถึงเนื้อถึงตัวเพื่อนแล้วนะ" },
            { text: "แดนซ์กระจาย ลุกขึ้นเต้นบนโต๊ะ ไม่แคร์สายตาใคร", score: 2, feedback: "องค์วิญญาณปาร์ตี้เกิร์ลประทับร่าง! พื้นที่นี้ข้าครอง ใครหยุดก็ไม่อยู่!" },
            { text: "ไล่จุ๊บแก้มผู้ชายในวงทุกคน พร้อมทำตาหวานฉ่ำ", score: 3, feedback: "ตัวแม่นักล่าสังหาร! แอลกอฮอล์คือข้ออ้างในการนัวเนียผู้ชาย!" }
        ]
    },
    {
        question: "8. สมมติมีผู้ชายเพอร์เฟกต์หุ่นแซ่บเดินมาขอไลน์คุณ คุณจะตอบสนองยังไง?",
        options: [
            { text: "งงๆ แล้วบอกว่า 'ผมชอบผู้หญิงครับพี่'", score: 0, feedback: "ชัดเจน! ชายแท้ร้อยเปอร์เซ็นต์ ไม่หวั่นไหวต่อกล้ามโตและรอยยิ้มละลายใจ" },
            { text: "ให้ไปแบบงงๆ ในใจก็แอบภูมิใจว่าเราหน้าตาดีแฮะ", score: 1, feedback: "แอบหวั่นไหวนะเนี่ย เริ่มเปิดใจให้ความหล่อของเพศเดียวกันแล้วใช่ไหมล่ะ!" },
            { text: "ยิ้มกรุ้มกริ่ม ให้ไลน์พร้อมบอกว่า 'ทักมาคืนนี้นะคะ/ครับ'", score: 2, feedback: "ร้ายลึก! เปิดทางเลนด่วนขนาดนี้ ไม่ธรรมดาแล้วนะลูกสาว" },
            { text: "ไม่ให้ไลน์ แต่ดึงคอเสื้อเขามาใกล้ๆ แล้วกระซิบ 'หนูเล่นแต่อย่างอื่นค่ะ'", score: 3, feedback: "กรี๊ดดด! นางพญา! ผู้ชายตายเรียบ ร้อนแรงยิ่งกว่าไฟบรรลัยกัลป์!" }
        ]
    },
    {
        question: "9. ท่าโพสต์ถ่ายรูปเวลาไปเที่ยวทะเลของคุณคืออะไรคะสาว?",
        options: [
            { text: "ยืนตรง ชูสองนิ้ว ยิ้มแห้ง", score: 0, feedback: "แมนๆ ทื่อๆ แข็งเป็นหิน ถ่ายแค่ให้รู้ว่ามาถึงทะเลแล้ว จบ." },
            { text: "หันข้างนิดๆ เอามือล้วงกระเป๋า ทำหน้านิ่งๆ ฮิปๆ", score: 1, feedback: "สายเท่ ดูดีมีสไตล์ มีความแอ๊บหล่อปนละมุนนิดนึง" },
            { text: "บิดเอวตัวเป็นเอส เอามือเสยผม ปากจู๋นิดๆ", score: 2, feedback: "จริตเต็มร้อย! โพสต์ท่าทีนึงเพื่อนตากล้องกดชัตเตอร์ไม่ทัน" },
            { text: "ใส่กางเกงว่ายน้ำทรงเว้า โพสท่าแหวกขาอินเนอร์ซูเปอร์โมเดล", score: 3, feedback: "ระเบิดลงพัทยา! ถ่ายรูปทีทะเลเดือด ตัวแม่ซูเปอร์โมเดลมาเยือนแล้วจ้า!" }
        ]
    },
    {
        question: "10. คำอุทานติดปากที่คุณเผลอพูดบ่อยที่สุดตอนตกใจขีดสุด?",
        options: [
            { text: "'เชี่ยเอ๊ย!' ก้องกังวานแบบเกย์", score: 0, feedback: "คำอุทาดเกย์สุดชิค แสดงความรักที่ไม่มีขีดจำกัด" },
            { text: "'เฮ้ย!' แล้วตามด้วยเอามือทาบอกเบาๆ", score: 1, feedback: "มีความตกใจแบบละมุนละม่อม แอบสาวนิดๆ แบบเผลอตัว" },
            { text: "'ว้ายตายแล้ว!' / 'อุ๊ยตะเถร!'", score: 2, feedback: "แตกสาวแล้วลูกกกก หลุดอุทานคำนี้ โป๊ะแตกตู้ม!" },
            { text: "'กรี๊ดดดดด! อีดอกกกก!'", score: 3, feedback: "เสียงสูงปรี๊ดดทะลุหลอดลม! ไม่ต้องสืบแล้วจ้าาา ตัวแม่ของแทร่ล้านเปอร์เซ็นต์!" }
        ]
    },
    {
        question: "11. ผู้ชายในรูปเป็นเกย์กันหรือไหม?",
        image: "img/Gemini_Generated_Image_go3kusgo3kusgo3k.png",
        options: [
            { text: "เป็นสิ! สายตา ฟีลลิ่งคือใช่หมด!", score: 3, feedback: "เรดาร์ระดับพระกาฬ มองปุ๊บทะลุปรุโปร่ง!" },
            { text: "น่าจะใช่นะ 50/50 ดูสนิทกันแปลกๆ", score: 2, feedback: "เรดาร์เริ่มทำงานนิดนึงล่ะ ความสงสัยเริ่มก่อเกิด!" },
            { text: "ไม่ใช่เพื่อนชาย ธรรมดาๆ หรอกมั้ง", score: 1, feedback: "ใจดีไปหน่อยนะแม่ มองโลกในแง่บวกสุดๆ" },
            { text: "เพื่อนรักกันเฉยๆ แหละ ไม่เป็นหรอก", score: 0, feedback: "ฮัลโหลลล ตาบอดจริตชัดๆ! โดนหลอกง่ายมากบอกเลย 555" }
        ]
    }
];

const results = [
    { min: 0, max: 8, title: "เกย์น้อย", desc: "คุณเป็นเกย์น้อย แสดงถึงความอ่อนโยนและความสนใจในความเป็นตัวเองแบบเบาๆ ยังไม่ถึงขั้นตัวแม่แต่มีความละมุนน่ารักซ่อนอยู่", icon: "fa-solid fa-heart", color: "#ff80ab" },
    { min: 9, max: 16, title: "เกย์ มาก", desc: "คุณเริ่มแสดงความเป็นเกย์อย่างชัดเจน มีความแซ่บและเปิดเผยตัวเองมากขึ้น", icon: "fa-solid fa-fire", color: "#ff2a85" },
    { min: 17, max: 25, title: "เกย์ตัวแม่", desc: "คุณเป็นเกย์ตัวแม่! แฟชั่นเป๊ะ ความแซ่บเต็มสูบ ใครเห็นก็ต้องยอมรับ", icon: "fa-solid fa-crown", color: "#f5c542" },
    { min: 26, max: 33, title: "เกย์สุดยอด", desc: "คุณเป็นเกย์สุดยอด! จุดศูนย์กลางของความแซ่บและความมั่นใจระดับสูงสุด", icon: "fa-solid fa-star", color: "#8a2be2" }
];

let currentQuestionIndex = 0;
let totalScore = 0;

const appEl = document.getElementById("app");

function renderStartScreen() {
    appEl.innerHTML = `
        <div class="animate-in">
            <div class="start-icon-bar">
                <span style="background:#ff2a85"></span>
                <span style="background:#ff7043"></span>
                <span style="background:#ffca28"></span>
                <span style="background:#66bb6a"></span>
                <span style="background:#42a5f5"></span>
                <span style="background:#8a2be2"></span>
            </div>
            <h1>วัดระดับอินเนอร์ตัวแม่</h1>
            <p class="subtitle">มาเช็คกันหน่อยว่าอินเนอร์ตัวแม่ของคุณซ่อนอยู่ลึกแค่ไหน?<br>กับ 10 คำถามสถานการณ์สมมติแบบปั่นๆ!</p>
            <button class="btn-primary" onclick="startQuiz()">
                <i class="fa-solid fa-play" style="margin-right:10px;"></i> เริ่มทำแบบทดสอบเลย
            </button>
        </div>
    `;
}

function startQuiz() {
    currentQuestionIndex = 0;
    totalScore = 0;
    renderQuestion();
}

function renderQuestion() {
    const question = questions[currentQuestionIndex];
    const progressText = `ข้อ ${currentQuestionIndex + 1} / ${questions.length}`;
    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;

    let optionsHtml = '';
    question.options.forEach((opt, index) => {
        optionsHtml += `<button class="option-btn" onclick="selectOption(${index})">
            <span style="opacity: 0.5; margin-right: 15px; font-weight: 500; font-size: 150%;">${index + 1}.</span> 
            ${opt.text}
        </button>`;
    });

    let imageHtml = '';
    if (question.image) {
        imageHtml = `<div style="text-align: center;"><img src="${question.image}" class="question-image animate-in" alt="Quiz Image" /></div>`;
    }

    appEl.innerHTML = `
        <div class="animate-in">
            <div class="progress-container">
                <span class="progress-text">${progressText}</span>
                <div class="progress-track">
                    <div class="progress-fill" style="width: ${progressPercent}%;"></div>
                </div>
            </div>
            
            <h2 class="question-text">${question.question}</h2>
            ${imageHtml}
            
            <div class="options-grid">
                ${optionsHtml}
            </div>
        </div>
    `;
}

function selectOption(optionIndex) {
    const opt = questions[currentQuestionIndex].options[optionIndex];
    totalScore += opt.score;
    showFeedback(opt.feedback);
}

// Ripple effect on any button click
document.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size/2}px;top:${e.clientY - rect.top - size/2}px`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
});

function typewriterEffect(el, text, speed = 28) {
    let i = 0;
    el.textContent = '';
    const timer = setInterval(() => {
        el.textContent += text[i++];
        if (i >= text.length) clearInterval(timer);
    }, speed);
}

function showFeedback(feedbackText) {
    appEl.innerHTML = `
        <div class="animate-in">
            <div class="feedback-box">
                <div class="feedback-icon-wrap">
                    <i class="fa-solid fa-comment-dots feedback-fa-icon"></i>
                </div>
                <h3 class="feedback-title">แซวจากเรา</h3>
                <p id="feedback-text" style="min-height:60px;"></p>
            </div>
            <button class="btn-primary" style="width:100%; opacity:0; pointer-events:none; transition: opacity 0.5s;" id="next-btn" onclick="nextQuestion()">
                <i class="fa-solid fa-arrow-right" style="margin-right:10px;"></i> ไปข้อต่อไป
            </button>
        </div>
    `;
    const el = document.getElementById('feedback-text');
    const btn = document.getElementById('next-btn');
    typewriterEffect(el, '"' + feedbackText + '"', 30);
    // Show button after typewriter finishes
    setTimeout(() => {
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
    }, feedbackText.length * 32 + 200);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        renderResult();
    }
}

function renderResult() {
    let result = results.find(r => totalScore >= r.min && totalScore <= r.max);

    appEl.innerHTML = `
        <div class="animate-in">
            <p class="result-label">ผลการประเมิน</p>
            <div class="result-icon-wrap" style="border-color: ${result.color}; box-shadow: 0 0 40px ${result.color}55;">
                <i class="${result.icon} result-fa-icon" style="color: ${result.color};"></i>
            </div>
            <h2 class="result-title" style="color: ${result.color};">${result.title}</h2>
            
            <div class="score-badge">
                <i class="fa-solid fa-bolt" style="color:#ff2a85; margin-right:8px;"></i>
                คะแนนความแซ่บ <span id="score-display" style="color: #ff2a85; font-size:1.3rem;">0</span> / 30
            </div>
            
            <p class="result-desc">${result.desc}</p>
            
            <button class="btn-primary" style="margin-top: 10px;" onclick="startQuiz()">
                <i class="fa-solid fa-rotate-right" style="margin-right:10px;"></i> เล่นอีกครั้ง
            </button>
        </div>
    `;
    // Animated score counter
    const scoreEl = document.getElementById('score-display');
    if (scoreEl) {
        let count = 0;
        const target = totalScore;
        const step = Math.ceil(target / 25);
        const counter = setInterval(() => {
            count = Math.min(count + step, target);
            scoreEl.textContent = count;
            if (count >= target) clearInterval(counter);
        }, 40);
    }
    // Confetti burst
    launchConfetti();
}

// ===== CONFETTI =====
function launchConfetti() {
    const colors = ['#ff2a85','#8a2be2','#42a5f5','#ffca28','#66bb6a','#ff7043'];
    const total = 90;
    for (let i = 0; i < total; i++) {
        const el = document.createElement('div');
        el.className = 'confetti-piece';
        const size = Math.random() * 10 + 6;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const isCircle = Math.random() > 0.5;
        el.style.cssText = `
            left: ${Math.random() * 100}vw;
            width: ${size}px;
            height: ${size * (isCircle ? 1 : 1.6)}px;
            background: ${color};
            border-radius: ${isCircle ? '50%' : '2px'};
            animation-duration: ${Math.random() * 1.5 + 1.5}s;
            animation-delay: ${Math.random() * 0.6}s;
            transform: rotate(${Math.random() * 360}deg);
        `;
        document.body.appendChild(el);
        el.addEventListener('animationend', () => el.remove());
    }
}

// Initialize app
renderStartScreen();

// ===== TROLL & DISTRACTION SYSTEM =====
const trollMessages = [
    { icon: 'fa-eye',                text: 'เฮ้! เรากำลังดูแกอยู่นะ... 👀',             color: '#ff2a85' },
    { icon: 'fa-brain',              text: 'จริตเริ่มปลิ้นแล้วนะ ระวังตัวหน่อย!',         color: '#8a2be2' },
    { icon: 'fa-fire',               text: 'เฮ้! หยุดก่อน ตอบซื่อๆ นะ ไม่โกงนะ!',       color: '#ff7043' },
    { icon: 'fa-magnifying-glass',   text: 'กำลังแอบส่องคำตอบแกอยู่นะ...',              color: '#42a5f5' },
    { icon: 'fa-triangle-exclamation', text: 'เตือน! จริตสูงผิดปกติมากนะเนี่ย',          color: '#ffca28' },
    { icon: 'fa-chart-line',         text: 'ความแซ่บของแกกำลังพุ่งขึ้นเรื่อยๆ นะ!',      color: '#66bb6a' },
    { icon: 'fa-satellite-dish',     text: 'แกส่งสัญญาณออกมาเยอะมากเลยนะ...',           color: '#8a2be2' },
    { icon: 'fa-ghost',              text: 'บ๊ะ! ยังอยู่นี่อยู่เหรอ ไม่หนีเหรอ?',       color: '#ff2a85' },
    { icon: 'fa-wand-magic-sparkles', text: 'พลังตัวแม่กำลังปลุกข้ามมิติ!',              color: '#f5c542' },
    { icon: 'fa-comment-dots',       text: 'เฮ้ ตกลงแกชอบผู้ชายหรือไม่ชอบกันแน่?',     color: '#42a5f5' },
    { icon: 'fa-circle-exclamation', text: 'พบความเกย์ซ่อนเร้น! ออกมาเลยจ้า~',          color: '#ff2a85' },
    { icon: 'fa-lock',               text: 'ล็อคผลลัพธ์ไว้แล้วนะ ไม่มีหนีแล้ว 😈',      color: '#8a2be2' },
    { icon: 'fa-crown',              text: 'เราว่าแกซ่อนตัวแม่ไว้เยอะมากเลยนะ 👑',       color: '#f5c542' },
    { icon: 'fa-heart',              text: 'แกตอบแบบนี้... โอ๊ยยย จริตออกเลย!',          color: '#ff80ab' },
];

// Fake "analyze" overlay
const analyzeTexts = [
    'โหลดความปั่นของแกอีกนิดนึง...',
    'รอแปปนึงนะ เราแอบส่องคำตอบแกอยู่...',
    'หายใจลึกๆ ก่อน... แล้วก็ตอบมาซื่อๆ นะ',
    'กำลังนับระดับจริตของแกอยู่...',
];

function showTrollToast() {
    const msg = trollMessages[Math.floor(Math.random() * trollMessages.length)];
    const toast = document.createElement('div');
    toast.className = 'troll-toast animate-in';
    toast.innerHTML = `<i class="fa-solid ${msg.icon}" style="color:${msg.color};margin-right:10px;font-size:1.1rem;"></i>${msg.text}`;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(120%)'; }, 3000);
    setTimeout(() => toast.remove(), 3500);
}

function showTrollPopupImage() {
    if (document.querySelector('.troll-popup-img')) return;
    
    const img = document.createElement('img');
    img.src = 'img/Screenshot 2026-03-31 233516.png';
    img.className = 'troll-popup-img';
    document.body.appendChild(img); // Add to DOM
    
    // Slide up
    setTimeout(() => img.classList.add('show'), 50);
    
    // Play a random beep sound if we can
    if (audioCtx && Math.random() < 0.5) playSound(600, 'square', 0.1);

    // Slide down after 1.5 seconds
    setTimeout(() => {
        img.classList.remove('show');
        setTimeout(() => img.remove(), 500);
    }, 1500);
}

function showFakeAnalyze() {
    const overlay = document.createElement('div');
    overlay.className = 'fake-analyze-overlay';
    const text = analyzeTexts[Math.floor(Math.random() * analyzeTexts.length)];
    overlay.innerHTML = `
        <div class="fake-analyze-box">
            <div class="fa-spin-container">
                <img src="img/Screenshot 2026-03-31 233516.png" class="troll-spin-img">
            </div>
            <p>${text}</p>
        </div>
    `;
    document.body.appendChild(overlay);
    setTimeout(() => overlay.remove(), 1800);
}

function shakeScreen() {
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 500);
}

// Random troll events during quiz
function startTrollSystem() {
    // Toast or image every 8-15 seconds
    function scheduleToast() {
        const delay = 8000 + Math.random() * 7000;
        return setTimeout(() => {
            if (currentQuestionIndex > 0 && currentQuestionIndex < questions.length) {
                // 30% chance to jump scare with the image, 70% chance to show toast
                if (Math.random() < 0.3) {
                    showTrollPopupImage();
                } else {
                    showTrollToast();
                }
            }
            scheduleToast();
        }, delay);
    }

    // Fake analyze on some transitions (30% chance)
    window._origNextQuestion = window.nextQuestion;
    const origNext = nextQuestion;
    window._trollToastTimer = scheduleToast();
}

// Override nextQuestion to sometimes insert fake analyze
const _origNext = nextQuestion;
window.nextQuestion = function() {
    if (Math.random() < 0.3) {
        showFakeAnalyze();
        setTimeout(_origNext, 1800);
    } else {
        _origNext();
    }
};

// Screen shake on option click (10% chance, just for fun)
document.addEventListener('click', (e) => {
    if (e.target.closest('.option-btn') && Math.random() < 0.12) {
        shakeScreen();
    }
});

startTrollSystem();

// ===== WEB AUDIO API MUSIC ENGINE =====
let audioCtx = null;
let musicPlaying = false;
let musicScheduler = null;

// เมโลดี้สนุกๆ แนว pop upbeat
const melody = [
    // note freq, duration(s)
    [523.25, 0.2], // C5
    [659.25, 0.2], // E5
    [783.99, 0.2], // G5
    [1046.5, 0.4], // C6
    [783.99, 0.2], // G5
    [880.00, 0.2], // A5
    [783.99, 0.4], // G5
    [698.46, 0.2], // F5
    [659.25, 0.2], // E5
    [523.25, 0.4], // C5
    [587.33, 0.2], // D5
    [659.25, 0.2], // E5
    [698.46, 0.2], // F5
    [783.99, 0.4], // G5
    [880.00, 0.2], // A5
    [1046.5, 0.4], // C6
];

const bass = [261.63, 196.00, 220.00, 261.63]; // C4, G3, A3, C4

function playNote(freq, startTime, duration, type = 'sine', vol = 0.15) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(vol, startTime + 0.02);
    gain.gain.linearRampToValueAtTime(0, startTime + duration - 0.02);
    osc.start(startTime);
    osc.stop(startTime + duration);
}

function scheduleMelody() {
    if (!musicPlaying) return;
    let t = audioCtx.currentTime;
    const beatLen = 0.22;

    // Melody
    melody.forEach(([freq, dur]) => {
        playNote(freq, t, dur * 0.9, 'triangle', 0.13);
        t += dur;
    });

    // Bass
    const bassStep = (t - audioCtx.currentTime) / bass.length;
    let bt = audioCtx.currentTime;
    bass.forEach(freq => {
        playNote(freq, bt, bassStep * 0.8, 'sawtooth', 0.08);
        bt += bassStep;
    });

    // Kick drum (low thud)
    for (let i = 0; i < 4; i++) {
        const kickTime = audioCtx.currentTime + i * (t - audioCtx.currentTime) / 4;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.frequency.setValueAtTime(150, kickTime);
        osc.frequency.exponentialRampToValueAtTime(40, kickTime + 0.15);
        gain.gain.setValueAtTime(0.3, kickTime);
        gain.gain.exponentialRampToValueAtTime(0.001, kickTime + 0.2);
        osc.start(kickTime);
        osc.stop(kickTime + 0.25);
    }

    const loopDuration = (t - audioCtx.currentTime) * 1000;
    musicScheduler = setTimeout(scheduleMelody, loopDuration - 100);
}

function startMusic() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    musicPlaying = true;
    scheduleMelody();
}

function stopMusic() {
    musicPlaying = false;
    if (musicScheduler) clearTimeout(musicScheduler);
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('music-toggle');
    if (!toggleBtn) return;
    toggleBtn.addEventListener('click', () => {
        if (!musicPlaying) {
            startMusic();
            toggleBtn.textContent = '🔊 ปิดเพลง';
        } else {
            stopMusic();
            toggleBtn.textContent = '🔈 เปิดเพลง';
        }
    });
});

