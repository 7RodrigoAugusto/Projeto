/* FUNÇÃO que coloca o arquivo CSV na página*/
//Abrir o arquivo CSV disponibilizado
d3.csv("/CSV/DisciplinaAlunoAprovacao.csv", function(error, data){//Defino a variavel como data
  if(error) console.log("Error: data not loaded!");
  //console.log(data)
  //Capturo todas as medias
  data.forEach(function(d){
    //This above statement turns all your column1 values into an integer (the + sign in front of d.column1 coerces the type to a Number).
    d.media_final = +d.media_final;
  });

  //Pega o maior valor do array de medias
  //var max = d3.max(data, function(d) { return d.media_final; });
  //console.log(max)
  //Pega o menor valor do array de medias
  //var min = d3.min(data, function(d) { return d.media_final; });

  // Conta a quantidade de vezes que cada genero ocorre na lista e guarda em countObj
  data.forEach(function(d) {
    var genero = d.sexo;
    if(countObj[genero] === undefined) {
      countObj[genero] = 0;
    } else {
      countObj[genero] = countObj[genero] + 1;
    }
  });

  // now store the count in each data member, não entendi muito bem a utilização
  data.forEach(function(d){
    genero = d.sexo;
    d.count = countObj[genero];
    //console.log(d.count)
  });
  
  /*
  var margin = {top: 20, right: 20, bottom: 70, left: 40},
      width = 600 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

  var x = d3.scaleLinear();

  var y = d3.scaleLinear();

  var xAxis = d3.axisBottom(countObj);

  var yAxis = d3.axisLeft(data.sexo);

  var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", 
            "translate(" + margin.left + "," + margin.top + ")");
    
    x.domain(data.map(function(d) { return countObj; }));
    y.domain([0, d3.max(data, function(d) { return d.value; })]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
      .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Value ($)");

    svg.selectAll("bar")
        .data(data)
      .enter().append("rect")
        .style("fill", "steelblue")
        .attr("x", function(d) { return x(d.date); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.value); })
        .attr("height", function(d) { return height - y(d.value); });
        */

}); // Fim do d3.csv


/*d3.csv("/assets/cursos_csv", function(error, data){//Defino a variavel como data
if(error) console.log("Error: data not loaded!");
data.forEach(function(d){
   cursos = +d.curso
    console.log(cursos)
  });
}); */ 