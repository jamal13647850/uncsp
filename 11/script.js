let lessonNumbers = [];

const saveNumber = () => {
  let lesson = document.getElementById('lesson').value;
  let number = document.getElementById('number').value;

  if (existLesson(lesson) === undefined) {
    lessonNumbers.push(
      {
        lesson: lesson,
        number: number
      }
    );
    createTable(lessonNumbers);
    document.getElementById('lesson').value = null;
    document.getElementById('number').value = null;

  }
  else {
    alert("The number for this lesson has already been entered");
  }


  return false;
}

const existLesson = (lesson) => {
  return lessonNumbers.find(x => x.lesson === lesson);
}

const createTableRow = (columns = []) => {
  let row = document.createElement('tr');
  columns.forEach((column) => {
    let cell = document.createElement('td');
    cell.appendChild(document.createTextNode(column));
    row.appendChild(cell);
  })
  return row;
}

const createTable = () => {
  let tbl = document.getElementsByTagName("table")[0];
  if (tbl !== undefined) {
    tbl.remove();
  }

  let table = document.createElement('table');
  let tableBody = document.createElement('tbody');

  let rowHead = document.createElement('tr');

  let cellHead1 = document.createElement('th');
  cellHead1.appendChild(document.createTextNode("Lesson"));
  rowHead.appendChild(cellHead1);

  let cellHead2 = document.createElement('th');
  cellHead2.appendChild(document.createTextNode("Number"));
  rowHead.appendChild(cellHead2);

  tableBody.appendChild(rowHead);

  let rows = [];
  lessonNumbers.forEach((rowData) => {
    row = createTableRow([rowData.lesson, rowData.number]);
    tableBody.appendChild(row);
  });



  let sum = calculateSum(lessonNumbers);
  row = createTableRow(["SUM", sum]);
  tableBody.appendChild(row);

  let MinMaxAverage = calculateMinMaxAverage();
  row = createTableRow(["MIN", MinMaxAverage.min.lesson + ": " + MinMaxAverage.min.number]);
  tableBody.appendChild(row);

  row = createTableRow(["MAX", MinMaxAverage.max.lesson + ": " + MinMaxAverage.max.number]);
  tableBody.appendChild(row);

  row = createTableRow(["AVG", sum / lessonNumbers.length]);
  tableBody.appendChild(row);

  table.appendChild(tableBody);
  document.body.appendChild(table);
}



const calculateSum = () => {
  let sum = 0;
  lessonNumbers.forEach((items) => {
    sum += parseFloat(items.number);
  })
  return sum;
}
const calculateMinMaxAverage = () => {
  let lowest = { lesson: "", number: Number.POSITIVE_INFINITY }
  let highest = { lesson: "", number: Number.NEGATIVE_INFINITY }
  let tmp;
  for (let i = lessonNumbers.length - 1; i >= 0; i--) {
    tmp = lessonNumbers[i].number;
    if (tmp < lowest.number) {
      lowest = lessonNumbers[i];
    }
    if (tmp > highest.number) {
      highest = lessonNumbers[i]
    }
  }

  return {
    min: lowest,
    max: highest
  }

}