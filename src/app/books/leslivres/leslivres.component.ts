import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/model/livre';
@Component({
  selector: 'srai-leslivres',
  templateUrl: './leslivres.component.html',
  styleUrls: ['./leslivres.component.css']
})
export class LeslivresComponent implements OnInit {
  allLivres:Livre[]= [
    new Livre("ASP.Net","assets/Books/asp.jpg",52.6, 20  ),
    new Livre("Système","assets/Books/sys.jpg",25.3, 0  ),
    new Livre("JAVA","assets/Books/java.jpg",48.2, 30  )
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
