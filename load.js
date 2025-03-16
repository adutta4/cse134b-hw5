window.addEventListener('DOMContentLoaded', async () => {
    const jsonProjects = [
        {
            "project_name": "Chavez Lab Intern at Sanford-Burnham Prebys (2021-present)",
            "description": "Analyzed tumor samples using AmpliconArchitect to detect the presence of extrachromosomal DNA, using the bioinformatics cloud platform Cavatica. Extensive experience with Python scripts and bioinformatics data types, such as FASTQ and BAM files.",
            "image": "https://pub-6ad496500cf0446fa228dd29a115090f.r2.dev/ecdna.jpg",
            "image_description": "Explanation of extrachromosomal DNA formation",
            "extra_link": "https://chavezlab.org/",
            "link_name": "Chavez Lab Website"
        },
        {
            "project_name": "CSE 110 Project - Triton Cook (2024)",
            "description": "Built a web application to allow users to find and share recipes. Used React framework, along with HTML, CSS, and Javascript for frontend and backend. I also worked in a large group, and learned Github, merging, and other software team issues.",
            "image": "https://pub-6ad496500cf0446fa228dd29a115090f.r2.dev/triton-cook.jpg",
            "image_description": "Triton Cook app home screen",
            "extra_link": "https://github.com/maynhile13105/CSE110-Project-TritonCook",
            "link_name": "Triton Cook Github"
        },
        {
            "project_name": "Software Engineering Intern at Vert Finance (2023)",
            "description": "Used React framework in existing codebase to work on several pages of Vert Finance's UI, including the accounts page and payments page, among others. Experience in client-side routing with React Router, and experience in making asynchronous REST API calls and handling callbacks.",
            "image": "https://pub-6ad496500cf0446fa228dd29a115090f.r2.dev/coding-generic-img.jpg",
            "image_description": "Code on computer screen",
            "extra_link": "https://vert-one.com/",
            "link_name": "Vert Finance website"
        }
    ];

    localStorage.setItem('projectsData', JSON.stringify(jsonProjects));
});

const loadLocalButton = document.getElementById("load-local");

loadLocalButton.addEventListener("click", (event) => {
    const projectsData = localStorage.getItem("projectsData");
    const projectList = JSON.parse(projectsData);
    console.log(projectList);
    try {
        projectList.forEach(proj => {
            console.log(proj);
            window.newProject = document.createElement("project-card");
            window.newProject.setAttribute("project-name", proj.project_name);
            window.newProject.setAttribute("description", proj.description);
            window.newProject.setAttribute("image", proj.image);
            window.newProject.setAttribute("image-description", proj.image_description);
            window.newProject.setAttribute("extra-link", proj.extra_link);
            window.newProject.setAttribute("link-name", proj.link_name);
            document.getElementById("gallery").appendChild(window.newProject);
        });

    } catch (error) {
        console.error(error.message);
    }
});

const loadRemoteButton = document.getElementById("load-remote");
loadRemoteButton.addEventListener('click', fetchDataFromRemote);

async function fetchDataFromRemote() {
        const url = "https://api.jsonbin.io/v3/b/67d685018561e97a50ecf3ee";
        try {
          const response = await fetch(url);
          console.log(response);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
      
          const json = await response.json();
          
          json.record.forEach(proj => {
            console.log(proj);
            window.newProject = document.createElement("project-card");
            window.newProject.setAttribute("project-name", proj.project_name);
            window.newProject.setAttribute("description", proj.description);
            window.newProject.setAttribute("image", proj.image);
            window.newProject.setAttribute("image-description", proj.image_description);
            window.newProject.setAttribute("extra-link", proj.extra_link);
            window.newProject.setAttribute("link-name", proj.link_name);
            document.getElementById("gallery").appendChild(window.newProject);
        });
        } catch (error) {
          console.error(error.message);
        }
};