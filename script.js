const answers = [
    "A resposta está dentro de você.",
    "Olhe além do que vê.",
    "Ouça com atenção o som do silêncio e ele lhe dirá.",
    "A resposta está no vento.",
    "Confie no seu instinto.",
    "A verdade está lá fora.",
    "Siga seu coração.",
    "Tudo é possível.",
    "Acredite em você mesmo.",
    "O universo tem um plano.",
    "A resposta virá com o tempo.",
    "A resposta está dentro de você.",
    "Olhe além do que vê.",
    "Ouça com atenção o som do silêncio e ele lhe dirá.",
    "A resposta está no vento.",
    "Confie no seu instinto.",
    "A verdade está lá fora.",
    "Siga seu coração.",
    "Tudo é possível.",
    "Acredite em você mesmo.",
    "O universo tem um plano.",
    "A resposta virá com o tempo.",
    "Tudo acontece por uma razão.",
    "A chave está na simplicidade.",
    "A jornada é mais importante que o destino."
];

function getAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const answer = answers[randomIndex];
    document.getElementById('answer').innerText = answer;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        getAnswer();
    }
}