import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Repository} from '../repository-class/repository'
import { from } from 'rxjs';
import {ReposService} from '../repos-http/repos.service'
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  providers: [ReposService],
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

    ngOnInit() {

    }
}
