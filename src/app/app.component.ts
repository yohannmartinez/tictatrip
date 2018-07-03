import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FindCityService } from './find-city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ville: string = '';
  bests = undefined;
  propositions = undefined;
  constructor(private findCity : FindCityService) { }

  ngOnInit() {
    this.findCity.getBests().subscribe((bests) => {
      this.bests = bests;
    })
  }

  validCity() {
    this.findCity.getCity(this.ville).subscribe((data) => {
      this.propositions = data;
      console.log(this.propositions);
    });
  }

  onSearchChange(searchValue: string) {
    console.log(searchValue);
    this.validCity();
    if (this.ville.length > 0){
      document.getElementById('input').style.border = "0.5px solid green";
    } else {
      document.getElementById('input').style.border = "0.5px solid red";
    }
  }


/*   ville = proposition.unique_name; onSearchChange(ville)
 */
}