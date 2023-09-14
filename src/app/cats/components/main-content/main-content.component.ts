import { Component } from '@angular/core';
import {Cat} from "../../model/cat.entity";
import {CatApiService} from "../../services/cats-api.service";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  displayedColumns: string[] = ['Name', 'Origin', 'Description', 'Weight'];
  cats: Array<Cat> = [];
  constructor(private catService: CatApiService){}
  ngOnInit(){
    this.catService.getSource().subscribe((data: any) => { this.cats = data});
  }
}
