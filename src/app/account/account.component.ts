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

  accountImage = 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/16406891_10211216429622181_5318879557385017600_n.jpg?oh=cf53c813743fef217b9dd70c6051c5b1&oe=5B09975B';

  constructor(private router: Router, private linkService: LinkService) { }

  ngOnInit() {
  }

}
