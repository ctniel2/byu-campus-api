import { Component, OnInit } from '@angular/core';
import {Router}     from '@angular/router';

import {LinkService} from '../link.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LinkService]
})
export class AccountComponent implements OnInit {

  constructor(private router: Router, private linkService: LinkService) { }

  ngOnInit() {
  }

}
