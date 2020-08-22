let inputs = [];
let remainingMoney=0;
function submit(){
  let valid_responses=true;
  let val = document.getElementsByClassName("input");
  inputs=[]
  let totalSpending=0;
  for(let i=0; i<val.length;i++){
      let number=parseFloat(val[i].value);
      if (Number.isNaN(number)){
          alert("Invalid Inputs!");
          valid_responses=false;
          break;
      }
      if(i>0){
        totalSpending+=number;
      }
      inputs.push(number);
  }
  if(valid_responses==true){
    remainingMoney=inputs[0]-totalSpending;
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    //  var ctx=document.getElementById("mycanvas").getContext("2d");
    //  var data=[
    //      {
    //          value: inputs[0],
    //          color: "cornflowerblue",
    //          highlight: "lightskyblue",
    //          label: "Housing(%)"
    //      },
    //      {
    //          value: inputs[1],
    //          color: "lightgreen",
    //          highlight: "yellowgreen",
    //          label: "Transportation(%)"
    //      },
    //      {
    //          value: inputs[2],
    //          color: "orange",
    //          highlight: "darkorange",
    //          label: "Food(%)"
    //      },
    //      {
    //          value: inputs[3],
    //          color: "red",
    //          highlight: "blue",
    //          label: "Personal insurance and pension(%)"
    //      },
    //      {
    //          value: inputs[4],
    //          color: "blue",
    //          highlight: "green",
    //          label: "Healthcare(%)"
    //      },
    //      {
    //          value: inputs[5],
    //          color: "green",
    //          highlight: "yellow",
    //          label: "Entertainment(%)"
    //      },
    //      {
    //          value: inputs[6],
    //          color: "yellow",
    //          highlight: "orange",
    //          label: "Other Expenses(%)"
    //      },
    //      {
    //          value: inputs[7],
    //          color: "orange",
    //          highlight: "red",
    //          label: "Cash Contributions(%)"
    //      },
    //      {
    //          value: inputs[8],
    //          color: "purple",
    //          highlight: "yellow",
    //          label: "Apparel and Services(%)"
    //      },
    //      {
    //          value: inputs[9],
    //          color: "brown",
    //          highlight: "green",
    //          label: "Education(%)"
    //      },
    //  ]
    //  var piechart=new Chart(ctx).Pie(data);
  }
}

function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Expenditure', 'Dollars'],
  ['Housing', inputs[1]],
  ['Transportation', inputs[2]],
  ['Food', inputs[3]],
  ['Personal insurance and pension', inputs[4]],
  ['Healthcare', inputs[5]],
  ['Entertainment', inputs[6]],
  ['Other Expenses', inputs[7]],
  ['Cash Contribution', inputs[8]],
  ['Apparel and Services', inputs[9]],
  ['Education', inputs[10]]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Piechart of Expenditure', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);

  document.getElementById("remainingAmount").innerHTML="Leftover Money: $"+remainingMoney.toFixed(2);
}


