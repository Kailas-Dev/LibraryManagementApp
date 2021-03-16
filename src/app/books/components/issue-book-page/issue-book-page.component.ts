import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-book-page',
  templateUrl: './issue-book-page.component.html',
  styleUrls: ['./issue-book-page.component.css']
})
export class IssueBookPageComponent implements OnInit {
 
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }

}
