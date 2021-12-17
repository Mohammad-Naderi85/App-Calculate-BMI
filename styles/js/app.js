// Variables
const forms = document.querySelector('#forms');

const output = document.querySelector('#output');

const btnSubmit = document.querySelector('.btn-submit');

// EventListeners
const eventListeners = () => {
    // Submit Forms
    forms.addEventListener('submit', submitForm);
}
eventListeners();


// Functions

// Submit Forms
function submitForm(e) {
    e.preventDefault();
    
    // Access To The Field Height
    let fieldHeight = parseInt(document.querySelector('.fieldHeight').value);
    // Access To The Field Weight
    let fieldWeight = parseInt(document.querySelector('.fieldWeight').value);    
    
    
    setTimeout(() => {
        btnSubmit.textContent = 'محاسبه';
        
        setTimeout(() => {
            output.style.display = 'block';
            
        }, 0);
    }, 3000);


    // Calculate BMI
    let bmi = (fieldWeight / ((fieldHeight * fieldHeight) / 10000)).toFixed(1);

        if (bmi < 18.6) {
            output.innerHTML = `
                شاخص توده بدنی شما: <span>${bmi}</span> <br> <br>
                        شما کاهش وزن دارید
            `
        } else if(bmi >= 18.7 && bmi <= 24.9) {
            output.innerHTML = `
                شاخص توده بدنی شما: <span><strong>${bmi}</strong></span> <br> <br>
                            وزن شما معمولی است
            `
        } else if(bmi >= 25 && bmi <= 29.9) {
            output.innerHTML = `
                شاخص توده بدنی شما: <span><strong>${bmi}</strong></span> <br> <br>
                                    وزن شما بالا است
            `
        } else if(bmi >= 30 && bmi <= 34.9) {
            output.innerHTML = `
                شاخص توده بدنی شما: <span><strong>${bmi}</strong></span> <br> <br>
                            شما اضافه وزن دارید
            `
        } else if(bmi < 35) {
            output.innerHTML = `
                شاخص توده بدنی شما: <span><strong>${bmi}</strong></span> <br> <br>
                            شما چاقید
            `
        }
    
    btnSubmit.textContent = 'در حال محاسبه ...';
    // Remove Output after 10 Seconds
    setTimeout(() => {
        output.style.display = 'none'
    }, 10000);

    setTimeout(() => {
        this.reset();
    }, 1000);

}