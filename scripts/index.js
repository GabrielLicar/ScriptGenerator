async function generateTextJujutsu() {
  // Pegue o texto dos inputs
  let typequest = document.getElementById("typequest").value;
  let typereward = document.getElementById("typereward").value;
  let caracdialogue = document.getElementById("caracdialogue").value;
  let location = document.getElementById("location").value;

  // Faça uma chamada à API GPT-3 usando o método completions
  const prompt = `local da missao: ${location}\n quero que faça um roteiro para o anime Jujutsu, com os seguintes topicos e utilizando de base o local da missao citado: \nDialogo: nesse topico quero que faça um dialogo para o jogador ler antes de começar a quest, quero algo nem grande, mas tambem nao pequeno quero que tenha um dialogo com os personagens ${caracdialogue} \ntipo da recompensa: ${typereward}(escolha uma das opções) \nrecompensa: escolha uma das recompensas do topico tipo da recompensa e sete uma quantidade \ntipo da quest: ${typequest} escolha uma das opções do topico "tipo da quest" e selecione oque sera feito na missao.`;
  const apiKey = "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";
  const endpoint = "https://api.openai.com/v1/completions";

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 2048,
      n: 1,
      stop: "§",
      temperature: 0.5,
      model: "text-davinci-003"
    })
  });
  const text = await response.json()
  document.getElementById("resposta").innerHTML = `<h1>${text.choices[0].text}</h1>`
}

function generateTextNanatsu() {
    // Pegue o texto do input
    let prompt = document.getElementById("prompt-input").value;

    // Faça uma chamada à API GPT-3 usando o método completions
    openai.completions({
        engine: "text-davinci-002",
        prompt: prompt,
        max_tokens: 2048,
        n: 1,
        stop: "."
    }, function(error, response) {
        // Imprima o texto gerado
        console.log(response.choices[0].text);
    });
}

function generateTextNaruto() {
    // Pegue o texto do input
    let prompt = document.getElementById("prompt-input").value;

    // Faça uma chamada à API GPT-3 usando o método completions
    openai.completions({
        engine: "text-davinci-002",
        prompt: prompt,
        max_tokens: 2048,
        n: 1,
        stop: "."
    }, function(error, response) {
        // Imprima o texto gerado
        console.log(response.choices[0].text);
    });
}

function generateTextSoloLeveling() {
    // Pegue o texto do input
    let prompt = document.getElementById("prompt-input").value;

    // Faça uma chamada à API GPT-3 usando o método completions
    openai.completions({
        engine: "text-davinci-002",
        prompt: prompt,
        max_tokens: 2048,
        n: 1,
        stop: "."
    }, function(error, response) {
        // Imprima o texto gerado
        console.log(response.choices[0].text);
    });
}