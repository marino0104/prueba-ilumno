import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../services/site.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { regularExpresions } from '../../../utils/regular-expresions';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  programsList=[];
  constructor(private siteService: SiteService) { }

  ngOnInit(): void {
    this.getPrograms();
  }
  getPrograms():void{
    this.siteService.getPrograms().subscribe(programs=>{
      this.programsList = [...new Map(programs.map(item => [item.id, item])).values()];
    })
  }
  registerForm=new FormGroup({
    name: new FormControl('',[Validators.required, Validators.pattern(regularExpresions.letters)]),
    family_name: new FormControl('',[Validators.required, Validators.pattern(regularExpresions.letters)]),
    email: new FormControl('', Validators.pattern(regularExpresions.email)),
    phone: new FormControl('',[Validators.maxLength(10), Validators.pattern(regularExpresions.numeric)]),
    program: new FormControl(''),
    comment: new FormControl('')

  })
  sendInfo(event):void{
    event.preventDefault();
    console.info(this.registerForm);
    let body ={
      name:this.registerForm.controls.name.value,
      family_name:this.registerForm.controls.family_name.value,
      email:this.registerForm.controls.email.value,
      phone:parseInt(this.registerForm.controls.phone.value),
      program:this.registerForm.controls.program.value,
      comment:this.registerForm.controls.comment.value
    }
    this.siteService.sendRegister(body).subscribe(res=>{
      console.info(res)
    })
    console.info(body);
  }

}
