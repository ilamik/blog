import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: string;
  @Input() postLoveIts: number;

  constructor() { }

  clickAjout(plus: number): number {
    plus = 1;
    return this.postLoveIts += plus;
  }

  clickDelete(less: number): number {
    less = 1;
    return this.postLoveIts -= less;
  }

  getColor() {
    if (this.postLoveIts > 0) {
      return 'green';
    } else if (this.postLoveIts < 0) {
      return 'red';
    }
  }

  getColorBackgroud() {
    if (this.postLoveIts > 0) {
      return 'lightgreen';
    } else if (this.postLoveIts < 0) {
      return 'lightPink';
    }
  }
}
