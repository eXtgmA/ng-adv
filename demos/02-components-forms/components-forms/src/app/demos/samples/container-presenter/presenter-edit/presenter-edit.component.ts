import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Person } from '../../person/person.model';

@Component({
  selector: 'app-presenter-edit',
  templateUrl: './presenter-edit.component.html',
  styleUrls: ['./presenter-edit.component.scss']
})
export class PresenterEditComponent {
  @Input() person: Person = new Person();
  @Input() editMode: boolean = false;
  @Output() savePerson: EventEmitter<Person> = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
    console.log(this.person);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['person']) {
      console.log('receiving updated person:', changes['person'].currentValue);
    }
  }

  doSave() {
    this.savePerson.emit(this.person);
  }

  doDelete() {
    console.log(`deleting ${this.person.name}`);
  }
}
