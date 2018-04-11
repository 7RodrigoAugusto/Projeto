  function flux(){
      //Create the SVG Viewport
      var svgContainer = d3.select("#fluxograma").append("svg")
                                    .attr("width", 400) //Tamanho total que contém todos os retângulos
                                    .attr("height", 400)
                                    .style("stroke","black");


      var retangulos = []
      var pos_x = 0
      var pos_y = 0
      //Porcentagem de mulheres
      var mulheres_cadeiras = [90,50,60,10,15,20,35,25,37,45]
      var aux_cadeiras = 0


      for (i = 0; i < 5; i++) {
        for(j = 0; j <2; j++) {
          //if participacao feminina > que tanto eu vou mudando
          //a opacidade e tambem as cores envolvidas
          //Se for menor que 50 troca a cor pra verde
          //Add rect to the svgContainer
          if(mulheres_cadeiras[aux_cadeiras]<50){
            //Pinto de verde
            retangulos[i] = svgContainer.append("rect")
                              .attr("x", pos_x)
                              .attr("y", pos_y)
                              .attr("width", 40)
                              .attr("height", 40)
                              .style("fill","green")
                              .style("opacity", ((100-mulheres_cadeiras[aux_cadeiras])/100));//Posso colocar vezes o i para checar as mudancas basicas
            
            var text = svgContainer.selectAll("text")
              .data(retangulos)
              .enter()
              .append("text");

            var textLabels = text
              .text("Oi aaaaaaaaaaaaaaaaaaaa")
              .attr("font-family", "sans-serif")
              .attr("x", pos_x)
              .attr("y", pos_y)
              .attr("font-size", "20px")
              .attr("fill", "red");    

          }
          else{
            retangulos[i] = svgContainer.append("rect")
                              .attr("x", pos_x)
                              .attr("y", pos_y)
                              .attr("width", 40)
                              .attr("height", 40)
                              .style("opacity", ((mulheres_cadeiras[aux_cadeiras])/100))
                              .style("fill","red");

          }
          /*holder.append("text")
                .style("fill", "black")      // make the text black
                .style("writing-mode", "tb") // set the writing mode
                .attr("x", pos_x)         // set x position of left side of text
                .attr("y", pos_y)         // set y position of bottom of text
                .text("A");*/
          aux_cadeiras = aux_cadeiras+1
          pos_y = pos_y+50 
        }
        pos_x = pos_x+50
        pos_y = 0
      }
  }

  flux()
    