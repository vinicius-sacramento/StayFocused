let objetos = [
    {
      id: 1,
      titulo: "Testando nota 1",
      data: "01/01/2021",
      conteudo:
        "No livro 1984 de George Orwell, é retratado um futuro distópico em que um Estado totalitário controla e manipula toda forma de registro histórico e contemporâneo, a fim de moldar a opinião pública a favor dos governantes. Nesse sentido, a narrativa foca na trajetória de Winston, um funcionário do contraditório Ministério da Verdade.",
    },
    {
      id: 2,
      titulo: "Testando nota 2",
      data: "01/01/2021",
      conteudo:
        "“Black Mirror” é uma série americana que retrata a influência da tecnologia no cotidiano de uma sociedade futura. Em um de seus episódios, é apresentado um dispositivo que atua como uma babá eletrônica mais desenvolvida, capaz de selecionar as imagens e sons que os indivíduos poderiam vivenciar.",
    },
    {
      id: 3,
      titulo: "Testando nota 3",
      data: "01/01/2021",
      conteudo:
        "Durante o século XIX, a vinda da Família Real ao Brasil trouxe consigo a modernização do país, com a construção das escolas e universidades. Também, na época, foi inaugurada a primeira escola voltada para a inclusão social de surdos.",
    },
    {
      id: 4,
      titulo: "Testando nota 4",
      data: "01/01/2021",
      conteudo:
        "Apesar de destacar enquanto potência econômica mundial, o Brasil ainda vivencia problemas sociais arcaicos, como a persistência da violência contra a mulher. Diante da gravidade desta questão urge a mobilização conjunta do Estado e da sociedade para seu efetivo combate.",
    },
    {
      id: 5,
      titulo: "Testando nota 5",
      data: "01/01/2021",
      conteudo:
        "A publicidade vem sendo valorizada com a constante globalização, onde o marketing se apropria em atingir diferentes parcelas populacionais. A questão da publicidade infantil vem ganhando destaque no cenário mundial, sendo criticadas suas grandes demandas dirigidas à criança, persuadindo-as em favor do consumismo.",
    },
    {
      id: 6,
      titulo: "Testando nota 6",
      data: "01/01/2021",
      conteudo:
        "Produtos e serviços são necessários a qualquer sociedade. Dentre eles, estão serviços de planos de saúde, financiamento de moradias, compra de roupas e alimentos, entre outros elementos presentes no âmbito social. A publicidade e a propaganda exercem papel essencial na divulgação desses bens",
    },
    {
      id: 7,
      titulo: "Testando nota 7",
      data: "01/01/2021",
      conteudo:
        "A grande preocupação hoje, nas políticas públicas, é propiciar um melhor atendimento integral à criança, principalmente no que se refere ao desenvolvimento moral, social, político e cultural enquanto sujeito ativo e participante dos plenos direitos e deveres na sociedade, conforme as normas declaradas no Estatuto da Criança e do Adolescente (ECA).",
    },
    {
      id: 8,
      titulo: "Testando nota 8",
      data: "01/01/2021",
      conteudo:
        "No final do século XX, o país passou por um período de grande prosperidade econômica que ficou conhecido como “Milagre econômico”. O otimismo gerado por essa conjuntura traduziu-se em uma frase que permanece, até hoje, na cultura popular: “Brasil: o país do futuro”. O  crescente número de imigrantes que buscam terra tupiniquins, porém, revela que talvez o futuro esteja próximo de chegar.",
    },
    {
      id: 9,
      titulo: "Testando nota 9",
      data: "01/01/2021",
      conteudo:
        "“Não serei livre enquanto não houver mulheres que não o são, ainda que minhas algemas sejam bastante diferentes das delas”, Audré Lorde escreveu essa frase para demonstrar que é a favor da igualdade de gênero e que se preocupa com a violência contra a mulher desde o século XIX, as mulheres conquistaram muitos direitos, entre eles o direito de votar e a entrada no mercado de trabalho.",
    },
    {
      id: 10,
      titulo: "Testando nota 10",
      data: "01/01/2021",
      conteudo:
        "O Brasil tem enfrentado, com frequência, problemas sérios e até constrangedores, como os elevados índices de violência, pobreza e corrupção – três mazelas fundamentais que servem para ilustrar uma lista bem mais longa. Porém, mesmo diante dessa triste realidade, boa parte dos brasileiros parece não se constranger – e, talvez, nem se incomodar.",
    },
    {
      id: 11,
      titulo: "Testando nota 11",
      data: "01/01/2021",
      conteudo:
        "Depois de inúmeras mudanças na sociedade, vive-se, hoje, um momento em que há, por parte de muitas pessoas, uma crescente busca pela realização profissional. Para elas, a profissão, muitas vezes, pode ter um grande significado na construção de sua identidade. Há, porém, aquelas pessoas que, sem ter escolha, aceitam qualquer trabalho como forma de sobrevivência, submetendo-se, assim, à desvalorização da sua humanidade.",
    },
    {
      id: 12,
      titulo: "Testando nota 12",
      data: "01/01/202",
      conteudo:
        "Uma característica inerente às sociedades humanas é sempre buscar novas maneiras de se comunicar: cartas, telegramas e telefonemas são apenas alguns dos vários exemplos de meios comunicativos que o homem desenvolveu com base nessa perspectiva. E, atualmente, o mais recente e talvez o mais fascinante desses meios, são as redes virtuais, consagradas pelo uso, que se tornam cada vez mais comuns.",
    },
  ],
  i = objetos.length + 1;

let container = document.getElementById("container-notas");

ExibirObjetos(objetos);

function SalvarNota() {
  document.getElementById("novaNota").innerHTML = "";
  let div = document.getElementById("novaNota");
  let btnCriarNota = document.createElement("button");
  btnCriarNota.className = "criarNota";
  let iconePlus = document.createElement("i");
  iconePlus.className = "fa fa-plus";
  // let paragrafo = document.createElement("p");
  // let texto = document.createTextNode("Criar nota");

  btnCriarNota.addEventListener("click", function () {
    return NovaNota();
  });
  // paragrafo.appendChild(texto);
  btnCriarNota.appendChild(iconePlus);
  // btnCriarNota.appendChild(paragrafo);
  div.appendChild(btnCriarNota);
}

function NovaNota() {
  document.getElementById("novaNota").innerHTML = "";
  let div = document.getElementById("novaNota");

  let divCard = document.createElement("div");
  divCard.className = "novaNotaCard";
  divCard.id = "novaNotaCard";

  let divButton = document.createElement("div");
  divButton.className = "novaNotaButton";
  divButton.id = "novaNotaButton";

  let titulo = document.createElement("input");
  titulo.className = "tituloNota";
  titulo.id = "titulo";
  titulo.maxLength = "30";
  titulo.placeholder = "Entre com o título...";

  let conteudo = document.createElement("textarea");
  conteudo.className = "conteudoNota";
  conteudo.id = "conteudo";
  conteudo.required = true;
  conteudo.maxLength = "300";
  conteudo.resize = "none";
  conteudo.placeholder = "Entre com o conteúdo...";

  divCard.appendChild(titulo);
  divCard.appendChild(conteudo);
  div.appendChild(divCard);

  let btnSalvarNota = document.createElement("button");
  btnSalvarNota.className = "salvarNota";
  btnSalvarNota.addEventListener("click", function () {
    return CriarObjeto();
  });
  let confirmarIcon = document.createElement("i");
  confirmarIcon.className = "fas fa-check";
  let salvarParagrafo = document.createElement("p");
  let salvarTexto = document.createTextNode("Salvar nota");

  let btnCancelarNota = document.createElement("button");
  btnCancelarNota.className = "cancelarNota";
  btnCancelarNota.addEventListener("click", function () {
    return SalvarNota();
  });
  let cancelarIcon = document.createElement("i");
  cancelarIcon.className = "fas fa-times";
  let cancelarParagrafo = document.createElement("p");
  let cancelarTexto = document.createTextNode("Cancelar nota");

  salvarParagrafo.appendChild(salvarTexto);
  btnSalvarNota.appendChild(confirmarIcon);
  btnSalvarNota.appendChild(salvarParagrafo);
  divButton.appendChild(btnSalvarNota);

  cancelarParagrafo.appendChild(cancelarTexto);
  btnCancelarNota.appendChild(cancelarIcon);
  btnCancelarNota.appendChild(cancelarParagrafo);
  divButton.appendChild(btnCancelarNota);

  div.appendChild(divButton);
}

function CriarObjeto() {
  let titulo = document.getElementById("titulo").value;
  let conteudo = document.getElementById("conteudo").value;
  let data = CriaData();
  if (titulo != "" && conteudo != "") {
    let objeto = { id: i, titulo: titulo, data: data, conteudo: conteudo };
    objetos.push(objeto);

    i = i + 1;
    document.getElementById("titulo").value = "";
    document.getElementById("conteudo").value = "";
    return ExibirObjetos(objetos);
  } else if (titulo == "" || conteudo == "") {
    alert("Preencha todos os campos, eles são obrigatórios.");
  }
}

function ExibirObjetos(lista) {
  container.innerHTML = "";
  lista.forEach((objeto) => {
    let novaDiv = document.createElement("div");
    novaDiv.className = "card-nota";

    let novoTitulo = document.createElement("h1");
    novoTitulo.className = "titulo-card";
    let titulo = document.createTextNode(objeto.titulo);

    let novaData = document.createElement("p");
    novaData.className = "data-card";
    let data = document.createTextNode(objeto.data);

    let novoConteudo = document.createElement("p");
    novoConteudo.className = "conteudo-card";
    let conteudo = document.createTextNode(objeto.conteudo);

    let iconeLixeira = document.createElement("i");
    iconeLixeira.className = "fa fa-trash";

    let iconeEditar = document.createElement("i");
    iconeEditar.className = "far fa-edit";

    iconeEditar.addEventListener("click", function () {
      return EditarNota(objeto.id);
    });

    iconeLixeira.addEventListener("click", function () {
      return DeletaNota(objeto.id);
    });

    novoTitulo.appendChild(titulo);
    novaData.appendChild(data);
    novoConteudo.appendChild(conteudo);

    novaDiv.appendChild(novoTitulo);
    novaDiv.appendChild(novaData);
    novaDiv.appendChild(novoConteudo);

    novaDiv.appendChild(iconeEditar);
    novaDiv.appendChild(iconeLixeira);

    container.appendChild(novaDiv);

    return SalvarNota();
  });
}

// function DeleteItem(id) {
//   for (objeto in objetos){
//     if(objetos[objeto].id == id){
//       objetos.splice(objeto, 1)
//     }
//   }
//   ExibirObjetos();
// }

// function DeleteItem(id) {
//   objetos.forEach((objeto, i) => {
//     if (objeto.id == id) {
//       objetos.splice(i, 1);
//     }
//   });
//   ExibirObjetos();
// }

function DeletaNota(id) {
  objetos = objetos.filter((objeto) => objeto.id !== id);
  ExibirObjetos(objetos);
}

function BuscarNota() {
  conteudoBusca = document.getElementById("busca-nota").value;
  console.log(conteudoBusca);
  itensEncontrados = [];

  buscaItens = objetos.filter((objeto) => {
    if (
      objeto.conteudo
        .toLocaleLowerCase()
        .indexOf(conteudoBusca.toLocaleLowerCase()) !== -1 ||
      objeto.titulo
        .toLocaleLowerCase()
        .indexOf(conteudoBusca.toLocaleLowerCase()) !== -1
    ) {
      itensEncontrados.push(objeto);
    }
  });

  ExibirObjetos(itensEncontrados);

  // objetos.forEach((objeto) => {
  //   if (objeto.conteudo.toLocaleLowerCase().indexOf(conteudoBusca.toLocaleLowerCase()) != -1){
  //     itensEncontrados.push(objeto);
  //   }
  // });
}

function CriaData() {
  let data = new Date();

  let dia = data.getDate();
  let mes = data.getMonth();
  mes = mes + 1;
  let ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
}

function EditarNota(id) {
  objetoEditar = objetos.filter((objeto) => objeto.id == id);
  ExibirObjetos(objetos.filter((objeto) => objeto.id != id));

  objetoEditar = objetoEditar[0];

  document.getElementById("novaNota").innerHTML = "";
  let div = document.getElementById("novaNota");

  let divCard = document.createElement("div");
  divCard.className = "novaNotaCard";
  divCard.id = "novaNotaCard";

  let divButton = document.createElement("div");
  divButton.className = "novaNotaButton";
  divButton.id = "novaNotaButton";

  let titulo = document.createElement("input");
  titulo.value = objetoEditar.titulo;
  titulo.className = "tituloNota";
  titulo.id = "titulo";
  titulo.maxLength = "30";
  titulo.placeholder = "Entre com o título...";

  let conteudo = document.createElement("textarea");
  conteudo.value = objetoEditar.conteudo;
  conteudo.className = "conteudoNota";
  conteudo.id = "conteudo";
  conteudo.required = true;
  conteudo.maxLength = "300";
  conteudo.resize = "none";
  conteudo.placeholder = "Entre com o conteúdo...";

  divCard.appendChild(titulo);
  divCard.appendChild(conteudo);
  div.appendChild(divCard);

  let btnSalvarNota = document.createElement("button");
  btnSalvarNota.className = "salvarNota";

  btnSalvarNota.addEventListener("click", function () {
    titulo = document.getElementById("titulo").value;
    conteudo = document.getElementById("conteudo").value;

    objetoEditar.titulo = titulo;
    objetoEditar.conteudo = conteudo;

    return ExibirObjetos(objetos);
  });

  let confirmarIcon = document.createElement("i");
  confirmarIcon.className = "fas fa-check";
  let salvarParagrafo = document.createElement("p");
  let salvarTexto = document.createTextNode("Salvar nota");

  let btnCancelarNota = document.createElement("button");
  btnCancelarNota.className = "cancelarNota";
  btnCancelarNota.addEventListener("click", function () {
    SalvarNota();
    return ExibirObjetos(objetos)
  });
  let cancelarIcon = document.createElement("i");
  cancelarIcon.className = "fas fa-times";
  let cancelarParagrafo = document.createElement("p");
  let cancelarTexto = document.createTextNode("Cancelar nota");

  salvarParagrafo.appendChild(salvarTexto);
  btnSalvarNota.appendChild(confirmarIcon);
  btnSalvarNota.appendChild(salvarParagrafo);
  divButton.appendChild(btnSalvarNota);

  cancelarParagrafo.appendChild(cancelarTexto);
  btnCancelarNota.appendChild(cancelarIcon);
  btnCancelarNota.appendChild(cancelarParagrafo);
  divButton.appendChild(btnCancelarNota);

  div.appendChild(divButton);
}