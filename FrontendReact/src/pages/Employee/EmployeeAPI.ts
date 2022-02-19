import EmployeeInterface from "./EmployeeInterface";

export async function searchEmployees(){
    let response = await fetch("/api/employees", {
        "method": "GET",
        "headers": {
            "content-type": "application/json"
        }
    });

/*

    if(!localStorage['employees']){
        localStorage['employees'] = '[]';
        return [];
    }
    let employeesJsonStr= localStorage['employees'];
    let employees = JSON.parse(employeesJsonStr);*/
    return await response.json();
}

export async function removeEmployee(id: string){
    console.log(id)
    await fetch("/api/employees/"+id, {
        "method": "DELETE",
        "headers": {
            "content-type": "application/json"
        }
    });

    /*
    let employees = await searchEmployees();
    const index = employees.findIndex((c: any) => c.id==id);
    employees.splice(index, 1)
    localStorage['employees']=JSON.stringify(employees);*/
}

export async function saveEmployee(employee: EmployeeInterface){
    await fetch("/api/employees", {
        "method": "POST",
        "body": JSON.stringify(employee),
        "headers": {
            "content-type": "application/json"
        }
    });

    /*
    let employees = await searchEmployees();
    if(employee.id){
        // edit existing employee
        const index = employees.findIndex((c: any) => c.id==employee.id);
        employees[index] = employee;
    }else{
        // new employee
        employee.id = String(Math.round(Math.random() * 100000))
        employees.push(employee);
    }
    localStorage['employees']=JSON.stringify(employees); */
}

export async function findEmployeeById(id: string){
    let response = await fetch("/api/employees/"+id, {
        "method": "GET",
        "headers": {
            "content-type": "application/json"
        }
    });

    /*
    let employees = await searchEmployees();
    return employees.find( (c: any) => c.id==id) */

    return await response.json()
}


