# 🏋️‍♂️ IFit Academia — Site Institucional + Calculadora de IMC

Este projeto foi desenvolvido para o cliente **IFit Academia**, com o objetivo de criar um **site institucional simples**, moderno e funcional, contendo informações essenciais para alunos e visitantes.
Além de apresentar dados sobre planos, horários e localização, o sistema conta com uma ferramenta interativa: uma **Calculadora de IMC** (Índice de Massa Corporal), capaz de informar o resultado e sua classificação segundo as diretrizes da OMS.

---

## 🚀 Funcionalidades

### 📌 Informações Institucionais

O site exibe de forma clara e organizada:

* Planos disponíveis (mensal, trimestral, semestral etc.);
* Modalidades oferecidas (musculação, aeróbica, funcional, etc.);
* Benefícios inclusos em cada plano;
* Dias e horários de funcionamento da academia;
* Localização completa.

### 📊 Calculadora de IMC

Ferramenta interativa onde o usuário pode:

* Inserir **peso (kg)** e **altura (m)**;
* Calcular automaticamente o **IMC** com a fórmula:

```
IMC = peso / (altura * altura)
```

* Obter a classificação segundo a OMS:

  * **Abaixo do peso**
  * **Peso normal**
  * **Sobrepeso**
  * **Obesidade**

### ⚠️ Tratamento de Erros

O sistema valida automaticamente:

* Peso menor ou igual a zero;
* Altura menor ou igual a zero;

E exibe mensagens amigáveis ao usuário caso ocorra alguma entrada inválida.

---

## 🧠 Tecnologias Utilizadas

* **HTML5** → Estrutura do site
* **CSS3** → Estilização e layout responsivo
* **JavaScript** → Lógica da calculadora de IMC e validações

---

## 📁 Estrutura do Projeto

```
IFit-Academia/
│── index.html
│── style.css
│── script.js
└── README.md
```

---

## ▶️ Como Executar o Projeto

1. Baixe ou clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/ifit-academia.git
   ```
2. Abra o arquivo **index.html** em qualquer navegador moderno.

Não é necessário servidor ou instalação de dependências.

---

## 📷 Demonstração

*(Adicione aqui prints futuramente, se desejar)*

---

## 📌 Autor

Desenvolvido por **codelbybel** 💻
Projeto criado como parte de um portfólio/atividade prática para demonstrar habilidades em desenvolvimento web.

---

## 📜 Licença

Este projeto está sob a licença MIT — fique à vontade para usar e modificar.
