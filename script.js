let inputs = [];
let totals=[];
let remainingMoney=0;
let totalRemainingMoney=0;

function submit(inp){
  let valid_responses=true;
  let val = document.getElementsByClassName("input"+inp);
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
    google.charts.setOnLoadCallback(drawChart(inp));
  }
}

function drawChart(piechartNumber) {
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
  let months=['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let title="Piechart of Expenditure for "+months[parseInt(piechartNumber)-1]+" "+document.getElementById("year").value;
  var options = {'title':title, 'width':550, 'height':400};
  var chart = new google.visualization.PieChart(document.getElementById('piechart'+piechartNumber));
  chart.draw(data, options);

  document.getElementById("remainingAmount"+piechartNumber).innerHTML="Leftover Money: $"+remainingMoney.toFixed(2);
}

function printPageArea(areaID){
    var printContent = document.getElementById(areaID);
    var WinPrint = window.open('', '', 'width=900,height=650');
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}

function yearly_submit(){
  let valid_responses=true;
  let totals=[0,0,0,0,0,0,0,0,0,0,0];
  let expenditures=["monthlyIncome","housing", "transportation", "food", "personalInsurance","healthcare","entertainment", "expenses", "contributions", "services", "education"]
  for (let i=0; i<expenditures.length; i++){
      let total=0;
      let numbers=document.getElementsByClassName(expenditures[i]);
      for(let number=0; number<numbers.length; number++){
            if (Number.isNaN(number)){
                alert("Invalid Inputs!");
                valid_responses=false;
                break;
            }
            totals[i]+=parseFloat(numbers[number].value); 
            //console.log(totals[i]);
       }
}
   if(valid_responses==true){
    let totalExpenditure=0;
    for(let i=1;i<totals.length;i++){
        totalExpenditure+=totals[i];
    }
   // console.log(totals[0]);
    totalRemainingMoney=totals[0]-totalExpenditure;
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(yearlyDrawChart());
}

function yearlyDrawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Expenditure', 'Dollars'],
  ['Housing', totals[1]],
  ['Transportation', totals[2]],
  ['Food', totals[3]],
  ['Personal insurance and pension', totals[4]],
  ['Healthcare', totals[5]],
  ['Entertainment', totals[6]],
  ['Other Expenses', totals[7]],
  ['Cash Contribution', totals[8]],
  ['Apparel and Services', totals[9]],
  ['Education', totals[10]]
]);
  let title="Piechart of Total Expenditure for "+document.getElementById("year").value;
  var options = {'title':title, 'width':550, 'height':400};
  var chart = new google.visualization.PieChart(document.getElementById('yearlyPie'));
  chart.draw(data, options);

  document.getElementById("yearlyRemainingAmount").innerHTML="Leftover Money: $"+totalRemainingMoney.toFixed(2);
}
}
