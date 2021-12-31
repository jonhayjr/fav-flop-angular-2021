import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  favFlop:any[] = [
    {
      id: 1,
      img: '/assets/img/Delgo.jpg',
      name:'Delgo'
    },
    {
      id: 2,
      img: '/assets/img/Cinderella.jpeg',
      name: 'Cinderella'
    },
    {
      id: 3,
      img: '/assets/img/AGoodDayToDieHard.jpg',
      name: 'A Good Day To Die Hard'
    },
    {
      id: 4,
      img: '/assets/img/RestInPeaceDepartment.jpg',
      name: 'Rest In Peace Department'
    }
]

isSelected = -1;

  ngOnInit() {

  }

  voteFor(id:number) {
    if (this.isSelected === id) {
      this.isSelected = -1
    } else {
      this.isSelected = id;
    }
  }


  isFlopSelected(id: number) {
    return this.isSelected === id && this.isSelected !== -1;
  }

  disableButton(id: number) {
    return this.isSelected !== id && this.isSelected !== -1;
  }

  getButtonText(id: number) {
    return this.isFlopSelected(id) ? 'Unvote' : 'Vote';
  }
}
