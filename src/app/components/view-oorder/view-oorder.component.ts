import { Component } from '@angular/core';
import { MaineSService } from '../../services/maine-s.service';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-view-oorder',
  templateUrl: './view-oorder.component.html',
  styleUrls: ['./view-oorder.component.scss']
})
export class ViewOorderComponent {


  constructor(private maineSService: MaineSService, private router: Router) {
  }

  elems = this.maineSService.getProducts();

  products = this.maineSService.getOrder();



}


