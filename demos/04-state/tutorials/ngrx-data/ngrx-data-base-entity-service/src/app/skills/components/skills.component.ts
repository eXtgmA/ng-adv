import { Component, OnInit } from '@angular/core';
import {
  EntityCollectionService,
  EntityCollectionServiceFactory,
} from '@ngrx/data';
import { Observable } from 'rxjs';
import { Skill } from '../skills.model';
import { SkillsEntityService } from '../skills-entity.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills$: Observable<Skill[]>;
  skillsService: EntityCollectionService<Skill>;

  // skills-entity.service.ts could also be spared by directly creating the entity
  // service in the constuctor of the component using serviceFactory

  // constructor(private factory: EntityCollectionServiceFactory) {
  //   this.skillsService = this.factory.create<Skill>('Skill');
  //   this.skills$ = this.skillsService.entities$;
  // }

  constructor(es: SkillsEntityService) {
    this.skillsService = es;
    this.skills$ = this.skillsService.entities$;
  }

  ngOnInit(): void {
    this.skillsService.getAll();
  }

  addSkill() {
    this.skillsService.add({ id: 0, name: '@ngrx/data', completed: false });
  }

  deleteSkill(item: Skill) {
    this.skillsService.delete(item);
  }
}
