import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  formContato!: FormGroup;

  constructor(private frmBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formContato = this.frmBuilder.group({
      Nome: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Telefone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      Mensagem: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(350)]],
      ReceberNoticias: ['true'],
    })
  }

}
