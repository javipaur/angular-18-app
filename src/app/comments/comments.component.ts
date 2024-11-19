import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>
      Comentarios de lo que sea!
    </h3>
    <img src="https://cdn.vox-cdn.com/thumbor/6WUQ-FozHdnzwKN7t31bJWPbdxI=/0x0:900x500/1400x1050/filters:focal(450x250:451x251)/cdn.vox-cdn.com/uploads/chorus_asset/file/6438793/this-is-fine.jpg"/>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus inventore, illo sed quis sit modi facilis repudiandae dolor impedit. Adipisci sit eveniet ratione ullam ut est porro neque omnis veniam?</p>
  `,
  styles: `
  img{
    width:100%;
    height:auto;
  }`
})
export class CommentsComponent {

}
