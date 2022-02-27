var fs = require('fs');

// From: https://stackoverflow.com/questions/24523532/how-do-i-convert-an-image-to-a-base64-encoded-data-url-in-sails-js-or-generally
function base64_encode (file) {
    // Return file as a base64 encoded string
    return fs.readFileSync(file, 'base64');
}

exports.getProfessionalData = (req, res, next) => {
    res
        .status(200)
        .json({
            professionalName: "David Doria",
            nameLink: {
                firstName: "David",
                url: "https://www.linkedin.com/in/david-doria/"
            },
            primaryDescription: "A computer science student at Brigham Young University - Idaho",
            workDescription1: "Is a full time student at Brigham Young University - Idaho",
            workDescription2: "Does not have a job currently, but is looking for an internship",
            linkTitleText: "David Doria",
            linkedInLink: {
                text: "David's LinkedIn",
                link: "https://www.linkedin.com/in/david-doria/"
            },
            githubLink: {
                text: "David's Github",
                link: "https://github.com/Skhoooler"
            },
            base64Image: base64_encode('res\\image.jpg')
        });
};