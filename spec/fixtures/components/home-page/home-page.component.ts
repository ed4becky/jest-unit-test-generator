import {Component, Inject, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ConfigData} from "./config-data.class";
import {Environment, TEST_ENV} from "./environment.class";

@Component({
  selector: 'app-name',
  template: ``,
  styles: [``]
})
export class HomePageComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(TEST_ENV) environment: Environment,
    private data: ConfigData) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.has('type') && params.get('type') === 'user') {
        this.router.navigate(['home', 'user']);
      }
    });
  }
}
