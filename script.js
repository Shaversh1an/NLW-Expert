const perguntas = [
    {
      pergunta:
        "1. Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      respostas: ["let", "var", "const"],
      correta: 2,
    },
    {
      pergunta: "2. O que é o DOM em JavaScript?",
      respostas: [
        "Data Object Model",
        "Document Object Model",
        "Design Object Model",
      ],
      correta: 1,
    },
    {
      pergunta: "3. Como você comenta uma linha de código em JavaScript?",
      respostas: ["//", "<!-- -->", "/* */"],
      correta: 0,
    },
    {
      pergunta:
        "4. Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: ["append()", "push()", "add()"],
      correta: 1,
    },
    {
      pergunta: "5. O que é o JSON em JavaScript?",
      respostas: [
        "Java Script Object Notation",
        "JavaScript Object Network",
        "Java String Operator Notation",
      ],
      correta: 0,
    },
    {
      pergunta:
        "6. Qual função é usada para converter uma string em um número inteiro em JavaScript?",
      respostas: ["toInt()", "parseInt()", "convertInt()"],
      correta: 1,
    },
    {
      pergunta:
        "7. Em JavaScript, qual operador é usado para verificar igualdade de valor e tipo?",
      respostas: ["==", "===", "="],
      correta: 1,
    },
    {
      pergunta: "8. O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento pelo ID",
        "Seleciona um elemento pelo nome da classe",
        "Seleciona um elemento pelo seletor CSS",
      ],
      correta: 2,
    },
    {
      pergunta:
        "9. Qual é a finalidade do comando 'break' em um loop JavaScript?",
      respostas: [
        "Pular para o próximo loop",
        "Encerrar a execução do loop",
        "Ignorar a condição do loop",
      ],
      correta: 1,
    },
    {
      pergunta: "10. O que é o conceito de 'hoisting' em JavaScript?",
      respostas: ["Elevar uma função", "Elevar uma variável", "Elevar um evento"],
      correta: 1,
    },
  ];
  
  const quiz = document.querySelector("#quiz");
  const template = document.querySelector("template");
  const corretas = new Set();
  const totalDePerguntas = perguntas.length;
  const mostrarTotal = document.querySelector("#acertos span");
  mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
  
  //loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector("h3").textContent = item.pergunta;
  
    for (let respostas of item.respostas) {
      const dt = quizItem.querySelector("dl dt").cloneNode(true);
      dt.querySelector("span").textContent = respostas;
      dt.querySelector("input").setAttribute(
        "name",
        "pergunta-" + perguntas.indexOf(item)
      );
      dt.querySelector("input").value = item.respostas.indexOf(respostas);
      dt.querySelector("input").onchange = (event) => {
        const estaCorreta = event.target.value == item.correta;
        corretas.delete(item);
        if (estaCorreta) {
          corretas.add(item);
        }
  
        mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
      };
  
      quizItem.querySelector("dl").appendChild(dt);
    }
  
    //remove a 'pergunta A'
    quizItem.querySelector("dl dt").remove();
  
    //Coloca as perguntas na tela
    quiz.appendChild(quizItem);
  }
  