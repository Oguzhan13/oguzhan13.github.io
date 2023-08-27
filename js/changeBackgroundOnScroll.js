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
        const scrollY = window.scrollY;
        let activeSection = "";

        switch (true) {
            case scrollY >= thresholds.about && scrollY < thresholds.skill:
                activeSection = "about";
                break;
            case scrollY >= thresholds.skill && scrollY < thresholds.project:
                activeSection = "skill";
                break;
            case scrollY >= thresholds.project && scrollY < thresholds.education:
                activeSection = "project";
                break;
            case scrollY >= thresholds.education && scrollY < thresholds.career:
                activeSection = "education";
                break;
            case scrollY >= thresholds.career && scrollY < thresholds.contact:
                activeSection = "career";
                break;
            case scrollY >= thresholds.contact:
                activeSection = "contact";
                break;
            default:
                activeSection = "home";
        }
        
        homeBackgroundImg.style.zIndex = activeSection === "home" || activeSection === "about" ? -1 : -2;        
        skillBackgroundImg.style.zIndex = activeSection === "skill" ? -1 : -2;
        projectBackgroundImg.style.zIndex = activeSection === "project" ? -1 : -2;
        educationBackgroundImg.style.zIndex = activeSection === "education" ? -1 : -2;
        careerBackgroundImg.style.zIndex = activeSection === "career" ? -1 : -2;
        contactBackgroundImg.style.zIndex = activeSection === "contact" ? -1 : -2;
    }

    window.addEventListener("scroll", changeBackground);
}
