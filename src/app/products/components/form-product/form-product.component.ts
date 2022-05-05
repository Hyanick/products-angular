import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Product } from 'src/app/shared/models/product';
import { Category } from 'src/app/shared/enums/category.enum';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  public form!: FormGroup;
  @Input() init = new Product();
  public category = Category;
  @Output() data: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      name: [this.init.name],
      category: [this.init.category],
      price: [this.init.description],
      description: [this.init.description],
      activated: [this.init.activated]
    })
  }

  onSubmit() {
    this.data.emit(this.form.value);
    this.router.navigate(['../'], { relativeTo: this.aRoute });
    console.log(this.form.value);
  }

  cancel() {
    this.router.navigate(['../'], { relativeTo: this.aRoute });
  }

}
