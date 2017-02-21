import { Injectable } from '@angular/core';

@Injectable()
export class TodoServiceService {

  constructor() { }

  getTodoList () {
    return [
      {id:1, label:'Sleep early on night around 10PM (Max 10:30)', archived:false},
      {id:2, label:'Weakup early morning 5AM', archived:false},
      {id:3, label:'Study Every morning for 1 housrs', archived:false},
      {id:4, label:'After study go for walk and exercise', archived:false},
      {id:5, label:'Read news paper or magzine after walk or exercise', archived:false}
    ];
  }
}
