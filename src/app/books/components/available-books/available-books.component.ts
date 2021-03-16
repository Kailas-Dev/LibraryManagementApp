import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css']
})
export class AvailableBooksComponent implements OnInit {

  data: Array<any>;

  totalRecords: number;

  page: number = 1;
  filterTerm : any;

  public collection: any;

  constructor(private bookService: BookService,
              private _http: HttpClient
    ) { }

  ngOnInit(): void {
    this.getBookList();
  }

  getBookList() {
    this.bookService.getBookList().subscribe((result) => {
      this.collection = result;
      console.log(this.collection);
    });
  }

  search() {
    if(this.filterTerm == "") {
      this.ngOnInit();
    } else {
      this.collection = this.collection.filter((res) => {
        return res.filterTerm.toLocaleLowerCase().match(this.filterTerm.toLocaleLowerCase());
      });
    }
  }
  key:string = 'id';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }


}
