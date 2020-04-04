// create.component.ts

import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../share.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  time = {hour: 13, minute: 30};
  angForm: FormGroup;
  constructor(private shareservice: ShareService, private fb: FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      startTime: ['', Validators.required ],
      endTime: ['', Validators.required ],
      userId: ['', Validators.required ],
   });
  }
  addShare(startTime, endTime,userId) {
    const dataObj = {
      startTime: startTime,
      endTime: endTime,
      userId: userId
    };
    this.shareservice.addShare(dataObj);
  }
  ngOnInit() {
  }
}
