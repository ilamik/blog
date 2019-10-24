import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';
  content = 'Lorem Ipsum est un générateur de faux textes aléatoires. Vous choisissez le nombre de paragraphes, de mots ou de listes. ' +
    'Vous obtenez alors un texte aléatoire que vous pourrez ensuite utiliser librement dans vos maquettes.';
  postList = [];

  constructor() {
    this.createPost();
  }

  createPost() {
    const dateFormat = require('dateformat');
    const today = new Date();

    const post: PostService = new PostService();
    post.title = 'Mon premier post';
    post.content = this.content;
    post.createdAt = dateFormat(today, 'dd/MM/yyyy, h:MM:ss TT');
    post.loveIts = 1;

    const post1: PostService = new PostService();
    post1.title = 'Mon deuxième post';
    post1.content = this.content;
    post1.createdAt = dateFormat(today, 'dd/MM/yyyy, h:MM:ss TT');
    post1.loveIts = -1;

    const post2: PostService = new PostService();
    post2.title = 'Encore un post';
    post2.content = this.content;
    post2.createdAt = dateFormat(today, 'dd/MM/yyyy, h:MM:ss TT');
    post2.loveIts = 0;

    return this.postList = [post, post1, post2];
  }
}
