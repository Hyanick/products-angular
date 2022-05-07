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
  @Input() isPageEdit = false;
  public category = Category;
  @Output() data: EventEmitter<any> = new EventEmitter();
  public btnName: string = 'Ajouter';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createForm();
    if (this.isPageEdit) {
      this.btnName = 'Modifier'
    }
  }

  private createForm() {
    this.form = this.fb.group({
      id: [this.init.id],
      name: [this.init.name],
      category: [this.init.category],
      price: [this.init.price],
      description: [this.init.description],
      activated: [this.init.activated]
    })
  }

  onSubmit() {
    this.data.emit(this.form.value);
  }

  cancel() {
    if (this.isPageEdit) {
      this.router.navigate(['../../'], { relativeTo: this.aRoute });
    } else {
      this.router.navigate(['../'], { relativeTo: this.aRoute });
    }

  }

}
