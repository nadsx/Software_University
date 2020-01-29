function personalBMI(name, age, weight, height) {
    let heightInM = height / 100;
    let bmi = Math.round(weight / heightInM ** 2);
    
    let result = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },     
        BMI: bmi
    };

    let status = (result.BMI < 18.5) ? 
        "underweight" : (result.BMI < 25) ?
        "normal" : (result.BMI < 30) ? 
        "overweight" : "obese";

    result.status = status;

    if (result.BMI >= 30) {
        result.recommendation = "admission required";
    }

    return result;
}

console.log(personalBMI("Peter", 29, 75, 182));
console.log(personalBMI("Honey Boo Boo", 9, 57, 137));