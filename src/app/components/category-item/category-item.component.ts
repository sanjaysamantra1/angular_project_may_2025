import { Component } from '@angular/core';

@Component({
  selector: 'app-category-item',
  imports: [],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.css',
  inputs:['categoryObj']
})
export class CategoryItemComponent {
  categoryObj:any;
}
