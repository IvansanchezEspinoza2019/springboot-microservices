import VendorInterface from "./VendorInterface";

export function searchVendors(){
    if(!localStorage['Vendors']){
        localStorage['Vendors'] = '[]';
        return [];
    }
    let VendorsJsonStr= localStorage['Vendors'];
    let Vendors = JSON.parse(VendorsJsonStr);
    return Vendors;
}

export function removeVendor(id: string){
    let Vendors = searchVendors();
    const index = Vendors.findIndex((c: any) => c.id==id);
    Vendors.splice(index, 1)
    localStorage['Vendors']=JSON.stringify(Vendors);
}

export function saveVendor(Vendor: VendorInterface){
    let Vendors = searchVendors();
    if(Vendor.id){
        // edit existing Vendor
        const index = Vendors.findIndex((c: any) => c.id==Vendor.id);
        Vendors[index] = Vendor;
    }else{
        // new Vendor
        Vendor.id = String(Math.round(Math.random() * 100000))
        Vendors.push(Vendor);
    }
    localStorage['Vendors']=JSON.stringify(Vendors);
}

export function findVendorById(id: string){
    let Vendors = searchVendors();
    return Vendors.find( (c: any) => c.id==id)
}


