import CustomerInterface from "./CustomerInterface";

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

export function saveCustomer(customer: CustomerInterface){
    let customers = searchCustomers();
    if(customer.id){
        // edit existing customer
        const index = customers.findIndex((c: any) => c.id==customer.id);
        customers[index] = customer;
    }else{
        // new customer
        customer.id = String(Math.round(Math.random() * 100000))
        customers.push(customer);
    }
    localStorage['customers']=JSON.stringify(customers);
}

export function findCustomerById(id: string){
    let customers = searchCustomers();
    return customers.find( (c: any) => c.id==id)
}


