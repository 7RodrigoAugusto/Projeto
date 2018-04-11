//<!-- SCRIPT PARA REALIZAR BUSCAS NA PÁGINA-->
// Devo colocar o nome de cada curso aqui
// De acordo com cada search, redireciono para o script d3 que vai gerar uma tabela de acordo com a palavra chave pesquisada.
//var content = cursos;
var content = [
  {
      title: 'Computador e Sociedade',
      description: 'Descrição com a porcentagem de alunos',
      image: "teste.jpg", 
      url: "https://google.com" //Vai dar na url da tabela
    },
  {
      title: 'Introdução à Computação Gráfica',
      description: 'Descrição com a porcentagem de alunos',
      url: "https://google.com"
    }
  ];

$('.ui.search')
  //<!-- apisettings -->
    .search({
      source: content,
});