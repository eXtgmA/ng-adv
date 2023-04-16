import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-debounced-search',
  templateUrl: './debounced-search.component.html',
  styleUrls: ['./debounced-search.component.scss'],
})
export class DebouncedSearchComponent {
  searchterm: FormControl = new FormControl('');
  searched = this.searchterm.valueChanges.pipe(
    debounceTime(750),
    tap((val) => console.log('searched for', val))
  );
}
