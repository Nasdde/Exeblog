import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon Blog';

  posts = [
    { title: 'Mon premier post',
      content: 'Étant donnée une analyse des besoins correctement réalisée, la seconde étape consiste à la traduire selon un modèle conceptuel. Le modèle conceptuel étant formel, il va permettre de passer d\'une spécification en langage naturel, et donc soumise à interprétation, à une spécification non ambigüe',
      loveIts: 0,
      created_at: new Date()},
    { title: 'Mon deuxième post',
      content: 'La traduction d\'un cahier des charges spécifiant l\'existant et les besoins en modèle conceptuel reste néanmoins une étape délicate, qui va conditionner ensuite l\'ensemble de l\'implémentation informatique.',
      loveIts: 0,
      created_at: new Date()},
    { title: 'Encore un post',
      content: 'On se propose de donner une liste non exhaustive d\'actions à mener pour rédiger de telles spécifications',
      loveIts: 0,
      created_at: new Date()}
  ];
}
