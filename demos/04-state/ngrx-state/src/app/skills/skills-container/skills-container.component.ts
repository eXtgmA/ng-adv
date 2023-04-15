import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatestWith, map, startWith } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Skill } from '../skill.model';
import { SkillsEntityService } from '../skills-entity.service';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.scss'],
})
export class SkillsContainerComponent {
  fcToggle = new FormControl(true);

  skills = this.skillsService.entities$.pipe(
    combineLatestWith(this.fcToggle.valueChanges.pipe(startWith(true))),
    map(([skills, showAll]) => {
      return showAll ? skills : skills.filter((sk: Skill) => sk.completed === showAll);
    })
  );

  constructor(private skillsService: SkillsEntityService) { }

  ngOnInit(): void {
    this.skillsService.getAll();
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    if (environment.logChangeDetection) {
      console.log('SkillsContainerComponent - ngDoCheck');
    }
  }

  addItem(): void {
    const newItem: Skill = {
      id: 0,
      name: 'Configuration Mgmt',
      completed: false,
    };
    this.skillsService.add(newItem);
  }

  deleteItem(item: Skill): void {
    this.skillsService.delete(item);
  }

  toggleItemComplete(item: Skill): void {
    this.skillsService.update({ ...item, completed: !item.completed });
  }
}
