

function arrayOfAgeWords () {
    let ageNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 28, 19, 20, 50, 100, 152, 737, 1000, 1542, 10000, 14631, 100000 ];
    let ageWords = [];
    browser.url('https://www.calculatorsoup.com/calculators/conversions/numberstowords.php');

    for (let i = 0; i < ageNumber.length; i++ ) {
        $('input[id="number"]').setValue(ageNumber[i]);
        $('input[id="calculateButton"]').click();
        let a = $('div[id="answer"]').getText();
        ageWords.push(a);
    }

    return ageWords;


}
module.exports = arrayOfAgeWords ;

