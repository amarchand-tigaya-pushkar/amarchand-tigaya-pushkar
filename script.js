const projects = [
  {n:"01",title:"Car Price Prediction",cat:"ml",desc:"Machine Learning regression project for predicting vehicle prices.",tags:["Regression","Machine Learning","Python","Data Science"],url:"https://github.com/amarchand-tigaya-pushkar/car_price_project.git"},
  {n:"02",title:"Loan Approval Prediction",cat:"ml",desc:"Machine Learning classification project for predicting loan approval.",tags:["Classification","Machine Learning","Data Analysis"],url:"https://github.com/amarchand-tigaya-pushkar/loan_approval_project.git"},
  {n:"03",title:"Sentiment Analysis",cat:"nlp",desc:"Natural Language Processing project for analyzing and classifying sentiment in text.",tags:["NLP","Natural Language Processing","Machine Learning","Naive Bayes"],url:"https://github.com/amarchand-tigaya-pushkar/sentiment_analysis_project.git"},
  {n:"04",title:"Weather Prediction",cat:"ml",desc:"Machine Learning project for predicting weather conditions using historical data.",tags:["Python","Pandas","Machine Learning","Data Analysis"],url:"https://github.com/amarchand-tigaya-pushkar/weather_prediction_project.git"},
  {n:"05",title:"Credit Card Fraud Detection",cat:"ml",desc:"Machine Learning project focused on detecting potentially fraudulent credit card transactions.",tags:["Machine Learning","Anomaly Detection","Fraud Detection","Isolation Forest"],url:"https://github.com/amarchand-tigaya-pushkar/credit_card_fraud_project.git"},
  {n:"06",title:"Music Recommendation System",cat:"nlp",desc:"Machine Learning recommendation system designed to suggest similar songs using audio features.",tags:["Recommendation System","Python","Machine Learning","KNN"],url:"https://github.com/amarchand-tigaya-pushkar/music_recommendation_project.git"},
  {n:"07",title:"customer-segmentation-kmeans",cat:"ml",desc:".",tags:["K-Means"],url:"https://github.com/amarchand-tigaya-pushkar/customer-segmentation-k-means.git"},
  {n:"08",title:"Stock Price Prediction",cat:"ml",desc:"Machine Learning regression project for predicting the next-day closing price using historical stock-market data.",tags:["Regression","Machine Learning","Python","Data Science","Time Series"],url:"https://github.com/amarchand-tigaya-pushkar/Stock-Price-Prediction-.git"},
  {n:"09",title:"Human Action Recognition",cat:"cv",desc:"Computer Vision / AI project focused on recognizing human actions.",tags:["Computer Vision","AI","Action Recognition","Deep Learning"],url:"https://github.com/amarchand-tigaya-pushkar/Human-Action-Recognition.git"},
  {n:"10",title:"Project-10-Weather-Agent",cat:"agent",desc:"Simple Weather Agent using Python.",tags:["Agent","Python"],url:"https://github.com/amarchand-tigaya-pushkar/Project-10-Weather-Agent.git"},
  {n:"11",title:"Music Genre Classification using Machine Learning",cat:"ml",desc:"Machine Learning classification project for identifying music genres using audio-related features.",tags:["Machine Learning","Classification","Music Analysis","Python"],url:"https://github.com/amarchand-tigaya-pushkar/music_genre_project.git"},
  {n:"12",title:"Webcam App using Python",cat:"cv",desc:"Python-based webcam application for real-time camera interaction.",tags:["Python","Webcam"],url:"https://github.com/amarchand-tigaya-pushkar/python-webcam_app.py.git"},
  {n:"13",title:"Helmet Detection System",cat:"cv",desc:"Computer Vision project focused on detecting helmets from visual data.",tags:["Computer Vision","Object Detection","AI"],url:"https://github.com/amarchand-tigaya-pushkar/Helmet-Detection-System-.git"},
  {n:"14",title:"Currency-Converter-Agent",cat:"agent",desc:"Simple Currency Converter Agent using Python.",tags:["Agent","Python"],url:"https://github.com/amarchand-tigaya-pushkar/Currency-Converter-Agent.git"},
  {n:"15",title:"News-Search-Agent",cat:"agent",desc:"Create an agent that searches latest news by topic.",tags:["Agent","Search"],url:"https://github.com/amarchand-tigaya-pushkar/News-Search-Agent.git"},
  {n:"16",title:"Resume-Screening-Agent",cat:"agent",desc:"Create an agent that checks a resume and matches it with a job requirement.",tags:["Agent","Resume","AI"],url:"https://github.com/amarchand-tigaya-pushkar/Resume-Screening-Agent.git"},
  {n:"17",title:"Customer-Support-Agent",cat:"agent",desc:"Create an agent that answers customer questions automatically..",tags:["Agent","Customer Support","AI"],url:"https://github.com/amarchand-tigaya-pushkar/Customer-Support-Agent.git"},
  {n:"18",title:"Customer Support Chatbot",cat:"agent",desc:"Conversational AI project designed for automated customer support.",tags:["NLP","AI","Chatbot","Automation"],url:"https://github.com/amarchand-tigaya-pushkar/customer-support-chatbot.git"},
  {n:"19",title:"PDF-Question-Answering-Agent",cat:"agent",desc:"Create an agent that reads a PDF and answers questions from it.",tags:["Agent","PDF","Q&A"],url:"https://github.com/amarchand-tigaya-pushkar/PDF-Question-Answering-Agent.git"},
  {n:"20",title:"AI Coding Assistant Bot",cat:"agent",desc:"AI-powered coding assistant designed to help with programming-related tasks.",tags:["Python","AI","Automation","Coding Assistant"],url:"https://github.com/amarchand-tigaya-pushkar/AI-Coding-Assistant-Bot.git"},
  {n:"21",title:"FAQ-Chatbot",cat:"agent",desc:"Simple FAQ Chatbot using Python.",tags:["Chatbot","Python"],url:"https://github.com/amarchand-tigaya-pushkar/FAQ-Chatbot.git"},
  {n:"22",title:"Email-Summarization-Agent",cat:"agent",desc:"Create an agent that reads an email message and gives a short summary.",tags:["Agent","Email","Summarization"],url:"https://github.com/amarchand-tigaya-pushkar/Project-22-Email-Summarization-Agent.git"}
];

const grid = document.getElementById("projectGrid");
const search = document.getElementById("search");
const noResults = document.getElementById("noResults");
let activeFilter = "all";

function renderProjects(){
  const query = search.value.toLowerCase().trim();
  const filtered = projects.filter(p => {
    const categoryOK = activeFilter === "all" || p.cat === activeFilter;
    const text = `${p.title} ${p.desc} ${p.tags.join(" ")}`.toLowerCase();
    return categoryOK && text.includes(query);
  });

  grid.innerHTML = filtered.map(p => `
    <article class="project-card glass reveal visible">
      <span class="project-no">PROJECT ${p.n}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <a class="repo" href="${p.url}" target="_blank" rel="noopener">View Repository ↗</a>
    </article>
  `).join("");

  noResults.style.display = filtered.length ? "none" : "block";
}

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderProjects();
  });
});
search.addEventListener("input", renderProjects);
renderProjects();

const words = ["Data Science Enthusiast","Machine Learning Developer","Artificial Intelligence Explorer","Python Developer","Computer Vision Enthusiast"];
let wi=0, ci=0, deleting=false;
function typeLoop(){
  const word=words[wi];
  document.getElementById("typingText").textContent=deleting ? word.slice(0,ci--) : word.slice(0,ci++);
  if(!deleting && ci>word.length){deleting=true;setTimeout(typeLoop,1200);return}
  if(deleting && ci<0){deleting=false;wi=(wi+1)%words.length;ci=0}
  setTimeout(typeLoop,deleting?45:75);
}
typeLoop();

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("visible"); });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const themeBtn=document.getElementById("themeBtn");
themeBtn.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  themeBtn.textContent=document.body.classList.contains("light")?"☾":"☀";
  localStorage.setItem("amar-theme",document.body.classList.contains("light")?"light":"dark");
});
if(localStorage.getItem("amar-theme")==="light"){document.body.classList.add("light");themeBtn.textContent="☾"}

const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{
  const scrollTop=document.documentElement.scrollTop;
  const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
  document.querySelector(".progress").style.width=(scrollTop/height*100)+"%";
  topBtn.classList.toggle("show",scrollTop>500);
});
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
