const rust = import('./pkg');

async function runAPP() {
    const { add } = await rust;

const elements = {
    result: document.getElementById('result'),
    form: document.getElementById('form'),
}

function updateView({num_1, num_2, result}) {
    elements.result.innerText = `A soma de:  ${num_1} + ${num_2} = ${result}`;
}

    async function calcTwoValues() {

    elements.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(elements.form);
            const num_1 = formData.get('num_1');
            const num_2 = formData.get('num_2');
            const result = add(parseInt(num_1), parseInt(num_2));
            updateView({ num_1, num_2, result });
        })
    };

    calcTwoValues();
}

runAPP();
