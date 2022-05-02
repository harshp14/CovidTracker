import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIResponse, cases, country} from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort: string = "";
  public countries: Array<country> = [];

  constructor(
    private httpService: HttpService,
    private activatedRouted: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRouted.params.subscribe(() => {
      this.getCountries();
    });
  }

  getCountries(sort : string = "country"): void {
    console.log(sort)
    this.httpService
      .getCountryList()
      .subscribe((countriesList: APIResponse<country>) => {
        if (sort == 'country') {
          this.countries = countriesList.response.sort((a, b) => {
            if (a.country > b.country) {
              return 1;
            }

            if (a.country < b.country) {
              return -1;
            }

            return 0;
          });
        }

        if (sort == 'continent') {
          this.countries = countriesList.response.sort((a, b) => {
            if (a.continent > b.continent) {
              return 1;
            }

            if (a.continent < b.continent) {
              return -1;
            }

            return 0;
          });
        }
        if (sort == 'cases') {
          this.countries = countriesList.response.sort((a, b) => {
            if (a.cases['active'] > b.cases['active']) {
              return 1;
            }

            if (a.cases['active'] < b.cases['active']) {
              return -1;
            }

            return 0;
          });
        }
        if (sort == 'tests') {
          this.countries = countriesList.response.sort((a, b) => {
            if (a.tests["total"] > b.tests["total"]) {
              return 1;
            }

            if (a.tests["total"] < b.tests["total"]) {
              return -1;
            }

            return 0;
          });
        }
        if (sort == 'critical') {
          this.countries = countriesList.response.sort((a, b) => {
            if (a.cases['critical'] > b.cases['critical']) {
              return 1;
            }

            if (a.cases['critical'] < b.cases['critical']) {
              return -1;
            }

            return 0;
          });
        }
        if (sort == 'deaths') {
          this.countries = countriesList.response.sort((a, b) => {
            if (a.deaths['new'] > b.deaths['new']) {
              return 1;
            }

            if (a.deaths['new'] < b.deaths['new']) {
              return -1;
            }

            return 0;
          });
        }
        if (sort == 'total deaths') {
          this.countries = countriesList.response.sort((a, b) => {
            if (a.deaths['total'] > b.deaths['total']) {
              return 1;
            }

            if (a.deaths['total'] < b.deaths['total']) {
              return -1;
            }

            return 0;
          });
        }
        if (sort == '-country') {
          this.countries = countriesList.response.sort((a, b) => {
            if (a.country > b.country) {
              return -1;
            }

            if (a.country < b.country) {
              return 1;
            }

            return 0;
          });
        }

        if (sort == '-continent') {
          this.countries = countriesList.response.sort((a, b) => {
            if (a.continent > b.continent) {
              return -1;
            }

            if (a.continent < b.continent) {
              return 1;
            }

            return 0;
          });
        }
        if (sort == '-cases') {
          this.countries = countriesList.response.sort((a, b) => {
            if (a.cases['active'] > b.cases['active']) {
              return -1;
            }

            if (a.cases['active'] < b.cases['active']) {
              return 1;
            }

            return 0;
          });
        }
        if (sort == '-tests') {
          this.countries = countriesList.response.sort((a, b) => {
            if (a.tests["total"] > b.tests["total"]) {
              return -1;
            }

            if (a.tests["total"] < b.tests["total"]) {
              return 1;
            }

            return 0;
          });
        }
        if (sort == '-critical') {
          this.countries = countriesList.response.sort((a, b) => {
            if (a.cases['critical'] > b.cases['critical']) {
              return -1;
            }

            if (a.cases['critical'] < b.cases['critical']) {
              return 1;
            }

            return 0;
          });
        }
        if (sort == '-deaths') {
          this.countries = countriesList.response.sort((a, b) => {
            if (a.deaths['new'] > b.deaths['new']) {
              return -1;
            }

            if (a.deaths['new'] < b.deaths['new']) {
              return 1;
            }

            return 0;
          });
        }
        if (sort == '-total deaths') {
          this.countries = countriesList.response.sort((a, b) => {
            if (a.deaths['total'] > b.deaths['total']) {
              return -1;
            }

            if (a.deaths['total'] < b.deaths['total']) {
              return 1;
            }

            return 0;
          });
        }
      });
  }
}
