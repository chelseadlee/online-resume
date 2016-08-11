$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

var bio = {
    "name": "Chelsea Lee",
    "role": "Web Developer",
    "contacts": {
        "mobile": "1(206)696-3760",
        "email": "chelsea.d.lee12@gmail.com",
        "github": "http://www.github.com/chelseadlee",
        "location": "Seattle"
    },
    "welcomeMessage": "Hey, I'm Chelsea and I like making websites.",
    "skills": [
        "HTML", "CSS", "JavaScript", "WordPress"
    ],
    "bioPic": "images_src/fry.jpg",
    display: function() {
        // format and replace bio object data
        var headerName = HTMLheaderName.replace("%data%", bio.name);
        var role = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
        // loop through skills array and append to skills section
        var skillsListItems = [];
        for (var i = 0; i < bio.skills.length; i++) {
            skillsListItems.push(HTMLskills.replace("%data%", bio.skills[i]));
        }
        // append formatted bio data
        $("#titleBox").append(headerName);
        $("#titleBox").append(role);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
        $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
        $("#headerMsg").append(formattedMsg);
        $(".column1").append(formattedPic);
        $("#skillsBox").append(HTMLskillsStart);
        $("#skills-ul").append(skillsListItems);
    }
};

bio.display();

var work = {
    "jobs": [{
        "employer": "Boyden global executive search",
        "title": "Research Associate",
        "location": "Seattle",
        "dates": "2016 - Present",
        "description": "Research and contact candidates for executive search clients",
        "url": "http://www.boyden.com"
    }, {
        "employer": "Broadcast Coffee Roasters",
        "title": "Barista",
        "location": "Seattle",
        "dates": "2015 - Present",
        "description": "Drinking coffee professionally",
        "url": "http://www.broadcastcoffee.com"
    }, {
        "employer": "Self-Employed",
        "title": "Web Developer",
        "location": "Seattle",
        "dates": "2015 - Present",
        "description": "Making websites",
        "url": "http://chelsealee.net"
    }, {
        "employer": "ROOTS Young Adult Shelter (AmeriCorps)",
        "title": "Resource Coordinator",
        "location": "Seattle",
        "dates": "2014 - 2015",
        "description": "Cultivated safe space for young adults in homeless shelter program",
        "url": "http://rootsinfo.org"
    }, {
        "employer": "YMCA of the Fox Cities",
        "title": "School Age Site Supervisor",
        "location": "Appleton, WI",
        "dates": "2012 - 2014",
        "description": "Supervised children ages 5-11 in afterschool program",
        "url": "http://www.ymcafoxcities.org"
    }],
    display: function() {
        work.jobs.forEach(function(jobEntry) {
            // create work experience div
            $("#workExperience").append(HTMLworkStart);
            // concat employer & title
            var formattedEmployer = HTMLworkEmployer.replace("%data%", jobEntry.employer).replace("#", jobEntry.url);
            var formattedTitle = HTMLworkTitle.replace("%data%", jobEntry.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            // format and append work object data
            var formattedLocation = HTMLworkLocation.replace("%data%", jobEntry.location);
            var formattedDates = HTMLworkDates.replace("%data%", jobEntry.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", jobEntry.description);
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
        });
    }
};

work.display();

var projects = {
    "projects": [{
        "title": "ROOTS Young Adult Shelter Website",
        "dates": "2015 - 2016",
        "description": "Built website for local nonprofit",
        "url": "http://www.rootsinfo.org",
        "images": ["images_src/197x148.gif"]
    }],
    display: function() {
        projects.projects.forEach(function(project) {
            // create projects div
            $("#projects").append(HTMLprojectStart);
            // format and append projects data to projects section
            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);
            // loop through images array - format and append to section
            if (Array.isArray(project.images)) {
                project.images.forEach(function(image) {
                    var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                    $(".project-entry:last").append(formattedProjectImage);
                });
            }
        });

    }
};

projects.display();

var education = {
    "schools": [{
        "name": "Lawrence University",
        "location": "Appleton, WI",
        "degree": "B.A.",
        "majors": ["Psychology"],
        "dates": "2008 - 2012",
        "url": "http://www.lawrence.edu"
    }],
    "onlineCourses": [{
        "title": "Web Developer Blueprint",
        "school": "SkillCrush",
        "dates": "2014 - 2015",
        "url": "http://www.skillcrush.com"
    }, {
        "title": "Front End Web Development Nanodegree",
        "school": "Udacity",
        "dates": "2016 - Present",
        "url": "http://www.udacity.com"
    }],
    display: function() {
        education.schools.forEach(function(school) {
            // create new div for education
            $("#education").append(HTMLschoolStart);
            // concat name and degree
            var formattedName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedNameDegree = formattedName + formattedDegree;
            // format and append education data to education section
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedNameDegree);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedDates);
            // loop through school majors - format and append to section
            if (Array.isArray(school.majors)) {
                school.majors.forEach(function(major) {
                    var formattedMajors = HTMLschoolMajor.replace("%data%", major);
                    $(".education-entry:last").append(formattedMajors);
                });
            }
        });

        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(onlineClass) {
            // create new div for online courses
            $("#education").append(HTMLschoolStart);
            // concat title and school
            var formattedTitle = HTMLonlineTitle.replace("%data%", onlineClass.title).replace("#", onlineClass.url);
            var formattedSchool = HTMLonlineSchool.replace("%data%", onlineClass.school).replace("#", onlineClass.url);
            var formattedTitleSchool = formattedTitle + formattedSchool;
            // format and append online classes to education section
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineClass.dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineClass.url).replace("#", onlineClass.url);
            $(".education-entry:last").append(formattedTitleSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
        });
    }
};

education.display();

$("#mapDiv").append(googleMap);