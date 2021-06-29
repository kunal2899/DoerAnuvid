import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
var tocheck:boolean = false;
import * as $ from 'jquery';
import { DatabaseService } from '../services/database.service';

export class UpdateDTO{
  constructor(
    public id: number,
    public name: string,
    public address: string,
    public mobile: string,
    public email: string,
    public username: string,
    public curr_password: string,
    public new_password: string,
    public entered_password: string
){ }
} 

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  user
  pass = ''
  currpass = ''
  ud:UpdateDTO
  emsg = ''
  smsg = ''

  constructor(private db:DatabaseService) { }

  edit(n){
    let e = document.getElementsByName(n)[0]
    $(n).removeAttr('readonly')
    $(n).trigger('focus')
    $(n).siblings('i').hide()
  }
  updateForm=new FormGroup({
    fname:new FormControl("",Validators.required),
    lname:new FormControl("",Validators.required),
    mobile1:new FormControl("",Validators.required),
    mobile2:new FormControl(""),
    email:new FormControl("",Validators.required),
    address1:new FormControl("",Validators.required),
    address2:new FormControl(""),
    city:new FormControl("",Validators.required),
    state:new FormControl("",Validators.required),
    pincode:new FormControl("",Validators.required),
    username:new FormControl("")
  })
  loadUser(){
    this.db.getUserDetails().subscribe((data:any)=>{
      this.updateForm.get("fname").setValue(data[0].first_name);
      this.updateForm.get("lname").setValue(data[0].last_name);
      this.updateForm.get("email").setValue(data[0].email);
      this.updateForm.get("username").setValue(data[0].username);
      this.updateForm.get("address1").setValue(data[1].address1);
      this.updateForm.get("address2").setValue(data[1].address2);
      this.updateForm.get("mobile1").setValue(data[1].mobile1);
      this.updateForm.get("mobile2").setValue(data[1].mobile2);
      this.updateForm.get("state").setValue(data[1].state);
      this.updateForm.get("city").setValue(data[1].city);
      this.updateForm.get("pincode").setValue(data[1].pincode);
    });
  }
update(){
  let details=[{
    // "username": this.updateForm.get("username").value,
    "email": this.updateForm.get("email").value,
    // "password": this.updateForm.get("username").value,
    "first_name":this.updateForm.get("first_name").value,
    "last_name": this.updateForm.get("last_name").value
},{
  "address1":this.updateForm.get("address1").value,
  "address2":this.updateForm.get("address2").value,
  "city":this.updateForm.get("city").value,
  "pincode":this.updateForm.get("pincode").value,
  "state":this.updateForm.get("state").value,
  "mobile1":this.updateForm.get("mobile1").value,
  "mobile2":this.updateForm.get("mobile2").value
}]
  this.db.updateUserDetails(details).subscribe((data:any)=>{
    this.updateForm.get("fname").setValue(data[0].first_name);
      this.updateForm.get("lname").setValue(data[0].last_name);
      this.updateForm.get("email").setValue(data[0].email);
      this.updateForm.get("username").setValue(data[0].username);
      this.updateForm.get("address1").setValue(data[1].address1);
      this.updateForm.get("address2").setValue(data[1].address2);
      this.updateForm.get("mobile1").setValue(data[1].mobile1);
      this.updateForm.get("mobile2").setValue(data[1].mobile2);
      this.updateForm.get("state").setValue(data[1].state);
      this.updateForm.get("city").setValue(data[1].city);
      this.updateForm.get("pincode").setValue(data[1].pincode);
    });
}
  // update(f:FormGroup){
  //   if(f.valid){
  //     if(tocheck && this.pass != ''){
  //       this.ud = new UpdateDTO(this.user.id,this.user.name,this.user.address,
  //         this.user.mobile,this.user.email,this.user.username,this.user.password,this.pass,this.currpass);
  //     }
  //     else{
  //       this.ud = new UpdateDTO(this.user.id,this.user.name,this.user.address,
  //         this.user.mobile,this.user.email,this.user.username,this.user.password,this.currpass,this.currpass);
  //     }
  //     // this.us.updateUser(this.ud).subscribe(
  //     //   response=>{
  //     //       this.loadUser()
  //     //       this.currpass = ''
  //     //       this.pass = ''
  //     //       f.get('cpwd').markAsUntouched()
  //     //       $('input').each(function(x,e){
  //     //         $(e).attr('readonly','true')
  //     //         $(e).siblings('i').show()
  //     //       })
  //     //       $('#newp').removeAttr('readonly')
  //     //       $('#cpwd').removeAttr('readonly')
  //     //       this.smsg = 'Your profile is updated.'
  //     //       setTimeout(()=>{this.smsg=''},3000)
  //     //   },
  //     //   error=>{
  //     //     if(error.error == "Password is incorrect"){
  //     //       this.currpass = ''
  //     //       this.pass = ''
  //     //       $('input').each(function(x,e){
  //     //         $(e).attr('readonly','true')
  //     //         $(e).siblings('i').show()
  //     //       })
  //     //       $('#newp').removeAttr('readonly')
  //     //       $('#cpwd').removeAttr('readonly')
  //     //       f.get('cpwd').markAsUntouched()
  //     //       this.emsg = 'Incorrect Password'
  //     //       setTimeout(()=>{this.emsg=''},3000)
  //     //     }
  //     //   }
  //     // )
  //   }
  // }

  ngOnInit(): void {

      this.loadUser();

      $('#qw').on('click',function(){
        $('.newpass').toggle(500);
        $('#nohere').toggle();
        $('#here').toggle();
        if($(this).is(':checked')){
          $('#newp').attr('required','true');
          tocheck = true
          $('#newp').attr('aria-required','true');
          $('#newp').attr('ng-reflect-required','required');
        }
        else{
          $('#newp').removeAttr('required');
          tocheck = false
          $('#newp').attr('aria-required','false');
          $('#newp').attr('ng-reflect-required','false');
        }
        
      });
  }


}
