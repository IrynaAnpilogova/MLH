const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const findTextAge= require ('../../helpers/findTextAge.js');
const inputValues3 = require ('../../helpers/inputValues3.js');
const inputValues4 = require ('../../helpers/inputValues4.js');
const arrayOfNumbers = require ('../../helpers/arrayOfAgeWords.js');
const checkUpperCase = require ('../../helpers/checkUpperCase.js');
const inputValues5Create = require('../../helpers/inputValues5Create.js');
const inputValues5CreatePNG = require('../../helpers/inputValues5CreatePNG.js');
const path = require('path');


describe('Checking the main functionality', function () {

    // describe('Name', function () {
    //
    //         it('TC-028 Input letters inn the name field', function () {
    //             browser.url('');
    //             $(sel.name).setValue('Anna');
    //             const value = $(sel.name).getValue();
    //             expect(value).toEqual('Anna');
    //         });
    //
    //         it('TC-029 Input numbers in name field', function (){
    //             browser.url('');
    //             $(sel.name).setValue('123456789');
    //             const value = $(sel.name).getValue();
    //             expect(value).toEqual('123456789');
    //         });
    //
    //
    // });
    //
    // describe('Gender', function () {
    //
    //
    //     it('TC-030 Gender he', function () {
    //         browser.url('');
    //         const inputGender = $$(sel.gender)[0].click();
    //         const text = $$(sel.gender)[0].getAttribute('class');
    //         expect(text).toEqual(exp.genderChoice)
    //
    //     });
    //
    //     it('TC-031 Gender she', function () {
    //         browser.url('');
    //         const inputGender = $$(sel.gender)[1].click();
    //         const text = $$(sel.gender)[1].getAttribute('class');
    //         expect(text).toEqual(exp.genderChoice)
    //
    //     });
    //
    //     it('TC-032 Gender it', function () {
    //         browser.url('');
    //         const inputGender = $$(sel.gender)[2].click();
    //         const text = $$(sel.gender)[2].getAttribute('class');
    //         expect(text).toEqual(exp.genderChoice)
    //
    //     });
    //
    //     it('TC-033 Make sure the radiobutton works correct', function () {
    //         browser.url('');
    //         const inputGender1 = $$(sel.gender)[0].click();
    //         const inputGender2 = $$(sel.gender)[1].click();
    //         const inputGender3 = $$(sel.gender)[2].click();
    //         const text = $$(sel.gender)[2].getAttribute('class');
    //         expect(text).toEqual(exp.genderChoice)
    //
    //     });
    //
    // });
    //
    // describe('Age', function () {
    //
    //     it('TC-034 Input age', function () {
    //         browser.url('');
    //         $(sel.age).setValue('12345');
    //         const value = $(sel.age).getValue();
    //         expect(value).toEqual('12345');
    //     });
    //
    //
    //     it('TC-035 After input age spinner Down is present ', function () {
    //         browser.url('');
    //         $(sel.age).click();
    //         browser.pause(3000);
    //         const label = $(sel.ageSpinnerDown).isDisplayed();
    //         expect(label).toEqual(true);
    //
    //     });
    //
    //     it('TC-037 After input age spinner Up is present ', function () {
    //         browser.url('');
    //         $(sel.age).click();
    //         browser.pause(3000);
    //         const label = $(sel.ageSpinnerUp).isDisplayed();
    //         expect(label).toEqual(true);
    //
    //     });
    //
    //     it('TC-038 After click at spinner Up the input number is increased by 1 ', function () {
    //         browser.url('');
    //         $(sel.age).setValue('12');
    //         browser.pause(1000);
    //         $(sel.ageSpinnerUp).click();
    //         browser.pause(1000);
    //         const value = $(sel.age).getValue();
    //         expect(value).toEqual('13');
    //
    //     });
    //
    //     it('TC-039 After click at spinner Down the input number is decreased by 1 ', function () {
    //         browser.url('');
    //         $(sel.age).setValue('12');
    //         browser.pause(3000);
    //         $(sel.ageSpinnerDown).click();
    //         const value = $(sel.age).getValue();
    //         expect(value).toEqual('11');
    //
    //     });
    //
    // });
    //
    // describe('Story', function () {
    //
    //     it('TC-040 Choose a story', function () {
    //         const click = $(sel.storyClick).click();
    //         const inputStory = $$(sel.storyType)[0].click();
    //         const value = $$(sel.storyType)[0].getAttribute('title');
    //         expect(value).toEqual(exp.story0);
    //     });
    //
    //     it('TC-041 Choose a story', function () {
    //         const click = $(sel.storyClick).click();
    //         const inputStory = $$(sel.storyType)[1].click();
    //         const value = $$(sel.storyType)[1].getAttribute('title');
    //         expect(value).toEqual(exp.story1);
    //     });
    //
    //     it('TC-042 Choose a story', function () {
    //         const click = $(sel.storyClick).click();
    //         const inputStory = $$(sel.storyType)[2].click();
    //         const value = $$(sel.storyType)[2].getAttribute('title');
    //         expect(value).toEqual(exp.story2);
    //     });
    //
    //     it('TC-043 Choose a story', function () {
    //         const click = $(sel.storyClick).click();
    //         const inputStory = $$(sel.storyType)[3].click();
    //         const value = $$(sel.storyType)[3].getAttribute('title');
    //         expect(value).toEqual(exp.story3);
    //     });
    //
    //     it('TC-044 Choose a story', function () {
    //         const click = $(sel.storyClick).click();
    //         const inputStory = $$(sel.storyType)[4].click();
    //         const value = $$(sel.storyType)[4].getAttribute('title');
    //         expect(value).toEqual(exp.story4);
    //     });
    //
    //     it('TC-045 Choose a story', function () {
    //         const click = $(sel.storyClick).click();
    //         const inputStory = $$(sel.storyType)[5].click();
    //         const value = $$(sel.storyType)[5].getAttribute('title');
    //         expect(value).toEqual(exp.story5);
    //     });
    //
    //     it('TC-046 Choose a story', function () {
    //         const click = $(sel.storyClick).click();
    //         const inputStory = $$(sel.storyType)[6].click();
    //         const value = $$(sel.storyType)[6].getAttribute('title');
    //         expect(value).toEqual(exp.story6);
    //     });
    //
    // });
    //
    //
    //
    // describe('Create button', function () {
    //
    //     it('TC-047 Create button is disabled when you open the application', function () {
    //         browser.url('');
    //         const create = $(sel.create).isEnabled();
    //         expect(create).toEqual(false);
    //     });
    //
    //
    //     it('TC-048 Create button is clickable after 1-4 are filled in', function () {
    //         browser.url('');
    //         inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy);
    //         const create = $(sel.create).isEnabled();
    //         expect(create).toEqual(true);
    //     });
    //
    //     it('TC-049 gender he is working', function () {
    //         browser.url('');
    //         inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
    //         $(sel.create).click();
    //         const btn = $(sel.tryAgain).isDisplayed();
    //         expect(btn).toEqual(true);
    //     });
    //
    //
    //     it('TC-050 After submit button is clicked the story is present on the same page', function () {
    //             browser.url('');
    //             inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
    //             $(sel.create).click();
    //             browser.pause(3000);
    //             const text = $(sel.storyToRead).isDisplayed()
    //             expect(text).toEqual(true);
    //     });
    //
    //
    // });
    //
    //
    describe('Story to read', function () {


            // it('TC-051 The Hero\'s name in the name of the story is the same Name' , function () {
            //     browser.url('');
            //     const inputName = $(sel.name).setValue("Anna");
            //     const name = $(sel.name).getValue();
            //     inputValues3( data.gender.he, data.age, data.storyType.Comedy);
            //     $(sel.create).click();
            //     browser.pause(3000);
            //     const story =$(sel.storyName).getText();
            //     const text = story.includes(name);
            //     expect(text).toEqual(true);
            // });
            //
            // it('TC-052 The Hero\'s name in the story is the same Name' , function () {
            //     browser.url('');
            //     const inputName = $(sel.name).setValue("muffin man");
            //     const name = $(sel.name).getValue();
            //     inputValues3( data.gender.he, data.age, data.storyType.Comedy);
            //     $(sel.create).click();
            //     browser.pause(3000);
            //     const story =$(sel.storyToRead).getText();
            //     const text = story.includes(name);
            //     expect(text).toEqual(true);
            // });
            //
            // it('TC-053 If Hero\'s name is written in lowercase it capitalized in story if the sentence starts with it' , function () {
            //     browser.url('');
            //     const inputName = $(sel.name).setValue("muffin man");
            //     inputValues3( data.gender.he, data.age, data.storyType.Comedy);
            //     $(sel.create).click();
            //     browser.pause(1000);
            //     const story =$(sel.storyToRead).getText();
            //     const res = checkUpperCase(story);
            //     expect(res).toEqual(true);
            //
            // });
            //
            //
            // it('TC-054 Story has "Try again" button', function () {
            //     browser.url('');
            //     inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
            //     $(sel.create).click();
            //     browser.pause(3000);
            //     const label = $(sel.tryAgain).isDisplayed()
            //     expect(label).toEqual(true);
            // });
            //
            // it('TC-055  "Try again" button" is always active"', function () {
            //     browser.url('');
            //     inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
            //     $(sel.create).click();
            //     browser.pause(3000);
            //     const label = $(sel.tryAgain).isEnabled()
            //     expect(label).toEqual(true);
            // });
            //
            // it('TC-056 Verify that the page is refreshing when the button "Try again!" is clicked' , function () {
            //     browser.url('');
            //     inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
            //     $(sel.create).click();
            //     browser.pause(3000);
            //     $(sel.tryAgain).click();
            //     const label = $(sel.create).isDisplayed();
            //     expect(label).toEqual(true);
            //
            // });

            it('TC-097 Verify that the story has the image if it was uploaded', function () {
                browser.url('');
                inputValues5Create(data.name, data.gender.she, data.age, data.storyType.Comedy);
                const img = $(sel.uploadedImage).isDisplayed();
                expect(img).toEqual(true); // true
            });

            it('TC-098 Verify that the story has no image when the image was not uploaded', function () {
                browser.url('');
                inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy);
                const img = $(sel.uploadedImage).isDisplayed();
                expect(img).toEqual(false); // true
            });



            it('TC-100 Verify that the uploaded image is placed in the top right corner', function () {
                browser.url('');
                inputValues5Create(data.name, data.gender.she, data.age, data.storyType.Comedy);
                const location = $(sel.uploadedImage).getLocation();
                const xy = "674";
                expect(location).toEqual(xy);
            });


            it('TC-168 Verify that the age is shown in words', function () {
                browser.url('');
                for (let i = 0; i < data.checkAge.length; i++) {
                    inputValues5Create(data.name, data.gender.she, data.checkAge[i], data.storyType.Comedy);
                    let textAge = findTextAge();
                    expect(textAge).toEqual(exp.arrayOfAgeWords[i]);
                    $('sel.tryAgain').click();
                }

            });







    });


    xdescribe('Image section', function () {

            it('TC-062 Label for Image', function () {
                browser.url('https://qa-apps.netlify.app/app_my_hero');
                const label = $$(sel.label)[4].isDisplayed();
                expect(label).toEqual(true);
            });
            it('TC-063 Label for Image = 5. Upload an image (optional).', function () {
                const text = $$(sel.label)[4].getAttribute('textContent');
                expect(text).toEqual(exp.labelImage);
            });
            it('TC-064 File input field is present', function () {
                const input = $(sel.fileInput).isDisplayed();
                expect(input).toEqual(true);
            });
            it('TC-064.1 File input field has square shape', function () {
                const field = $(sel.fileInput);
                const width = field.getSize('width')
                const height = field.getSize('height')
                expect(width === height).toEqual(true);
            });
            it('TC-065 Placeholder for file input field = drag and drop your image here or browse', function () {
                const text = $(sel.fileInput).getText();
                expect(text).toEqual(exp.fileInputPlaceholder);
            });
            it('TC-068 Verify that image upload is optional', function () {
                browser.url('https://qa-apps.netlify.app/app_my_hero');
                inputValues4(data.name, data.gender.she, data.age, data.storyType);
                const clickCreate = $(sel.create).isEnabled();
                expect(clickCreate).toEqual(true);
            });
            it('TC-069 Verify that user can upload an JPEG(JPG) image', function () {
                browser.url('');
                inputValues5Create(data.name, data.gender.she, data.age, data.storyType);
                const img = $(sel.uploadedImage).isDisplayed();
                expect(img).toEqual(true); // true
            });
            it('TC-070 Verify that user can upload an PNG image', function () {
                browser.url('');
                inputValues5CreatePNG(data.name, data.gender.she, data.age, data.storyType);
                const img = $(sel.uploadedImage).isDisplayed();
                expect(img).toEqual(true); // true
            });
            it('TC-071 Verify that uploaded image is shown with max side = 500px', function () {
                browser.url('');
                inputValues5Create(data.name, data.gender.she, data.age, data.storyType);
                const img = $(sel.uploadedImage);
                const width = img.getSize('width')
                expect(width === 500).toEqual(true); // false
                // expect(width === 200).toEqual(true); // true
            });

    });


});

