import EmployeeInterface from "./EmployeeInterface";

export function searchEmployees(){
    if(!localStorage['Employees']){
        localStorage['Employees'] = '[]';
        return [];
    }
    let EmployeesJsonStr= localStorage['Employees'];
    let Employees = JSON.parse(EmployeesJsonStr);
    return Employees;
}

export function removeEmployee(id: string){
    let Employees = searchEmployees();
    const index = Employees.findIndex((c: any) => c.id==id);
    Employees.splice(index, 1)
    localStorage['Employees']=JSON.stringify(Employees);
}

export function saveEmployee(Employee: EmployeeInterface){
    let Employees = searchEmployees();
    if(Employee.id){
        // edit existing Employee
        const index = Employees.findIndex((c: any) => c.id==Employee.id);
        Employees[index] = Employee;
    }else{
        // new Employee
        Employee.id = String(Math.round(Math.random() * 100000))
        Employees.push(Employee);
    }
    localStorage['Employees']=JSON.stringify(Employees);
}

export function findEmployeeById(id: string){
    let Employees = searchEmployees();
    return Employees.find( (c: any) => c.id==id)
}


