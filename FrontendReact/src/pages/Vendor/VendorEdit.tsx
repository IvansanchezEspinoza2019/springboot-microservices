import { IonButtons, IonButton, IonCard, IonCol,
    IonContent, IonGrid, IonHeader, IonItem, 
    IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonIcon, IonLabel, IonInput } 
 from '@ionic/react';
 import { add, checkmark, close, pencil } from 'ionicons/icons';
 import { useEffect, useState } from 'react'; 
 import { useHistory, useParams, useRouteMatch } from 'react-router';
 import { removeVendor, saveVendor, searchVendors } from './VendorAPI';
 import { findVendorById } from './VendorAPI';
import VendorInterface from './VendorInterface';
 
 const VendorEdit: React.FC = () => {
    const { name} = useParams<{ name: string}>();
    const [Vendor, setVendor] = useState<VendorInterface>({});
    const history = useHistory()
    const routeMatch: any = useRouteMatch("/page/vendors/:id");
    let id = routeMatch?.params?.id;
 
   useEffect(()=>{
     search();
   }, [history.location.pathname]);
 
   const search = async() =>{
      if (id === 'new'){
        setVendor({});
      } else {
         let  Vendor = await findVendorById(id);
         setVendor(Vendor)
      }
   }

   const save = async ()=>{
     await  saveVendor(Vendor)
     history.push("/page/vendors")
   }
 
   return (
     <IonPage>
       <IonHeader>
         <IonToolbar>
           <IonButtons slot="start">
             <IonMenuButton />
           </IonButtons>
           <IonTitle>{name}</IonTitle>
         </IonToolbar>
       </IonHeader>
 
       <IonContent fullscreen>
         <IonHeader collapse="condense">
           <IonToolbar>
             <IonTitle size="large">{name}</IonTitle>
           </IonToolbar>
         </IonHeader>
 
 <IonCard>
   <IonTitle> {id == 'new'? 'Add Vendor':"Edit Vendor"}</IonTitle>
         
         <IonRow>
             <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Name</IonLabel>
                    <IonInput onIonChange={ e => Vendor.name = String(e.detail.value)} 
                    value={Vendor.name}> </IonInput>
                </IonItem>
             </IonCol>

             <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Contaco</IonLabel>
                    <IonInput onIonChange={ e => Vendor.contact= String(e.detail.value)}
                    value={Vendor.contact}> </IonInput>
                </IonItem>
             </IonCol>
        </IonRow>

        <IonRow>
             <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput onIonChange={e => Vendor.email = String(e.detail.value)}
                     value={Vendor.email}> </IonInput>
                    </IonItem>
             </IonCol>

             <IonCol>
             <IonItem>
                <IonLabel position="stacked">Address</IonLabel>
                    <IonInput onIonChange={ e => Vendor.address = String(e.detail.value)}
                    value={Vendor.address}> </IonInput>
                    </IonItem>
             </IonCol>
         </IonRow>
  
         <IonRow>
             <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Phone Number</IonLabel>
                    <IonInput onIonChange={ e=> Vendor.phone = String(e.detail.value)}
                    value={Vendor.phone}> </IonInput>
                </IonItem>
                </IonCol>
                <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Web</IonLabel>
                    <IonInput onIonChange={ e=> Vendor.web = String(e.detail.value)}
                    value={Vendor.web}> </IonInput>
                </IonItem>
             </IonCol>
         </IonRow>



    <IonItem>
        <IonButton onClick={()=>save()} color="success" fill="outline" slot="end" size="default">
        <IonIcon icon={checkmark}></IonIcon>
            Save
        </IonButton>
    </IonItem>
  
 
     </IonCard>
       </IonContent>
     </IonPage>
   );
 };
 
 export default VendorEdit;
 