import { Component, EventEmitter, Input, Output, SimpleChanges, inject } from '@angular/core';
import { Person } from '../../person/person.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-presenter-edit',
  templateUrl: './presenter-edit.component.html',
  styleUrls: ['./presenter-edit.component.scss']
})
export class PresenterEditComponent {
  @Input() person: Person = new Person();
  @Output() savePerson: EventEmitter<Person> = new EventEmitter<Person>();

  fb = inject(FormBuilder);

  personForm: FormGroup = this.fb.group({
    id: [this.person.id],
    name: [this.person.name, [Validators.required, Validators.minLength(3)]],
    age: [this.person.age, [Validators.required, Validators.min(0), Validators.max(120)],],
  });

  constructor() { }

  ngOnInit() {
    console.log(this.person);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['person']) {
      this.personForm.patchValue(changes['person'].currentValue);
    }
  }

  doSave() {
    this.savePerson.emit(this.person);
  }

  doDelete() {
    console.log(`deleting ${this.person.name}`);
  }
}
