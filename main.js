const intro =
    "Experienced software developer with 3+ years of experience in full-stack development, including android development, deployment, and maintenance, equipped with a diverse and promising skill set, development tools, and procedures. Proven ability to leverage full-stack knowledge and experience to build interactive and user-centered applications at scale. Able to effectively self manage during independent projects as well as collaborate as part of a productive team.";

var languages = [
    "Android",
    "Java",
    "Kotlin",
    "JavaScript",
    "React",
    "Redux",
    "HTML",
    "CSS",
    "PHP",
    "MySQL",
    "NodeJs",
    "Unit Testing",
    "AWS",
    "Firebase",
    "TypeScript",
    "System Design",
];

var tools = [
    "Git & GitHub",
    "Android Studio",
    "WAMP Server",
    "VS Code",
    "IntelliJ",
    "Windows",
    "Linux",
];

var experiences = [
    {
        companyName: "Prosperr.io",
        duration: "Dec 2021 - Current",
        role: "Software Developer",
        intro: "",
        rolesAndResponsibilities: [
            "Developing a robust and scalable <b>FinTech</b> product starting from scratch, Working closely with <b>Co-Founders, Design Teams & Developers</b>.",
            "Supervised, managed and led the the team of 6 peers in the development of a robust software focused in <b>Frontend & REST API Development</b>.",
            "Integrated <b>Google Analytics</b>, managed <b>AWS Amplify</b> for hosting reacts projects with multiple environments, managed domain with <b>Godaddy</b>.",
            "Automated the current process of appointment booking using <b>Google Calendar API</b>.",
            "Build <b>Content Management System</b> for writing articles and blogs for content writers.",
            "Implemented <b>Firebase Push Notification</b> in our website for user engagement.",
            "Setup proper <b>code formatting and management rules</b> by implementing <b>prettier</b> and <b>babel</b>.",
            "<b>Improved code quality</b> by implementing best practices with proper <b>Pull Request</b> Reviews.",
        ],
        tools: "",
    },
    {
        companyName: "Mobcast Innovations",
        duration: "Aug 2021 - Dec 21",
        role: "Full Stack Developer",
        intro: "",
        rolesAndResponsibilities: [
            "Managed to develop and maintain applications of <b>millions of users</b>, communicating with <b>cross functional teams</b> regarding product and design.",
            "Implemented <b>Adobe's Dynamic Tag Manager</b> to track users activities and behaviors by collaborating with <b>Adobe Expert</b> and <b>Marketing Team</b>.",
            "Added features and maintained user facing <b>Android</b> and <b>ReactJs applications</b>.",
            "Managed to <b>Optimize Performance</b> with well documented and readable <b>Clean Codes</b>",
            "Used <b>Redux</b> for state management in react applications.",
        ],
        tools: "",
    },
    {
        companyName: "Fine App",
        duration: "Mar. 2020 - Dec. 2021",
        role: "Founder & Full Stack Developer",
        intro: "<i>A sophisticated online study cum teaching app built to keep studying and teaching alive in lock down restriction due to covid'19 pandemic with all necessary features like online exams & quizzes, video and text materials, online discussions and doubt clearance.</i>",
        rolesAndResponsibilities: [
            "Developed fully functioning Android App Using JAVA & XML, Used Youtube Video Api, Firebase for Notification & Authentication and Rest APIs.",
            "Developed fully functioning Website Using HTML, CSS3, Bootstrap 4.0, JavaScript.",
            "Developed backend part using PHP & MySQL and hosted on Hostinger.",
            "Documented and Deployed Android App on Google Play Store, Also managed to provide new feature update and bug fixing updates.",
            "I was responsible for full lifecycle development of next-generation software from initial requirement gathering to design, coding, testing, documentation.",
        ],
        tools: "Technologies & Tools: Java, JavaScript, PHP, HTML, CSS, Bootstrap, MySQL, Android Studio, XML, Rest API, InkScape, Wamp Server, Firebase, YouTube API",
    },
];

var projects = [
    {
        companyName: "Local Sense",
        duration: "Dec 2019 - Mar 2020",
        role: "Full Stack Developer",
        intro: "A social media app to explore new local places like pro with lots of localized content, news, friends and anything possible online. Same time, You can post your own as well.",
        rolesAndResponsibilities: [
            "Developed fully functioning Android App Using JAVA & XML, Used GPS Manager, Firebase for Notification & Authentication and Rest APIs.",
            "Developed backend part using PHP & MySQL and hosted on Hostinger.",
            "Documented and Deployed Android App on Google Play Store, Provided new feature updates and bug fixing updates getting feedback from end users. ",
        ],
        tools: "Technologies & Tools: Java, PHP, MySQL, Android Studio, XML, Rest API, InkScape, WAMP Server, GPS, Firebase Authentication and Messaging",
    },
    {
        companyName: "AllFit",
        duration: "Oct. 2018 - Dec. 2019",
        role: "Android Developer",
        intro: "A fitness App to practice Yoga, Workouts, Meditation and Brain Game at home without any special equipments and keep tracks of previous records.",
        rolesAndResponsibilities: [
            "Developed fully functioning Android App Using JAVA & XML, Used GPS Manager",
            "Used GPS Manager class to provide speed while running and jogging.",
            "Documented and Deployed Android App on Google Play Store, Continuous Updates after getting feedback with new feature update.",
            "Designed and Developed 3d models and animation in blender 3d",
            "Developed brain games like Anagrams, Colors and Schultz Table to improve focus & concentration and development of speed reading, peripheral vision, attention and visual perception.",
        ],
        tools: "Technologies & Tools: Java, Android Studio, XML, InkScape, Blender3d, GPS",
    },
];

var educations = [
    {
        companyName: "Bachelor of Technology",
        duration: "7.92 CGPA",
        role: "2017-21",
        intro: "",
        rolesAndResponsibilities: [
            "National Institute of Foundry and Forge Technology Ranchi, Jharkhand",
        ],
        tools: "",
    },
];

const renderIntro = () => {
    const introSection = document.getElementById("intro-section");
    const pElement = document.createElement("p");
    pElement.innerText = intro;
    pElement.className = "short-desc";
    introSection.appendChild(pElement);
};

const renderLanguages = () => {
    const parentEle = document.getElementById("skill-set");
    languages.forEach((it) => {
        const liElement = document.createElement("li");
        liElement.innerText = it;
        liElement.className = "skill";
        parentEle.appendChild(liElement);
    });
};

const renderTools = () => {
    const parentEle = document.getElementById("tool-set");
    tools.forEach((it) => {
        const liElement = document.createElement("li");
        liElement.innerText = it;
        liElement.className = "skill";
        parentEle.appendChild(liElement);
    });
};

const renderExperience = (type) => {
    let items = [];
    let parentEle = null;
    if (type === "experiences") {
        parentEle = document.getElementById("experiences");
        items = experiences;
    } else if (type === "projects") {
        parentEle = document.getElementById("projects");
        items = projects;
    } else {
        parentEle = document.getElementById("education");
        items = educations;
    }

    items.forEach((it) => {
        const mainEle = document.createElement("div");
        mainEle.className = "experience";

        const child1 = document.createElement("div");
        child1.className = "flex-row";

        const child11 = document.createElement("h3");
        child11.className = "main-heading";
        child11.innerHTML = "&#x27A4;" + it.companyName + " | " + it.role;
        const child12 = document.createElement("h3");
        child12.className = "main-heading";
        child12.innerText = it.duration;

        child1.appendChild(child11);
        child1.appendChild(child12);

        const introEle = document.createElement("p");
        introEle.className = "about";
        introEle.innerHTML = it.intro;

        const toolsEle = document.createElement("p");
        toolsEle.className = "techs";
        toolsEle.innerHTML = it.tools;

        const child2 = document.createElement("ul");
        child2.className = "roles-n-responsibilities";

        it.rolesAndResponsibilities.forEach((role) => {
            const liElement = document.createElement("li");
            liElement.innerHTML = "&nbsp;" + role;
            child2.appendChild(liElement);
        });
        mainEle.appendChild(child1);
        mainEle.appendChild(introEle);
        mainEle.appendChild(child2);
        mainEle.appendChild(toolsEle);
        parentEle.appendChild(mainEle);
    });
};
