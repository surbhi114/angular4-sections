import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  courses = [
    {
      id: 1,
      name: 'course1'
    },
    {
      id: 2,
      name: 'course2'
    },
    {
      id: 3,
      name: 'course3'
    }
  ];
  viewMode = 'something';

  onAdd(){
    this.courses.push({
      id:4,
      name: 'course4'
    });
  }
  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

  onChange(course){
    let index = this.courses.indexOf(course);
    this.courses[index].name = "changed Name";
  }

  // trackBy feature
  authors;
  onLoadAuthors() {
    this.authors = [
      {id: 1, name: 'author1'},
      {id: 2, name: 'author2'},
      {id: 3, name: 'author3'}
    ]
  }

  trackAuthorsById(index, course) {
    //we just return the id as we want angular to track an object based on id
    return course ? course.id : undefined;
  }

  //for safe traversal:
  books = [
    {
      title: 'Book1',
      author: {
        name: 'author1'
      }
    },
    {
      title: 'Book2'
    }
  ]
  
}
