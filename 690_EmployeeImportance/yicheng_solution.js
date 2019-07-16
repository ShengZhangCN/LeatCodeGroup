class Employee{
  id;
  importance;
  subordinates;
}

var getImportance = (employees, id)=>{
  return getImportanceHelper(employees, id, 0);

}

var getImportanceHelper = (employees, id, sum) =>{
  var employee = getEmployeeById(employees, id);

  sum += employee.importance;
  if (employee.subordinates.length == 0){
    return sum;
  }

  employee.subordinates.forEach(id => {
    sum = getImportanceHelper(employees, id, sum);
  })

  return sum;
}

var getEmployeeById = (employees, id){
  var result = employees.filter(item =>{
    if (item.id == id){
      return true;
    }
  })

  return result[0];
}
