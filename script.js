document.getElementById('calorie-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Coletar dados do formulário
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);
    const goal = document.getElementById('goal').value;

    // Calcular Taxa Metabólica Basal (TMB)
    let tmb;
    if (gender === 'male') {
        tmb = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        tmb = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Calcular Gasto Energético Total (GET)
    const get = tmb * activity;

    // Ajustar calorias com base no objetivo
    let calories;
    if (goal === 'lose') {
        calories = get - 500; // Deficit de 500 calorias para emagrecer
    } else if (goal === 'maintain') {
        calories = get; // Manter o peso
    } else if (goal === 'gain') {
        calories = get + 500; // Superávit de 500 calorias para ganhar massa
    }

    // Exibir resultado
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>Taxa Metabólica Basal (TMB): ${tmb.toFixed(2)} calorias/dia</p>
        <p>Gasto Energético Total (GET): ${get.toFixed(2)} calorias/dia</p>
        <p>Calorias recomendadas para o seu objetivo: ${calories.toFixed(2)} calorias/dia</p>
    `;
});