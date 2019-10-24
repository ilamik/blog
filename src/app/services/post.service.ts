import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;
}
