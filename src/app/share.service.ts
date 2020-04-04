import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShareService {

  private basePath = '/availibility';
  constructor(private db: AngularFireDatabase) { }

  addShare(data) {
  const obj = this.db.database.ref(this.basePath);
  let arr = this.db.list(this.basePath).valueChanges();
  let reqObj = {};
  obj.push(data);
  // arr.subscribe(val => {
  //   if(val && val.length>0) {
  //     let userData = this.getAvailibityByUserId(val,12);
  //     if(userData && userData.length>0){
  //       let filterData = this.getListAllDateIn(userData,data['startTime'],data['endTime']);
  //       if(filterData && filterData.length>2){
  //         this.deleteFireRecord(data['userId']);
  //         reqObj = {startTime:filterData[0]['startTime'],endTime:filterData[filterData.length-1]['endTime'],userId:data['userId'] };
  //         obj.push(data);
  //       } else{
  //         obj.push(data);
  //       }
  //     } else{
  //       obj.push(data);
  //     }
  //   } else{
  //      obj.push(data);
  //   }
   
  // })
 
 // console.log('Success');
  }


  deleteFireRecord(userId){
   return this.db.object('/userId/'+userId);
  }

  getShares(path): Observable<any[]> {
    let arr = this.db.list(path).valueChanges();
    arr.subscribe(val =>{
      let userData = this.getAvailibityByUserId(val,12);
      if(userData && userData.length>0){
    
        let filterData = this.getListAllDateIn(userData,1585958400000,1585962000000);
      
      }
      
    })
    
    
   // let currendDate = this.getListAllDateIn(userData)
    return arr;
  }



   getAvailibityByUserId(avArray, userId){
   // let avArray = this.db.list(this.basePath).valueChanges();
    return avArray.filter(row => row['userId']==userId);
  }

   getListAllDateIn(arrayData,startDate,endDate){
     let customArray = [];
   return arrayData.filter(element => (element['startTime']<= startDate && element['endTime']>startDate) ||  (element['startTime']<= endDate && element['endTime']<=endDate ));
   
  }

}



// 1 - 2
// 3 -4
// 1.30 3.30
// if(beforeStart< currentDate)
