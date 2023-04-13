EventBus pattern which basically is a stateful service, allows communication between components that are not directley nested like Container / Presenter.

- Examine `sidepanel.service.ts` and its use in `side-panel.component.ts`. It is Angular 16 Signals instead of BehaviourSubjects.

  ```typescript
  @Injectable({ providedIn: 'root' })
  export class SidePanelService {
    private commands = signal<SidebarActions>(SidebarActions.HIDE_MARKDOWN);
    getCommands() {
      return computed(() => this.commands());
    }
  ```
- Examine `demo-container.component.html` and the div for the mock editor:

  ```html
  <div class="gdEditor" *ngIf="showMdEditor ">
    <app-markdown-editor></app-markdown-editor>
  </div>
  ```
- Examine `menu.service.ts`. It toggles the responsive behaviour of the side panel and is using the BehaviourSubject pattern.

```typescript
export class MenuService {
  ...
  visible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  position$: BehaviorSubject<MatDrawerMode> = new BehaviorSubject<MatDrawerMode>('side');
```

- Explain `menu.service.ts` and its responsive behavior when changing screen width. Also mention `navbar.component.ts` and the Hamburger-Menu.

```html
<mat-toolbar color="primary">
  <mat-toolbar-row>
    <div (click)="toggleMenu()" class="hamburgerMenu">
      <mat-icon color="accent">menu</mat-icon>
    </div>
```

- We will refactor `menu.service.ts` to the ngrx state later on
