import VendorInterface from "./VendorInterface";

export async function searchVendors(){
    let response = await fetch("/api/vendors", {
        "method": "GET",
        "headers": {
            "content-type": "application/json"
        }
    });

/*

    if(!localStorage['vendors']){
        localStorage['vendors'] = '[]';
        return [];
    }
    let vendorsJsonStr= localStorage['vendors'];
    let vendors = JSON.parse(vendorsJsonStr);*/
    return await response.json();
}

export async function removeVendor(id: string){
    console.log(id)
    await fetch("/api/vendors/"+id, {
        "method": "DELETE",
        "headers": {
            "content-type": "application/json"
        }
    });

    /*
    let vendors = await searchVendors();
    const index = vendors.findIndex((c: any) => c.id==id);
    vendors.splice(index, 1)
    localStorage['vendors']=JSON.stringify(vendors);*/
}

export async function saveVendor(vendor: VendorInterface){
    await fetch("/api/vendors", {
        "method": "POST",
        "body": JSON.stringify(vendor),
        "headers": {
            "content-type": "application/json"
        }
    });

    /*
    let vendors = await searchVendors();
    if(vendor.id){
        // edit existing vendor
        const index = vendors.findIndex((c: any) => c.id==vendor.id);
        vendors[index] = vendor;
    }else{
        // new vendor
        vendor.id = String(Math.round(Math.random() * 100000))
        vendors.push(vendor);
    }
    localStorage['vendors']=JSON.stringify(vendors); */
}

export async function findVendorById(id: string){
    let response = await fetch("/api/vendors/"+id, {
        "method": "GET",
        "headers": {
            "content-type": "application/json"
        }
    });

    /*
    let vendors = await searchVendors();
    return vendors.find( (c: any) => c.id==id) */

    return await response.json()
}


