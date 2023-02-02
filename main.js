
// Elements Catcher
const cardsKnowledgesRowEl = document.querySelector("#cardsKnowledgesRow");
const cardsProjectsRowEl = document.querySelector("#cardsProjectsRow");
const cardCoursesDivEl = document.querySelector("#cardCoursesDiv");
const cardFormationDivEl = document.querySelector("#cardFormationDiv");

//Object Creator Projects

const project1 = {
  title: "Jogo do Ping Pong",
  text: "Um projeto do jogo Pong criado em Javascript.",
  imgSrc: "./img/project-pong.png",
  hrefGitHub:'https://github.com/Padilha04/PingPongGame',
  hrefSite:'https://padilha04.github.io/PingPongGame/',
  tech: ["Javascript", "HTML", "CSS"],
};

const project2 = {
  title: "Gerador de Senhas",
  text: "Um projeto de um app gerador de senhas, com indicador de força, criado em Javascript.",
  imgSrc: "./img/project-passgen.png",
  hrefGitHub: 'https://github.com/Padilha04/Password-Generator',
  hrefSite:'https://padilha04.github.io/Password-Generator/',
  tech: ["Javascript", "HTML", "CSS"],
};

const project3 = {
  title: "Portfólio Pessoal - Amanda Padilha",
  text: "Um projeto de portfólio pessoal, a fim de reunir informações sobre mim, meus projetos e formação.",
  imgSrc: "./img/project-portfolio.png",
  hrefGitHub:'#',
  hrefSite:'#',
  tech: ["Javascript", "Bootstrap", "HTML", "CSS", "Figma"],
};

//Object Creator Courses

const courseJSBas = {
  year: "2023",
  title: "JavaScript Básico",
  inst: "Dev Samurai",
  content:
    "Aprendizado básico sobre a linguagem de programação Javascript. Conteudó inclui tipos de dados, variáveis, expressões, operadores, estruturas de decisão e estruturas de repetição.",
};

const courseLogProgAv = {
  year: "2023",
  title: "Lógica de Programação Avançada",
  inst: "Dev Samurai",
  content:
    "Aprendizado avançado sobre lógica de programação. Conteúdo inclui operadores, variáveis, entrada de dados, tipos de dados, comparação lógica e complexa, funções, estruturas de decisão e repetição.",
};

const courseDSFigma = {
  year: "2022",
  title: "Introdução à Design System com Figma",
  inst: "Domestika",
  content:
    "Aprendizado sobre Design System utilizando a ferramenta Figma. Conteúdo inclui bases e princípios do sistema de design, guia de estilos, elementos, componentes, padrões, telas, tokens de design, documentação e equipes de trabalho. ",
};

//Object Creator Formation

const formationAnaliseeDesenvolv = {
  year: "2023 - 2025",
  title: "Análise e Desenvolvimento de Sistemas",
  inst: "Tecnólogo - Anhanguera",
  content:
    "Para formar um profissional competente e apto para as áreas de Tecnologia da Informação e Sistemas, o curso se dividiu em quatro pilares: Fundamentos, focando em matemática e toda parte de lógica e algoritmos; Técnico, com linguagens e decomposição de problemas; Ferramentas de programação e suas linguagens e Cultura, que foca em práticas ágeis.",
};
const formationESDI = {
  year: "2011 - 2012",
  title: "Design (Desenho Industrial)",
  inst: "Interrompida - Universidade do Estado do Rio de Janeiro (UERJ)",
  content:
    "O curso de graduação tem como objetivo proporcionar ao estudante um amplo conhecimento acerca das linguagens, meios, materiais do Design e sua inserção na sociedade.",
};

//Array Creator

const knowledgeArray = ["Javascript", "Typescript","Bootstrap", "HTML", "CSS", "Figma"];
const projectsArray = [project3, project2, project1];
const coursesArray = [courseJSBas, courseLogProgAv, courseDSFigma];
const formationArray = [formationAnaliseeDesenvolv, formationESDI];



// Function Card Knowledge
function createKnowCard(knowledge) {
  const newDivCol = document.createElement("div");
  newDivCol.classList.add("col");

  cardsKnowledgesRowEl.append(newDivCol);

  const newDivCard = document.createElement("div");
  newDivCard.classList.add("card");

  newDivCol.append(newDivCard);

  const newCardTitle = document.createElement("h4");
  newCardTitle.innerHTML = `${knowledge}`;

  newDivCard.append(newCardTitle);

  const newImgCard = document.createElement("img");
  newImgCard.setAttribute("src", `./img/${knowledge}.png`);

  newDivCard.append(newImgCard);
}

function createAllKnowCards() {
  for (value of knowledgeArray) {
    createKnowCard(value);
  }
}

//Function Card Project

function createCardProject(projectObj) {
  const newDivCol = document.createElement("div");
  newDivCol.classList.add("col");

  cardsProjectsRowEl.append(newDivCol);

  const newDivCard = document.createElement("div");
  newDivCard.classList.add("card","h-100", "transitionsmooth");

  newDivCol.append(newDivCard);

  const newDivImg = document.createElement("div");
  newDivImg.classList.add("divimg", "transitionsmooth2")
  newDivImg.style.backgroundImage = `url(${projectObj.imgSrc})`;

  newDivCard.append(newDivImg);
 

  const newDivCardBody = document.createElement("div");
  newDivCardBody.classList.add("card-body");

  newDivCard.append(newDivCardBody);

  const newH5 = document.createElement("h5");
  newH5.classList.add("card-title");
  newH5.innerHTML = projectObj.title;

  newDivCardBody.append(newH5);

  const newDivBadges = document.createElement("div");
  newDivBadges.classList.add("card-badge");

  newDivCardBody.append(newDivBadges);

  //Badges Check

  for (value of knowledgeArray) {
    if(projectObj.tech.includes(value)) {
        const newBadge = document.createElement("img");
        newBadge.setAttribute("src", `./img/${value}.png`);
        newDivBadges.append(newBadge);
    }
  }

  const newP = document.createElement("p");
  newP.classList.add("card-text");
  newP.innerHTML = projectObj.text;

  newDivCardBody.append(newP);

  const newDivButtons = document.createElement("div")
  newDivButtons.classList.add("btns-cards")
  
  newDivCard.append(newDivButtons)

  const newLinkBtn2 = document.createElement('a')
  newLinkBtn2.setAttribute("href", `${projectObj.hrefSite}`)
  newLinkBtn2.setAttribute("target", "_blank")
  newDivButtons.append(newLinkBtn2)

  const newButton2 = document.createElement("button")
  newButton2.classList.add("btn", "btn-outline-primary-oncard", "transitionsmooth2")
  newButton2.innerHTML = "VER SITE DO PROJETO"
  
  newLinkBtn2.append(newButton2)

  const newLinkGit2 = document.createElement('a')
  newLinkGit2.setAttribute("href", `${projectObj.hrefGitHub}`)
  newLinkGit2.setAttribute("target", "_blank")
  newDivButtons.append(newLinkGit2)

  const newImgGit2 = document.createElement ('img')
  newImgGit2.setAttribute("src", "./img/github2.svg")
  newImgGit2.classList.add("github-img2")

  newLinkGit2.append(newImgGit2)
 

  newDivCard.addEventListener("mouseenter", ()=>{
  
    newDivImg.style.opacity = "0.8"
    newDivCard.style.borderColor = "#1f7a8c"
    
  })
  newDivCard.addEventListener("mouseleave", ()=>{
    newDivImg.style.opacity = "1"

    newDivCard.style.borderColor = "rgba(0, 0, 0, 0.175)"

  })



}

function createAllProjCards() {
  for (value of projectsArray) {
    createCardProject(value);
  }
}

//Function Courses

function createCourse(courseObj) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("course-type");

  cardCoursesDivEl.append(newDiv);

  const newH6 = document.createElement("h6");

  newDiv.append(newH6);

  const newSpanCourseYear = document.createElement("span");
  newSpanCourseYear.classList.add("course-year");
  newSpanCourseYear.innerHTML = `${courseObj.year}`;

  newH6.append(newSpanCourseYear);

  const newSpanCourseTitle = document.createElement("span");
  newSpanCourseTitle.classList.add("course-title");
  newSpanCourseTitle.innerHTML = `${courseObj.title}`;

  newH6.append(newSpanCourseTitle);

  const newPCourseInst = document.createElement("p");

  newDiv.append(newPCourseInst);

  const newSpanCourseInst = document.createElement("span");

  newSpanCourseInst.classList.add("course-inst");
  newSpanCourseInst.innerHTML = `${courseObj.inst}`;

  newPCourseInst.append(newSpanCourseInst);

  const newPCourseContent = document.createElement("p");
  newDiv.append(newPCourseContent);

  const newSpanCourseContent = document.createElement("span");

  newSpanCourseContent.classList.add("course-content");
  newSpanCourseContent.innerHTML = `${courseObj.content}`;

  newPCourseContent.append(newSpanCourseContent);
}

function createAllCourses() {
  for (value of coursesArray) {
    createCourse(value);
  }
}

function createFormation(formationObj) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("course-type");

  cardFormationDivEl.append(newDiv);

  const newH6 = document.createElement("h6");

  newDiv.append(newH6);

  const newSpanCourseYear = document.createElement("span");
  newSpanCourseYear.classList.add("course-year");
  newSpanCourseYear.innerHTML = `${formationObj.year}`;

  newH6.append(newSpanCourseYear);

  const newSpanCourseTitle = document.createElement("span");
  newSpanCourseTitle.classList.add("course-title");
  newSpanCourseTitle.innerHTML = `${formationObj.title}`;

  newH6.append(newSpanCourseTitle);

  const newPCourseInst = document.createElement("p");

  newDiv.append(newPCourseInst);

  const newSpanCourseInst = document.createElement("span");

  newSpanCourseInst.classList.add("course-inst");
  newSpanCourseInst.innerHTML = `${formationObj.inst}`;

  newPCourseInst.append(newSpanCourseInst);

  const newPCourseContent = document.createElement("p");
  newDiv.append(newPCourseContent);

  const newSpanCourseContent = document.createElement("span");

  newSpanCourseContent.classList.add("course-content");
  newSpanCourseContent.innerHTML = `${formationObj.content}`;

  newPCourseContent.append(newSpanCourseContent);
}

function createAllFormation() {
  for (value of formationArray) {
    createFormation(value);
  }
}



//Execute

createAllKnowCards();
createAllProjCards();
createAllFormation();
createAllCourses();


//Transitions


