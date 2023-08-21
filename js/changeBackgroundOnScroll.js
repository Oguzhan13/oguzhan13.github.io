export function changeBackgroundOnScroll() {
    const homeBackgroundImgId = "home-background-img";    
    const aboutBackgroundImgId = "about-background-img";    
    const skillBackgroundImgId = "skill-background-img";
    const projectBackgroundImgId = "project-background-img";
    const educationBackgroundImgId = "education-background-img";
    const careerBackgroundImgId = "career-background-img";
    const contactBackgroundImgId = "contact-background-img";
    
    const homeBackgroundImg = document.getElementById(homeBackgroundImgId);
    const aboutBackgroundImg = document.getElementById(aboutBackgroundImgId);
    const skillBackgroundImg = document.getElementById(skillBackgroundImgId);
    const projectBackgroundImg = document.getElementById(projectBackgroundImgId);
    const educationBackgroundImg = document.getElementById(educationBackgroundImgId);
    const careerBackgroundImg = document.getElementById(careerBackgroundImgId);
    const contactBackgroundImg = document.getElementById(contactBackgroundImgId);

    const thresholds = {
        home: 0,
        about: document.getElementById('about').offsetTop,
        skill: document.getElementById('skill').offsetTop,
        project: document.getElementById('project').offsetTop,
        education: document.getElementById('education').offsetTop,
        career: document.getElementById('career').offsetTop,
        contact: document.getElementById('contact').offsetTop
    };

    function changeBackground() {
        if (window.scrollY >= thresholds.about && window.scrollY < thresholds.skill) {
            homeBackgroundImg.style.display = "none";
            aboutBackgroundImg.style.display = "block";
        } else if (window.scrollY >= thresholds.skill && window.scrollY < thresholds.project) {
            aboutBackgroundImg.style.display = "none";
            skillBackgroundImg.style.display = "block";
        } else if (window.scrollY >= thresholds.project && window.scrollY < thresholds.education) {
            skillBackgroundImg.style.display = "none";
            projectBackgroundImg.style.display = "block";
        } else if (window.scrollY >= thresholds.education && window.scrollY < thresholds.career) {
            projectBackgroundImg.style.display = "none";
            educationBackgroundImg.style.display = "block";
        } else if (window.scrollY >= thresholds.career && window.scrollY < thresholds.contact) {
            educationBackgroundImg.style.display = "none";
            careerBackgroundImg.style.display = "block";
        } else if (window.scrollY >= thresholds.contact) {
            careerBackgroundImg.style.display = "none";
            contactBackgroundImg.style.display = "block";
        } else {
            homeBackgroundImg.style.display = "block";
            aboutBackgroundImg.style.display = "none";
            skillBackgroundImg.style.display = "none";
            projectBackgroundImg.style.display = "none";
            educationBackgroundImg.style.display = "none";
            careerBackgroundImg.style.display = "none";
            contactBackgroundImg.style.display = "none";
        }
    }

    window.addEventListener("scroll", changeBackground);
}
