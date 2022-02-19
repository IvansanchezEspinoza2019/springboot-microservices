import CustomerInterface from "./CustomerInterface";

export async function searchCustomers(){
    let response = await fetch("/api/customers", {
        "method": "GET",
        "headers": {
            "content-type": "application/json"
        }
    });

/*

    if(!localStorage['customers']){
        localStorage['customers'] = '[]';
        return [];
    }
    let customersJsonStr= localStorage['customers'];
    let customers = JSON.parse(customersJsonStr);*/
    return await response.json();
}

export async function removeCustomer(id: string){
    console.log(id)
    await fetch("/api/customers/"+id, {
        "method": "DELETE",
        "headers": {
            "content-type": "application/json"
        }
    });

    /*
    let customers = await searchCustomers();
    const index = customers.findIndex((c: any) => c.id==id);
    customers.splice(index, 1)
    localStorage['customers']=JSON.stringify(customers);*/
}

export async function saveCustomer(customer: CustomerInterface){
    await fetch("/api/customers", {
        "method": "POST",
        "body": JSON.stringify(customer),
        "headers": {
            "content-type": "application/json"
        }
    });

    /*
    let customers = await searchCustomers();
    if(customer.id){
        // edit existing customer
        const index = customers.findIndex((c: any) => c.id==customer.id);
        customers[index] = customer;
    }else{
        // new customer
        customer.id = String(Math.round(Math.random() * 100000))
        customers.push(customer);
    }
    localStorage['customers']=JSON.stringify(customers); */
}

export async function findCustomerById(id: string){
    let response = await fetch("/api/customers/"+id, {
        "method": "GET",
        "headers": {
            "content-type": "application/json"
        }
    });

    /*
    let customers = await searchCustomers();
    return customers.find( (c: any) => c.id==id) */

    return await response.json()
}


