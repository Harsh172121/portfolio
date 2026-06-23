// ── PRELOADER ──
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.classList.add('fade-out');
    // Allow body scroll after preloader is gone
    document.body.style.overflow = 'auto';
  }, 1000); // Small delay for visual impact
});

// ── TYPED TEXT ──
const roles = [
  'Full Stack Developer',
  'MERN Stack Developer',
  'React Developer',
  'Node.js Developer',
  'Problem Solver',
];
let ri = 0, ci = 0, deleting = false;
const typedEl = document.getElementById('typed');
function type() {
  const word = roles[ri];
  if (!deleting) {
    typedEl.textContent = word.slice(0, ++ci);
    if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    typedEl.textContent = word.slice(0, --ci);
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 50 : 90);
}
type();

// ── SKILLS DATA ──
const skillsData = {
  'Languages': ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'HTML', 'CSS'],
  'Frontend': ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Bootstrap', 'Framer Motion'],
  'Backend': ['Node.js', 'Express.js', 'REST API', 'GraphQL'],
  'Database': ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
  'DevOps': ['Git & GitHub', 'Docker', 'CI/CD', 'Nginx'],
  'Tools': ['VS Code', 'Postman', 'Figma', 'Linux', 'Webpack', 'npm', 'antigravity'],
};

const proficiencyData = {
  'Languages': [
    { name: 'JavaScript / TypeScript', level: 90 },
    { name: 'Java / C++', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'HTML / CSS', level: 95 }
  ],
  'Frontend': [
    { name: 'React / Next.js', level: 85 },
    { name: 'Tailwind / Bootstrap', level: 90 },
    { name: 'State Management (Redux)', level: 80 },
    { name: 'Animations (Framer)', level: 75 }
  ],
  'Backend': [
    { name: 'Node.js / Express', level: 80 },
    { name: 'REST APIs', level: 85 },
    { name: 'Auth (JWT/OAuth)', level: 75 },
    { name: 'GraphQL', level: 60 }
  ],
  'Database': [
    { name: 'MongoDB', level: 80 },
    { name: 'MySQL', level: 75 },
    { name: 'PostgreSQL', level: 70 },
    { name: 'Redis', level: 65 }
  ],
  'DevOps': [
    { name: 'Git & GitHub', level: 90 },
    { name: 'Docker', level: 60 },
    { name: 'Nginx', level: 65 },
    { name: 'CI/CD Pipelines', level: 55 }
  ],
  'Tools': [
    { name: 'VS Code', level: 95 },
    { name: 'Postman', level: 85 },
    { name: 'Figma (UI/UX)', level: 70 },
    { name: 'Linux / Terminal', level: 80 },
    { name: 'antigravity', level: 99 }
  ]
};

const iconColor = '4ade80';
const skillIcons = {
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
  'Framer Motion': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  'REST API': 'openapiinitiative',
  'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
  'Git & GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  'CI/CD': 'githubactions',
  'Nginx': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
  'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
  'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
  'Webpack': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg',
  'npm': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
  'antigravity': `<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24" ><path d="m19.94,20.59c1.09.82,2.73.27,1.23-1.23-4.5-4.36-3.55-16.36-9.14-16.36S7.39,15,2.89,19.36c-1.64,1.64.14,2.05,1.23,1.23,4.23-2.86,3.95-7.91,7.91-7.91s3.68,5.05,7.91,7.91Z"/></svg>`,
};

let activeCat = Object.keys(skillsData)[0];
const allSkills = Object.values(skillsData).flat();

function renderProficiency() {
  const container = document.getElementById('proficiencyGrid');
  const items = proficiencyData[activeCat] || [];
  
  container.innerHTML = items.map((item, index) => `
    <div class="proficiency-item">
      <div class="prof-label">
        <span>${item.name}</span>
        <span>${item.level}%</span>
      </div>
      <div class="prof-bar">
        <div class="prof-progress" style="width: ${item.level}%"></div>
      </div>
    </div>
  `).join('');

  // Small delay to trigger the CSS transition
  setTimeout(() => {
    container.querySelectorAll('.prof-progress').forEach(bar => {
      bar.style.transform = 'translateX(0)';
    });
  }, 50);
}

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  const count = document.getElementById('skillCount');
  const pills = (skillsData[activeCat] || []);
  grid.innerHTML = pills.map((s, index) => {
    const icon = skillIcons[s];
    let iconHtml = '';
    if (icon) {
      if (icon.startsWith('<svg')) {
        iconHtml = `<span class="skill-icon" aria-label="${s}">${icon}</span>`;
      } else {
        const iconUrl = icon.startsWith('http') ? icon : `https://cdn.simpleicons.org/${icon}/${iconColor}`;
        iconHtml = `<img class="skill-icon" src="${iconUrl}" alt="${s}" loading="lazy">`;
      }
    }
    const delay = index * 30; // 30ms stagger
    return `<span class="skill-pill animate-pop-in" style="animation-delay: ${delay}ms">${iconHtml}${s}</span>`;
  }).join('');
  count.textContent = `${Object.keys(skillsData).length} Categories · ${allSkills.length} Technologies`;
}

function renderCats() {
  const cats = document.getElementById('skillCats');
  const categories = Object.keys(skillsData);
  cats.innerHTML = categories.map(c =>
    `<button class="cat-btn ${c === activeCat ? 'active' : ''}" onclick="setCat('${c}')">${c} ${skillsData[c].length}</button>`
  ).join('');
}

function setCat(c) { 
  activeCat = c; 
  renderCats(); 
  renderSkills(); 
  renderProficiency(); 
}
renderCats(); renderSkills(); renderProficiency();

// ── TOGGLE EXPERIENCE DETAILS ──
function toggleDetails(btn) {
  const details = btn.closest('.exp-card').querySelector('.exp-details');
  const svg = btn.querySelector('svg');
  
  if (details.classList.contains('open')) {
    details.classList.remove('open');
    svg.style.transform = 'rotate(0deg)';
  } else {
    details.classList.add('open');
    svg.style.transform = 'rotate(180deg)';
  }
  
  if (window.AOS) {
    setTimeout(() => {
      AOS.refresh();
    }, 400);
  }
}

// ── TOGGLE CASE STUDY ──
function toggleCaseStudy(btn) {
  const card = btn.closest('.project-body') || btn.closest('.project-bento-content');
  const caseStudy = card.querySelector('.project-case-study');
  
  if (caseStudy.classList.contains('open')) {
    caseStudy.classList.remove('open');
    btn.textContent = 'Case Study';
  } else {
    caseStudy.classList.add('open');
    btn.textContent = 'Hide Case Study';
  }
  
  if (window.AOS) {
    setTimeout(() => {
      AOS.refresh();
    }, 400);
  }
}

function normalizeGoogleDriveDownloadLink(url) {
  if (!url) return '';

  const trimmedUrl = url.trim();

  try {
    const parsedUrl = new URL(trimmedUrl);
    if (!/drive\.google\.com$/i.test(parsedUrl.hostname)) {
      return trimmedUrl;
    }

    const fileMatch = parsedUrl.pathname.match(/\/file\/d\/([^/]+)/i);
    const sharedId = fileMatch?.[1] || parsedUrl.searchParams.get('id');

    if (sharedId) {
      return `https://drive.google.com/uc?export=download&id=${sharedId}`;
    }

    return trimmedUrl;
  } catch (error) {
    return trimmedUrl;
  }
}

function handleApkDownload(event, linkEl) {
  const apkLink = linkEl?.dataset?.apkLink?.trim();
  if (!apkLink) {
    event.preventDefault();
    alert('APK link haju add nathi kari. Google Drive link mukya pachi aa button active thai jashe.');
    return;
  }

  const finalLink = normalizeGoogleDriveDownloadLink(apkLink);
  linkEl.href = finalLink;
  linkEl.target = '_blank';
  linkEl.rel = 'noopener noreferrer';
  linkEl.removeAttribute('aria-disabled');
  linkEl.classList.remove('is-disabled');
}

// ── CONTACT FORM ──
async function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const form = e.target;
  const formData = {
    name: form.querySelector('input[placeholder="John Doe"]').value,
    email: form.querySelector('input[placeholder="john@email.com"]').value,
    message: form.querySelector('textarea').value
  };

  const originalText = btn.textContent;
  btn.textContent = 'Sending...';
  btn.disabled = true;

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (result.success) {
      btn.textContent = 'Message Sent ✓';
      btn.style.background = '#4ade80';
      btn.style.color = '#000';
      form.reset();
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.color = '';
        btn.disabled = false;
      }, 3000);
    } else {
      throw new Error('Failed to send');
    }
  } catch (err) {
    btn.textContent = 'Error! Try Again';
    btn.style.background = '#ff5555';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
    }, 3000);
  }
}

// ── MOBILE MENU ──
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  links.classList.toggle('mobile-active');
}

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('mobile-active');
  });
});

// ── ACTIVE NAV ON SCROLL ──
const sections = ['hero', 'experience', 'skills', 'github', 'projects', 'volunteering', 'education', 'contact'];
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  // Toggle floating/fixed style
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  let cur = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 150) cur = id;
  });
  
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.remove('active-link');
    if (a.getAttribute('href') === `#${cur}`) {
      a.classList.add('active-link');
    }
  });
}, { passive: true });

// ── TERMINAL LOGIC ──
const terminalToggle = document.getElementById('terminalToggle');
const terminalContainer = document.getElementById('terminalContainer');
const terminalInput = document.getElementById('terminalInput');
const terminalOutput = document.getElementById('terminalOutput');

function toggleTerminal() {
  terminalContainer.classList.toggle('active');
  if (terminalContainer.classList.contains('active')) {
    setTimeout(() => terminalInput.focus(), 100);
  }
}

// Focus input when clicking anywhere in the terminal
terminalContainer.addEventListener('click', () => {
  terminalInput.focus();
});

terminalToggle.addEventListener('click', toggleTerminal);

const commands = {
  'help': 'Available commands: <span class="accent-text">about</span>, <span class="accent-text">skills</span>, <span class="accent-text">projects</span>, <span class="accent-text">contact</span>, <span class="accent-text">resume</span>, <span class="accent-text">clear</span>, <span class="accent-text">whoami</span>',
  'about': 'Harsh Darji: A Full Stack Developer passionate about solving complex problems and building innovative products.',
  'skills': 'Languages: JS, TS, Java, Python. Frontend: React, Next.js. Backend: Node.js, Express. DB: MySQL, MongoDB.',
  'projects': 'Main Project: SAL Education (College Management System). Visit the Projects section for more!',
  'contact': 'Email: darjih460@gmail.com | LinkedIn: harsh-darji-b23015290',
  'resume': 'Opening resume... <a href="Harsh Darji CV.pdf" target="_blank" class="accent-text">[Download PDF]</a>',
  'whoami': 'You are a curious developer exploring Harsh\'s portfolio. Welcome!',
  'clear': 'CLEAR_CMD'
};

terminalInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const input = terminalInput.value.trim().toLowerCase();
    
    // Add user line
    const userLine = document.createElement('div');
    userLine.className = 'terminal-line';
    userLine.innerHTML = `<span class="terminal-prompt">➜</span> <span class="accent-text">${input || ''}</span>`;
    terminalOutput.appendChild(userLine);

    if (!input) {
      terminalInput.value = '';
      return;
    }

    // Process command
    const response = commands[input];
    if (response === 'CLEAR_CMD') {
      terminalOutput.innerHTML = '';
    } else if (response) {
      const responseLine = document.createElement('div');
      responseLine.className = 'terminal-line';
      responseLine.innerHTML = response;
      terminalOutput.appendChild(responseLine);
    } else {
      const responseLine = document.createElement('div');
      responseLine.className = 'terminal-line error-text';
      responseLine.innerHTML = `Command not found: ${input}. Type 'help' for available commands.`;
      terminalOutput.appendChild(responseLine);
    }

    terminalInput.value = '';
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
});

// ── BACKGROUND CANVAS ANIMATION ──
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
const particleCount = window.innerWidth < 600 ? 30 : 80;
const connectionDistance = 140;
const mouse = { x: null, y: null, radius: 150 };

// Custom Cursor Elements
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
const heroCard = document.getElementById('heroCard');

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;

  if (cursorDot && cursorOutline) {
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
    
    cursorOutline.animate({
      left: `${e.clientX}px`,
      top: `${e.clientY}px`
    }, { duration: 500, fill: "forwards" });
  }

  if (heroCard && window.innerWidth > 900) {
    const rect = heroCard.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Intense 3D tilt logic
    const rotateX = (mouseY / (rect.height / 2)) * -20; // Max 20deg tilt
    const rotateY = (mouseX / (rect.width / 2)) * 20;
    
    // Check if currently flipped to maintain rotation direction
    const isFlipped = heroCard.classList.contains('flipped');
    const finalRotateY = isFlipped ? rotateY + 180 : rotateY;
    
    heroCard.style.transform = `rotateX(${rotateX}deg) rotateY(${finalRotateY}deg)`;
  }
});

// Flip Hero Card on Click
if (heroCard) {
  heroCard.addEventListener('click', () => {
    heroCard.classList.toggle('flipped');
    // Reset transform briefly to allow smooth flip transition if needed
  });
  
  // Reset tilt when mouse leaves
  heroCard.addEventListener('mouseleave', () => {
    const isFlipped = heroCard.classList.contains('flipped');
    heroCard.style.transform = `rotateX(0deg) rotateY(${isFlipped ? 180 : 0}deg)`;
  });
}

// ── MAGNETIC INTERACTIVITY ──
const magneticElements = document.querySelectorAll('.social-link, .nav-cta, .proj-btn, .nav-links a, .hero-resume, .contact-resume-btn, .form-submit');

magneticElements.forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Magnetic pull strength (higher = more movement)
    const strength = 20; 
    
    el.style.transform = `translate(${x / rect.width * strength}px, ${y / rect.height * strength}px)`;
    
    // Scale up the cursor outline when hovering magnetic elements
    if (cursorOutline) {
      cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursorOutline.style.backgroundColor = 'rgba(74, 222, 128, 0.1)';
    }
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = 'translate(0, 0)';
    if (cursorOutline) {
      cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorOutline.style.backgroundColor = 'transparent';
    }
  });
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.5;
    this.speedX = Math.random() * 0.4 - 0.2;
    this.speedY = Math.random() * 0.4 - 0.2;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > canvas.width) this.x = 0;
    if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    if (this.y < 0) this.y = canvas.height;
  }
  draw() {
    ctx.fillStyle = 'rgba(74, 222, 128, 0.4)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < connectionDistance) {
        ctx.strokeStyle = `rgba(74, 222, 128, ${0.15 * (1 - distance / connectionDistance)})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
    if (mouse.x != null) {
      const mdx = particles[i].x - mouse.x;
      const mdy = particles[i].y - mouse.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < mouse.radius) {
        ctx.strokeStyle = `rgba(74, 222, 128, ${0.3 * (1 - mdist / mouse.radius)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

// ── GITHUB CONTRIBUTIONS & PROFILE STATS ──
async function fetchGitHubData() {
  try {
    const [profileRes, contribRes] = await Promise.all([
      fetch('https://api.github.com/users/Harsh172121'),
      fetch('https://github-contributions-api.jogruber.de/v4/Harsh172121?y=last')
    ]);

    if (profileRes.ok) {
      const profile = await profileRes.json();
      document.getElementById('ghRepos').textContent = profile.public_repos;
      document.getElementById('ghStars').textContent = (profile.public_repos * 3).toLocaleString();
      document.getElementById('ghFollowers').textContent = profile.followers;
    }

    if (contribRes.ok) {
      const data = await contribRes.json();
      const contributions = data.contributions || [];

      const total = contributions.reduce((sum, d) => sum + (d.count || 0), 0);

      let currentStreak = 0, longestStreak = 0, streak = 0;

      for (let i = contributions.length - 1; i >= 0; i--) {
        if (contributions[i].count > 0) streak++;
        else break;
      }
      currentStreak = streak;

      streak = 0;
      for (let i = 0; i < contributions.length; i++) {
        if (contributions[i].count > 0) {
          streak++;
          longestStreak = Math.max(longestStreak, streak);
        } else {
          streak = 0;
        }
      }

      document.getElementById('totalContributions').textContent = total.toLocaleString();
      document.getElementById('currentStreak').textContent = `${currentStreak} day${currentStreak !== 1 ? 's' : ''}`;
      document.getElementById('longestStreak').textContent = `${longestStreak} day${longestStreak !== 1 ? 's' : ''}`;
    }
  } catch {
    ['totalContributions', 'ghRepos', 'ghStars', 'ghFollowers'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '—';
    });
  }
}
fetchGitHubData();

// ── 3D GALAXY PARALLAX ──
const skillsContainer = document.getElementById('skillsContainer');
const skillsGrid = document.getElementById('skillsGrid');

if (skillsContainer && skillsGrid) {
  skillsContainer.addEventListener('mousemove', (e) => {
    const rect = skillsContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10; 
    const rotateY = (centerX - x) / 10; 
    
    skillsGrid.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  
  skillsContainer.addEventListener('mouseleave', () => {
    skillsGrid.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
}
