import init, {  add } from "../pkg/script_wasm.js";

const elements = {
    result: document.getElementById('result'),
    form: document.getElementById('form'),
}

function updateView({num_1, num_2, result}) {
    elements.result.innerText = `A soma de:  ${num_1} + ${num_2} = ${result}`;
}

async function initalize() {
    await init();
    elements.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(elements.form);
        const num_1 = formData.get('num_1');
        const num_2 = formData.get('num_2');
        const result = add(num_1, num_2);
        updateView({ num_1, num_2, result });
    })
};

initalize();
