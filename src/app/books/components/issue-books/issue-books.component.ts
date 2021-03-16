import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-issue-books',
  templateUrl: './issue-books.component.html',
  styleUrls: ['./issue-books.component.css'],
})
export class IssueBooksComponent implements OnInit {
  public collection: any;

  alert: boolean = false;

  public registerBookForm;
  public bookName: string;
  public bookListName;

  public registerBookList;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.bookService.getBookList().subscribe((data) => {
      this.bookListName = data;
    });

    let bookName = this.activatedRoute.snapshot.paramMap.get('bookNames');

    this.bookService.getBookList().subscribe((result) => {
      this.collection = result;
      console.log(this.collection);
    });

    this.bookService.getRegBookList().subscribe((result) => {
      this.registerBookList = result;
      console.log(this.registerBookList);
    });

    this.registerBookForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(5)]],
      issueTime: [''],
      bookName: [''],
     // authorName: [''],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      idProof: ['',[Validators.required, Validators.minLength(12)]],
    });

    
  }
  createBook() {
    console.log(this.registerBookForm.value);
    this.bookService
      .registerBook(this.registerBookForm.value)
      .subscribe((result) => {
        //console.log('data created successfully', result);
        let updatedBookName = this.bookListName.map((bookInfo) => {
          if (bookInfo.name == this.registerBookForm.value.bookName) {
            bookInfo.isBookDisabled = true;
          }
          return bookInfo;
        });
        console.log(updatedBookName);

        console.log(this.registerBookForm.value);
        alert(
          `Book has been issued Succesfully`
        );
        this.registerBookForm.reset();

        this.router.navigate(['/books/issue-books']);
      });
  }
}
