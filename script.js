
    <script>

    var content = [
        {
            title: 'Computador e Sociedade',
            description: 'Descrição com a porcentagem de alunos',
            image: "teste.jpg", 
            url: "https://google.com"
          },
        {
            title: 'Introdução à Computação Gráfica',
            description: 'Descrição com a porcentagem de alunos',
            url: "https://google.com"
          }
        ];

      $('.ui.search')
        <!-- apisettings -->
          .search({
            source: content,
          })
      ;

      $('.autumn.leaf')
        .transition('drop')
      ;

      </script>