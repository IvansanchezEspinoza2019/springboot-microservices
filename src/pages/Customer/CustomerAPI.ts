export function searchCustomers(){
    if(!localStorage['customers']){
        localStorage['customers'] = '[]';
        return [];
    }
    let customersJsonStr= localStorage['customers'];
    let customers = JSON.parse(customersJsonStr);
    return customers;
}

export function removeCustomer(id: string){
    let customers = searchCustomers();
    const index = customers.findIndex((c: any) => c.id==id);
    customers.splice(index, 1)
    localStorage['customers']=JSON.stringify(customers);
}

export function saveCustomer(customer: any){
    let customers = searchCustomers();
    customers.push(customer);
    localStorage['customers']=JSON.stringify(customers);
}

