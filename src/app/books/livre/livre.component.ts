import { Component, Input, OnInit } from '@angular/core';
import { Livre } from 'src/app/model/livre';

@Component({
  selector: 'srai-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  @Input("liv")p:Livre=new Livre("","",0,0);
  @Input("indice")i:number=0;
  txt:string="";
  prixfinal:number=0;
finalPrice (){
  if( this.p.reduction==0)
  {
    this.txt="Le livre est sans réduction , son prix est "+this.p.price+"DT ";
  }
  else {
     this.prixfinal=this.p.price*(100-this.p.reduction)/100;
     this.txt="Le livre aprés réduction est "+this.prixfinal+" DT"

  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
