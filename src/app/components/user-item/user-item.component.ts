import { Component, ElementRef, inject, Input, input, signal, ViewChild } from '@angular/core';
import { loan, usuario } from '../../types';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-item',
  imports: [CommonModule,FormsModule],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
  router=inject(Router)
  usuario=input.required<usuario>();
  @ViewChild("paymentModal") paymentModal!:ElementRef;
  amount:number|null=null;
  loan2pay:loan|null=null;
  paysignal=signal<boolean>(false)
  changeStatus(user:usuario){
    user.activo=!user.activo;
  }

  editar(id:number){
    this.router.navigate(['Editar',id]);
  }

  openPaymentDialog(loan:loan) {
    this.loan2pay=loan;
    if(this.paymentModal) this.paymentModal.nativeElement.showModal()
  }

  closeDialog():void{
    this.paymentModal.nativeElement.close()
    this.paysignal.set(false)
  }

  payLoan():void{
    if(this.amount && this.loan2pay){
      this.loan2pay.amount -=this.amount;
      (this.loan2pay.amount<=0)? this.loan2pay.status='pagado' : this.loan2pay.status=this.loan2pay.status
      this.amount=null;
      this.closeDialog()
    }else{
      this.paysignal.set(true)
    } 
  }

  ChagestatusDisable(usuario:usuario):boolean {
    if(!usuario.loan)return false
    return (!!usuario.loan && usuario.loan?.some((u)=>u.status==='aprovado'||u.status==='pendiente'))
  }

}
