// State Management
let playerState = {
    level: 1,
    xp: 0,
    title: "ROOKIE",
    completedMissions: []
};

// Boot Sequence
function initGame() {
    loadState();
    
    const btnStart = document.getElementById('btn-start');
    const bootScreen = document.getElementById('boot-screen');
    const gameUI = document.getElementById('game-ui');
    
    // Simulate loading decryption
    setTimeout(() => {
        document.querySelector('.type-anim').innerText = "CONNECTION ESTABLISHED. PROCEED, DETECTIVE.";
        btnStart.classList.remove('hidden');
        gsap.fromTo(btnStart, {opacity: 0, scale: 0.9}, {opacity: 1, scale: 1, duration: 1, ease: "power3.out"});
    }, 2000);
    
    btnStart.addEventListener('click', () => {
        gsap.to(bootScreen, {
            opacity: 0, 
            duration: 1.5, 
            ease: "power2.inOut",
            onComplete: () => {
                bootScreen.style.display = 'none';
                gameUI.classList.remove('hidden');
                renderMap();
                
                // Fade in UI
                gsap.fromTo("header", {y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: "power3.out"});
                gsap.fromTo("#map-view", {opacity: 0}, {opacity: 1, duration: 1, delay: 0.5});
            }
        });
    });
}

// Execute immediately since script is deferred/at end of body
initGame();

// Sync GSAP ScrollTrigger with Lenis
gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
});
gsap.ticker.lagSmoothing(0);

// Global Parallax effect for Background
lenis.on('scroll', (e) => {
    const bg = document.getElementById('game-bg');
    if (bg) {
        gsap.to(bg, {
            y: e.scroll * 0.2,
            duration: 0,
            ease: "none"
        });
    }
});

// Title progression
const TITLES = [
    { threshold: 0, name: "ROOKIE" },
    { threshold: 200, name: "JUNIOR INVESTIGATOR" },
    { threshold: 500, name: "LEAD DETECTIVE" },
    { threshold: 1000, name: "ARCHIVIST" },
    { threshold: 2000, name: "CHIEF ARCHITECT" }
];

function gainXP(amount) {
    playerState.xp += amount;
    
    let requiredXP = playerState.level * 100;
    if (playerState.xp >= requiredXP) {
        playerState.level++;
        playerState.xp -= requiredXP;
        
        let newTitle = TITLES.reverse().find(t => (playerState.level * 100) >= t.threshold)?.name || "NEXUS LEGEND";
        TITLES.reverse(); // put back
        playerState.title = newTitle;
        
        // Level Up Animation
        let lvlUp = document.createElement('div');
        lvlUp.className = "fixed inset-0 z-50 flex items-center justify-center pointer-events-none";
        lvlUp.innerHTML = `<h1 class="text-6xl md:text-8xl font-outfit font-black text-noir-amber drop-shadow-[0_0_20px_rgba(255,153,0,0.8)] tracking-widest uppercase text-center">PROMOTION SECURED<br><span class="text-3xl text-white">LEVEL ${playerState.level}</span></h1>`;
        document.body.appendChild(lvlUp);
        
        gsap.fromTo(lvlUp, {scale: 0.5, opacity: 0}, {scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)"});
        gsap.to(lvlUp, {opacity: 0, y: -50, duration: 1, delay: 2, onComplete: () => lvlUp.remove()});
    }
    
    updateHUD();
    saveGame();
    renderMap();
}

function updateHUD() {
    document.getElementById('hud-rank').innerText = playerState.title;
    document.getElementById('hud-xp').innerText = playerState.xp;
    let requiredXP = playerState.level * 100;
    document.getElementById('hud-next-xp').innerText = requiredXP;
    
    let pct = (playerState.xp / requiredXP) * 100;
    document.getElementById('hud-xp-bar').style.width = pct + '%';
}

function loadState() {
    try {
        const saved = localStorage.getItem('noirSave');
        if (saved) {
            playerState = JSON.parse(saved);
            updateHUD();
            renderMap();
        }
    } catch (e) {
        console.warn("Could not access localStorage:", e);
    }
}

// Save & Load Functions
function saveGame() {
    try {
        localStorage.setItem('noirSave', JSON.stringify(playerState));
    } catch (e) {
        console.warn("Could not save to localStorage:", e);
    }
    // Brief save flash
    const bar = document.getElementById('hud-xp-bar');
    if (bar) {
        bar.style.backgroundColor = '#fff';
        setTimeout(() => { bar.style.backgroundColor = ''; }, 200);
    }
}

function loadGame() {
    try {
        const saved = localStorage.getItem('noirSave');
        if (saved) {
            playerState = JSON.parse(saved);
            updateHUD();
            renderMap();
        }
    } catch (e) {
        console.warn("Could not load from localStorage:", e);
    }
}

function toggleAbout() {
    const mapView = document.getElementById('map-view');
    const missionView = document.getElementById('mission-view');
    const aboutView = document.getElementById('about-view');
    const faqView = document.getElementById('faq-view');
    
    if (aboutView.classList.contains('hidden')) {
        mapView.classList.add('hidden');
        missionView.classList.add('hidden');
        if(faqView) faqView.classList.add('hidden');
        
        aboutView.classList.remove('hidden');
        gsap.fromTo(aboutView, {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.5});
    } else {
        aboutView.classList.add('hidden');
        mapView.classList.remove('hidden');
        renderMap();
    }
}

function toggleFAQ() {
    const mapView = document.getElementById('map-view');
    const missionView = document.getElementById('mission-view');
    const aboutView = document.getElementById('about-view');
    const faqView = document.getElementById('faq-view');
    
    if (faqView.classList.contains('hidden')) {
        mapView.classList.add('hidden');
        missionView.classList.add('hidden');
        aboutView.classList.add('hidden');
        
        faqView.classList.remove('hidden');
        gsap.fromTo(faqView, {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.5});
    } else {
        faqView.classList.add('hidden');
        mapView.classList.remove('hidden');
        renderMap();
    }
}

window.returnToMap = () => {
    const mapView = document.getElementById('map-view');
    const missionView = document.getElementById('mission-view');
    const aboutView = document.getElementById('about-view');
    const faqView = document.getElementById('faq-view');
    
    if(missionView) missionView.classList.add('hidden');
    if(aboutView) aboutView.classList.add('hidden');
    if(faqView) faqView.classList.add('hidden');
    
    mapView.classList.remove('hidden');
    renderMap();
};

// Render Map View
function renderMap() {
    const missionGrid = document.getElementById('mission-grid');
    const databankGrid = document.getElementById('databank-grid');
    missionGrid.innerHTML = '';
    databankGrid.innerHTML = '';
    
    const totalNodes = GAME_CONTENT.length;
    
    GAME_CONTENT.forEach((topic, index) => {
        const isAlwaysUnlocked = index >= totalNodes - 4;
        const isCompleted = playerState.completedMissions.includes(topic.id);
        const isLocked = !isAlwaysUnlocked && index > 0 && !playerState.completedMissions.includes(GAME_CONTENT[index-1].id);
        
        let statusText = isCompleted ? '<span class="text-noir-cyan tracking-widest font-space text-xs">✓ CLEARED</span>' : 
                         isLocked ? '<span class="text-noir-red tracking-widest font-space text-xs">🔒 RESTRICTED</span>' : 
                         isAlwaysUnlocked ? '<span class="text-white/50 tracking-widest font-space text-xs">► ARCHIVE</span>' :
                         '<span class="text-noir-amber tracking-widest font-space text-xs drop-shadow-[0_0_5px_rgba(255,153,0,0.8)] animate-pulse">► INVESTIGATE</span>';

        // Determine Act Image
        let actImg = "assets/act_1_alley_1780891205745.png";
        let actName = "ACT I: THE STREETS";
        if (index >= 9 && index < 18) {
            actImg = "assets/act_2_server_1780891217895.png";
            actName = "ACT II: THE MAINFRAME";
        } else if (index >= 18) {
            actImg = "assets/act_3_core_1780891229221.png";
            actName = "ACT III: THE CORE";
        }
        if (isAlwaysUnlocked) {
            actImg = "assets/detective_desk_1780891192181.png";
            actName = "CITY ARCHIVES";
        }

        const card = document.createElement('div');
        card.className = `glass-card cursor-pointer group ${isLocked ? 'locked' : ''}`;
        
        // 3D Tilt effect
        card.addEventListener('mousemove', (e) => {
            if(isLocked) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                transformPerspective: 1000,
                ease: "power1.out",
                duration: 0.5
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {rotateX: 0, rotateY: 0, duration: 0.5});
        });

        card.innerHTML = `
            <div class="h-32 w-full relative overflow-hidden">
                <div class="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-60 mix-blend-screen" style="background-image: url('${actImg}');"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-noir-panel to-transparent"></div>
                <div class="absolute top-3 left-3 bg-black/50 backdrop-blur-md px-2 py-1 text-[9px] font-space tracking-widest text-white/70 border border-white/10 uppercase">${actName}</div>
            </div>
            
            <div class="p-6 flex flex-col h-[calc(100%-8rem)] justify-between">
                <div>
                    <div class="text-[10px] text-white/30 mb-2 font-space tracking-widest uppercase">${isAlwaysUnlocked ? 'REFERENCE' : 'FILE_'+String(index+1).padStart(3, '0')}</div>
                    <h3 class="font-outfit font-bold text-xl mb-4 text-white/90 group-hover:text-white transition-colors leading-tight drop-shadow-md">${topic.title}</h3>
                </div>
                <div class="mt-auto border-t border-white/10 pt-4 flex items-center justify-between">
                    ${statusText}
                </div>
            </div>
        `;
        
        card.onclick = () => {
            if (!isLocked) openMission(topic, index);
        };
        
        if (isAlwaysUnlocked) {
            databankGrid.appendChild(card);
        } else {
            missionGrid.appendChild(card);
        }
    });

    // Staggered map animation
    gsap.fromTo(".glass-card", 
        {y: 30, opacity: 0}, 
        {y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: "power2.out"}
    );
}

// Open Mission View
function openMission(topic, index) {
    document.getElementById('map-view').classList.add('hidden');
    
    const missionView = document.getElementById('mission-view');
    missionView.classList.remove('hidden');
    gsap.fromTo(missionView, {opacity: 0, x: 20}, {opacity: 1, x: 0, duration: 0.5});
    
    window.scrollTo(0, 0);
    
    document.getElementById('mission-title').innerText = topic.title;
    
    document.getElementById('btn-back-map').onclick = () => {
        gsap.to(missionView, {
            opacity: 0, x: -20, duration: 0.3, onComplete: () => {
                missionView.classList.add('hidden');
                document.getElementById('map-view').classList.remove('hidden');
                renderMap();
            }
        });
    };

    const contentArea = document.getElementById('mission-content');
    contentArea.innerHTML = '';

    topic.blocks.forEach((block, idx) => {
        let el = document.createElement('div');
        el.className = "scroll-reveal relative"; 
        
        if (block.type === 'heading') {
            el.innerHTML = `
                <div class="flex items-center gap-4 mt-12 mb-6">
                    <div class="w-8 h-px bg-noir-cyan"></div>
                    <h3 class="font-outfit font-light text-2xl md:text-3xl text-white uppercase tracking-widest">${block.content}</h3>
                    <div class="flex-grow h-px bg-white/10"></div>
                </div>
            `;
        } 
        else if (block.type === 'dialogue') {
            el.innerHTML = `
                <div class="mb-8 flex gap-6 items-start max-w-3xl">
                    <div class="w-14 h-14 rounded-lg border border-noir-cyan/30 overflow-hidden shrink-0 bg-black shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                        <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Oracle&backgroundColor=090a0f" class="w-full h-full object-cover">
                    </div>
                    <div class="dialogue-box w-full">
                        <div class="text-[10px] text-noir-cyan font-space tracking-widest mb-2 uppercase">O.R.A.C.L.E. ASSISTANT</div>
                        <p class="text-white/80 font-light text-lg leading-relaxed">${block.content}</p>
                    </div>
                </div>
            `;
        }
        else if (block.type === 'intel') {
             el.innerHTML = `
                <div class="bg-noir-amber/10 border-l-2 border-noir-amber p-5 mb-8 rounded-r-lg">
                    <p class="text-noir-amber/90 font-space text-sm"><i>LOGIC INSIGHT:</i> ${block.content}</p>
                </div>
            `;
        }
        else if (block.type === 'code') {
            el.innerHTML = `
                <div class="code-block mb-8 relative">
                    <div class="absolute top-0 right-0 bg-white/5 px-3 py-1 font-space text-[10px] text-white/30 border-b border-l border-white/10 rounded-bl-lg uppercase">Extracted Syntax</div>
                    <pre><code class="text-noir-cyan">${block.content}</code></pre>
                </div>
            `;
        }
        else if (block.type === 'challenge') {
            let challengeId = `${topic.id}_chal_${idx}`;
            let isDone = playerState.completedMissions.includes(challengeId);
            
            el.innerHTML = `
                <div class="glass-card p-6 md:p-8 mb-12" data-chal="${challengeId}">
                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-noir-red to-transparent"></div>
                    <div class="relative z-10">
                        <h4 class="font-outfit font-black text-2xl text-noir-red mb-4 uppercase tracking-widest flex items-center gap-3">
                            <span class="animate-pulse">⚠</span> ACTION REQUIRED
                        </h4>
                        <p class="text-white/80 font-light text-lg mb-8 border-l-2 border-noir-red/50 pl-4">${block.content}</p>
                        
                        ${isDone ? 
                            `<div class="text-noir-cyan font-space text-lg tracking-widest mt-4 flex items-center gap-2 uppercase"><span>✓</span> LOG DECRYPTED (+50 XP)</div>` : 
                            `
                            <textarea class="terminal-input hidden mb-6" placeholder="> Input decryption query here..."></textarea>
                            <div class="flex flex-col md:flex-row gap-4 items-start md:items-center">
                                <button class="bg-white/5 border border-noir-cyan text-noir-cyan hover:bg-noir-cyan hover:text-black transition-colors px-8 py-3 uppercase tracking-[0.2em] font-space text-sm shadow-[0_0_15px_rgba(0,240,255,0.1)] w-full md:w-auto" onclick="startHack(this, '${topic.id}', '${challengeId}')">EXECUTE QUERY (+50 XP)</button>
                                <button class="text-white/30 text-[10px] font-space uppercase hover:text-noir-amber transition-colors border-b border-transparent hover:border-noir-amber" onclick="showHint(this, \`${block.content.replace(/'/g, "\\'")}\`)">Request Intel</button>
                            </div>
                            <div class="hint-box hidden mt-6 text-noir-amber font-space text-sm border-l border-noir-amber pl-4 bg-noir-amber/5 py-3 pr-3"></div>
                            `
                        }
                    </div>
                </div>
            `;
        }
        
        contentArea.appendChild(el);
    });

    if (!playerState.completedMissions.includes(topic.id)) {
        let completeBtn = document.createElement('button');
        completeBtn.className = "mt-12 bg-white/5 border border-white/20 text-white/70 hover:bg-white hover:text-black hover:border-white transition-all font-outfit font-bold py-5 px-8 w-full text-2xl tracking-widest uppercase scroll-reveal shadow-xl";
        completeBtn.innerText = "MARK FILE CLOSED";
        completeBtn.onclick = () => {
            playerState.completedMissions.push(topic.id);
            gainXP(100);
            document.getElementById('btn-back-map').click();
        };
        contentArea.appendChild(completeBtn);
    }

    setTimeout(() => {
        ScrollTrigger.refresh();
        gsap.utils.toArray('.scroll-reveal').forEach(elem => {
            gsap.fromTo(elem, 
                { opacity: 0, y: 30 },
                {
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out"
                }
            );
        });
    }, 100);
}

window.startHack = (btn, topicId, challengeId) => {
    let container = btn.parentElement.parentElement;
    let textarea = container.querySelector('.terminal-input');
    
    if (textarea.classList.contains('hidden')) {
        textarea.classList.remove('hidden');
        btn.innerText = "ANALYZE DATA";
        textarea.focus();
    } else {
        let code = textarea.value.trim();
        if (code.length > 5 && /[a-zA-Z0-9_]/.test(code)) {
            playerState.completedMissions.push(challengeId);
            gainXP(50);
            
            textarea.disabled = true;
            btn.style.display = 'none';
            let successMsg = document.createElement('div');
            successMsg.className = "text-noir-cyan font-space text-lg tracking-widest mt-4 uppercase";
            successMsg.innerText = "✓ LOG DECRYPTED (+50 XP)";
            container.appendChild(successMsg);
        } else {
            textarea.classList.add('error');
            setTimeout(() => textarea.classList.remove('error'), 400);
            btn.innerText = "ERR: SYNTAX REJECTED";
            setTimeout(() => btn.innerText = "EXECUTE QUERY (+50 XP)", 2000);
        }
    }
}

window.showHint = (btn, challengeText) => {
    let container = btn.parentElement.parentElement;
    let hintBox = container.querySelector('.hint-box');
    
    let lower = challengeText.toLowerCase();
    let hint = "Review the Syntax Logs above. The exact query format is documented.";
    
    if(lower.includes('print')) hint = "Use the print() function. Wrap strings in quotes: print('evidence')";
    else if(lower.includes('complex number') || lower.includes('imaginary')) hint = "Use 'j' for imaginary components (e.g., 3j). Access with variable.imag";
    else if(lower.includes('list')) hint = "Lists use []. Use .append() to store clues, .remove() to delete false leads.";
    else if(lower.includes('dictionary') || lower.includes('key')) hint = "Dictionaries use {}. Map suspect keys to data values: {'suspect': 'John'}.";
    else if(lower.includes('tuple')) hint = "Tuples use (). They are immutable—like an archived police record.";
    else if(lower.includes('slice') || lower.includes('index')) hint = "Use brackets for slicing: log[start:stop:step]. It is 0-indexed.";
    else if(lower.includes('function') || lower.includes('def ')) hint = "Define a procedure: 'def analyze(data):'. Remember the colon.";
    else if(lower.includes('loop') || lower.includes('for ') || lower.includes('while ')) hint = "Loops need a colon and indentation to run recursively over evidence.";
    else if(lower.includes('import')) hint = "Import external forensic libraries. E.g., 'import math'.";
    else if(lower.includes('class') || lower.includes('object')) hint = "Initialize data objects using 'class' and __init__(self).";
    
    hintBox.innerHTML = `<i>ORACLE TIP:</i> ${hint}`;
    hintBox.classList.remove('hidden');
    gsap.fromTo(hintBox, {opacity: 0, y: -10}, {opacity: 1, y: 0, duration: 0.5});
    
    btn.style.display = 'none';
}
