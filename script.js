let questions = [], score = 0, currentQ = 0, timer, timeLeft = 0, startTime = 0;
let userName = '', quizType = 'pre', language = 'ar', installPrompt = null;

const TEXT = {
  ar: { dir: 'rtl', nameRequired: 'يرجى كتابة اسم المتدرب للمتابعة.', noQuestions: 'لا توجد أسئلة متاحة لهذا الاختبار.', pre: 'الاختبار القبلي', post: 'الاختبار البعدي', complete: 'اكتمل الاختبار', great: 'أحسنت يا', correct: 'إجابات صحيحة', time: 'الوقت المستغرق', seconds: 'ثانية', retry: 'إعادة الاختبار', share: 'إرسال النتيجة عبر واتساب', exit: 'إنهاء', resultText: 'نتيجتك في اختبار تدريب التواصل الفعال', excellent: 'أداء متميز! لديك فهم قوي لممارسات التواصل الفعال.', good: 'نتيجة جيدة! راجع المفاهيم لتجعل تواصلك أكثر فاعلية.', improve: 'بداية موفقة. راجع محتوى التدريب ثم أعد المحاولة.' },
  en: { dir: 'ltr', nameRequired: 'Please enter your name to continue.', noQuestions: 'No questions are available for this quiz.', pre: 'Pre-training assessment', post: 'Post-training assessment', complete: 'Assessment complete', great: 'Well done,', correct: 'correct answers', time: 'Time taken', seconds: 'seconds', retry: 'Take the assessment again', share: 'Send result via WhatsApp', exit: 'Exit', resultText: 'Your Effective Communication Training assessment result', excellent: 'Excellent performance! You have a strong grasp of effective communication practices.', good: 'Good result! Review the concepts to make your communication even more effective.', improve: 'A promising start. Review the training content, then try again.' }
};

function t() { return TEXT[language]; }
function playSound(correct) {
  if (!CONFIG.SHOW_SOUND) return;
  try { const c = new (AudioContext || webkitAudioContext)(), o = c.createOscillator(), g = c.createGain(); o.connect(g); g.connect(c.destination); o.frequency.value = correct ? 680 : 220; g.gain.value = .06; o.start(); o.stop(c.currentTime + .14); } catch (_) {}
}
function setLanguage(lang) {
  language = lang; const copy = UI[lang];
  document.documentElement.lang = lang; document.documentElement.dir = t().dir;
  document.title = copy.title;
  Object.entries(copy).forEach(([id, value]) => { const el = document.getElementById(id); if (el) el.textContent = value; });
  document.getElementById('username').placeholder = copy.placeholder;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
}
const UI = {
  ar: { title: 'اختبار تدريب التواصل الفعال', 'language-label': 'اختر اللغة', 'training-label': 'تدريب مهني', 'app-title': 'اختبار تدريب التواصل الفعال', 'intro-text': 'اختبر معرفتك ومهاراتك العملية في مهارات التواصل الفعال.', 'name-label': 'اسم المتدرب', 'quiz-label': 'نوع الاختبار', 'start-button': 'ابدأ الاختبار', 'start-note': '10 أسئلة • اختر الإجابة الأنسب لكل سؤال', 'install-button': 'تثبيت التطبيق على الجهاز', 'exit-button': 'إنهاء', placeholder: 'اكتب اسمك هنا' },
  en: { title: 'Effective Communication Training Assessment', 'language-label': 'Choose language', 'training-label': 'Professional training', 'app-title': 'Effective Communication Assessment', 'intro-text': 'Test your knowledge and practical skills in effective communication.', 'name-label': 'Trainee name', 'quiz-label': 'Assessment type', 'start-button': 'Start assessment', 'start-note': '10 questions • Choose the best answer for each question', 'install-button': 'Install this app', 'exit-button': 'Exit', placeholder: 'Enter your name' }
};
function refreshQuizSelect() {
  const select = document.getElementById('quiz-type');
  select.options[0].text = t().pre; select.options[1].text = t().post;
}
function startGame() {
  userName = document.getElementById('username').value.trim(); quizType = document.getElementById('quiz-type').value;
  if (!userName) return alert(t().nameRequired);
  questions = [...QUIZZES[quizType]];
  if (!questions.length) return alert(t().noQuestions);
  document.getElementById('start-screen').classList.add('hidden'); document.getElementById('game-screen').classList.remove('hidden');
  score = 0; currentQ = 0; startTime = Date.now(); nextQuestion();
}
function nextQuestion() {
  clearInterval(timer); if (currentQ >= questions.length) return showResults();
  const q = questions[currentQ][language];
  document.getElementById('q-counter').textContent = `${currentQ + 1} / ${questions.length}`;
  document.getElementById('quiz-type-label').textContent = t()[quizType];
  document.getElementById('progress-bar').style.width = `${(currentQ / questions.length) * 100}%`;
  document.getElementById('q-icon').textContent = questions[currentQ].icon; document.getElementById('q-text').textContent = q.q;
  const options = document.getElementById('options'); options.innerHTML = '';
  q.o.forEach((option, i) => { const btn = document.createElement('button'); btn.className = 'option-btn'; btn.textContent = option; btn.addEventListener('click', () => checkAnswer(i), { once: true }); options.appendChild(btn); });
  timeLeft = CONFIG.QUESTION_TIME; document.getElementById('timer').textContent = timeLeft;
  timer = setInterval(() => { timeLeft--; document.getElementById('timer').textContent = timeLeft; if (timeLeft <= 0) checkAnswer(-1); }, 1000);
}
function checkAnswer(index) {
  clearInterval(timer); document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
  const correct = index === questions[currentQ].answer; if (correct) score++; playSound(correct);
  const feedback = document.getElementById('feedback'); feedback.textContent = correct ? '✓' : '✕'; feedback.className = `feedback-overlay ${correct ? 'correct' : 'wrong'}`;
  setTimeout(() => { feedback.classList.add('hidden'); currentQ++; nextQuestion(); }, 650);
}
function showResults() {
  clearInterval(timer); const seconds = Math.round((Date.now() - startTime) / 1000), percentage = Math.round((score / questions.length) * 100);
  const message = percentage >= 80 ? t().excellent : percentage >= 60 ? t().good : t().improve;
  const whatsappText = language === 'ar'
    ? `نتيجة اختبار تدريب التواصل الفعال\nالاسم: ${userName}\nنوع الاختبار: ${t()[quizType]}\nالنتيجة: ${score}/${questions.length} (${percentage}%)\nالوقت: ${seconds} ثانية`
    : `Effective Communication Assessment Result\nName: ${userName}\nAssessment: ${t()[quizType]}\nScore: ${score}/${questions.length} (${percentage}%)\nTime: ${seconds} seconds`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`;
  document.getElementById('app').innerHTML = `<section class="card results-card"><div class="result-badge">${percentage >= 80 ? '🏆' : percentage >= 60 ? '🌟' : '💪'}</div><p class="eyebrow">${t().complete}</p><h1>${t().great} ${escapeHtml(userName)}!</h1><p class="result-subtitle">${t().resultText}</p><div class="score-ring"><strong>${percentage}%</strong><span>${score}/${questions.length}</span></div><p class="result-message">${message}</p><div class="stats"><div><strong>${score}</strong><span>${t().correct}</span></div><div><strong>${seconds}</strong><span>${t().time}</span></div></div><a class="whatsapp-btn" href="${whatsappUrl}" target="_blank" rel="noopener">${t().share}</a><button class="primary-btn" onclick="location.reload()">${t().retry}</button></section>`;
}
function escapeHtml(value) { const div = document.createElement('div'); div.textContent = value; return div.innerHTML; }
document.querySelectorAll('.lang-btn').forEach(button => button.addEventListener('click', () => { setLanguage(button.dataset.lang); refreshQuizSelect(); }));
document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('exit-button').addEventListener('click', () => { clearInterval(timer); location.reload(); });
window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); installPrompt = event; document.getElementById('install-button').classList.remove('hidden'); });
document.getElementById('install-button').addEventListener('click', async () => { if (!installPrompt) return; installPrompt.prompt(); await installPrompt.userChoice; installPrompt = null; document.getElementById('install-button').classList.add('hidden'); });
refreshQuizSelect();
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {}));