import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../skill.model';
import { SnackbarService } from '../../shared/snackbar/snackbar.service';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.scss'],
})
export class SkillsEditComponent implements OnInit {
  skill: Skill | undefined = { id: 0, name: '', completed: false };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sns: SnackbarService
  ) { }

  ngOnInit(): void {
    this.getSkill();
  }

  getSkill() {
    this.route.data.subscribe((data) => {
      this.skill = data['skill'];
    });
  }

  saveSkill() {
    this.sns.displayAlert('Warning', 'Save not implemented');
  }

  doCancel() {
    this.router.navigate(['/skills']);
  }
}
