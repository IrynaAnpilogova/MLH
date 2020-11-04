const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('Checking the main functionality', function () {

    describe('Name', function () {

        it('TC-028 Input letters inn the name field', function () {
            browser.url('');
            const input = $(sel.name).setValue('Anna');
            const value = $(sel.name).getValue();

            expect(value).toEqual('Anna');
        });

        it('TC-029 Input numbers in name field', function (){
            browser.url('');
            const input = $(sel.name).setValue('123456789');
            const value = $(sel.name).getValue();

            expect(value).toEqual('123456789');
        });


    });

    describe('Gender', function () {


        it('TC-030 Gender he', function () {
            browser.url('');
            const inputGender = $$(sel.gender)[0].click();
            const text = $$(sel.gender)[0].getAttribute('class');
            expect(text).toEqual(exp.genderChoice)

        });

        it('TC-031 Gender she', function () {
            browser.url('');
            const inputGender = $$(sel.gender)[1].click();
            const text = $$(sel.gender)[1].getAttribute('class');
            expect(text).toEqual(exp.genderChoice)

        });

        it('TC-032 Gender it', function () {
            browser.url('');
            const inputGender = $$(sel.gender)[2].click();
            const text = $$(sel.gender)[2].getAttribute('class');
            expect(text).toEqual(exp.genderChoice)

        });

        it('TC-033 Make sure the radiobutton works correct', function () {
            browser.url('');
            const inputGender1 = $$(sel.gender)[0].click();
            const inputGender2 = $$(sel.gender)[1].click();
            const inputGender3 = $$(sel.gender)[2].click();
            const text = $$(sel.gender)[2].getAttribute('class');
            expect(text).toEqual(exp.genderChoice)

        });

    });

    describe('Age', function () {

        it('TC-034 Input age', function () {
            browser.url('');
            const input = $(sel.age).setValue('12345');
            const value = $(sel.age).getValue();
            expect(value).toEqual('12345');
        });


        it('TC-035 After input age spinner Down is present ', function () {
            browser.url('');
            const clickAge = $(sel.age).click();
            // browser.pause(1000);
            const label = $(sel.ageSpinnerDown).isDisplayed();
            expect(label).toEqual(true);

        });

        it('TC-037 After input age spinner Up is present ', function () {
            browser.url('');
            const clickAge = $(sel.age).click();
            browser.pause(3000);
            const label = $(sel.ageSpinnerUp).isDisplayed();
            expect(label).toEqual(true);

        });

        it('TC-038 After click at spinner Up the input number is increased by 1 ', function () {
            browser.url('');
            const input = $(sel.age).setValue('12');
            browser.pause(3000);
            $(sel.ageSpinnerUp).click();
            const value = $(sel.age).getValue();
            expect(value).toEqual('13');

        });

        it('TC-039 After click at spinner Down the input number is decreased by 1 ', function () {
            browser.url('');
            const input = $(sel.age).setValue('12');
            browser.pause(3000);
            $(sel.ageSpinnerDown).click();
            const value = $(sel.age).getValue();
            expect(value).toEqual('11');

        });

    });

    describe('Story', function () {

        it('TC-040 Choose a story', function () {
            const click = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[0].click();
            const value = $$(sel.storyType)[0].getAttribute('title');
            expect(value).toEqual(exp.story0);
        });

        it('TC-041 Choose a story', function () {
            const click = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[1].click();
            const value = $$(sel.storyType)[1].getAttribute('title');
            expect(value).toEqual(exp.story1);
        });

        it('TC-042 Choose a story', function () {
            const click = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[2].click();
            const value = $$(sel.storyType)[2].getAttribute('title');
            expect(value).toEqual(exp.story2);
        });

        it('TC-043 Choose a story', function () {
            const click = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[3].click();
            const value = $$(sel.storyType)[3].getAttribute('title');
            expect(value).toEqual(exp.story3);
        });

        it('TC-044 Choose a story', function () {
            const click = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[4].click();
            const value = $$(sel.storyType)[4].getAttribute('title');
            expect(value).toEqual(exp.story4);
        });

        it('TC-045 Choose a story', function () {
            const click = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[5].click();
            const value = $$(sel.storyType)[5].getAttribute('title');
            expect(value).toEqual(exp.story5);
        });

        it('TC-046 Choose a story', function () {
            const click = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[6].click();
            const value = $$(sel.storyType)[6].getAttribute('title');
            expect(value).toEqual(exp.story6);
        });

    });



    describe('Create button', function () {

        it('TC-047 Create button is disabled when you open the application', function () {
            browser.url('');
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(false);
        });


        it('TC-048 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            const inputName = $(sel.name).setValue("LadyBug");
            const inputGender = $$(sel.gender)[1].click();
            const inputAge = $(sel.age).setValue(123);
            const click = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[6].click();
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(true);
        });

        it('TC-049 After submit button is clicked the story is present on the same page', function () {
            browser.url('');
            const inputName = $(sel.name).setValue("LadyBug");
            const inputGender = $$(sel.gender)[1].click();
            const inputAge = $(sel.age).setValue(123);
            const click = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[6].click();
            $(sel.create).click();
            browser.pause(3000);
            const text = $(sel.storyToRead).isDisplayed()
            expect(text).toEqual(true);
        });


    });


    describe('Story to read', function () {


        it('TC-050 The Hero\'s name in the name of the story is the same Name' , function () {
            browser.url('');
            const inputName = $(sel.name).setValue("Anna");
            const name = $(sel.name).getValue();
            const inputGender = $$(sel.gender)[1].click();
            const inputAge = $(sel.age).setValue(125);
            const click = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[6].click();
            $(sel.create).click();
            browser.pause(3000);
            const story =$(sel.storyToRead).getText();
            const text = story.includes(name);
            expect(text).toEqual(true);
        });
    });



});