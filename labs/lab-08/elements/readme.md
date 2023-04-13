# Angular Elements

```
ng new el-skills-list --routing false --style scss
cd el-skills-list
code .
npm i -S @angular/elements
```

Add Polyfills:

```
npm install -S @webcomponents/webcomponentsjs @webcomponents/custom-elements document-register-element
```

Add the Polyfills to the polyfills.ts:

```typescript
import '@webcomponents/custom-elements/src/native-shim';
import '@webcomponents/custom-elements/custom-elements.min';
```

Add ngx-build-plus:

```
ng add ngx-build-plus
```

### Implement the component that will be exported as Angular Element

Add the `FormsModule` to `app.module.ts` and add a Component using:

```
ng g c skills-list
```

Add a skill.model.ts file:

```typescript
export class Skill {
  id: number = 0;
  name: string = '';
  hours: number = 0;
  completed: boolean = false;
}
```

In `skills-list.component.ts` add an `Skill[]` as `@Input()` and create a Button that triggers the current `Skill[]` as `@Output()`

```typescript
@Input() skills: Skill[] = [];
@Output() skillsSaved: EventEmitter<Skill[]> = new EventEmitter<Skill[]>();
skillToAdd: string = '';
```

In skills-list.component.html add the following html:

```html
<div class="container">
  <h1 class="centered">These are the skills</h1>
  <div class="centered">
    <table>
      <colgroup>
        <col style="width: 10%" />
        <col style="width: 60%" />
        <col style="width: 15%" />
        <col style="width: 15%" />
      </colgroup>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Hours</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let s of skills" (click)="removeSkill(s)">
          <td>{{ s.id }}</td>
          <td>{{ s.name }}</td>
          <td>{{ s.hours }}</td>
          <td>{{ s.completed }}</td>
        </tr>
      </tbody>
    </table>
    <h3 class="centered">Hover a Skill & Click to remove</h3>
  </div>
  <div class="addRow">
    <label>Add a Skill:</label><input type="text" [(ngModel)]="skillToAdd" />
    <a (click)="addSkill()">Add Skill</a>
    <a (click)="saveSkills()">Save Skills</a>
  </div>
</div>
```  

Add the following css to skills-list.component.scss:

```css
tr {
  cursor: pointer;
}

table {
  margin: 0 auto;
  min-width: 50vw;

  tr :hover {
    text-decoration: underline;
  }

  th,
  td {
    text-align: start;
  }
}

a {
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
}

input {
  width: 60%;
}

.addRow {
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
  background: #c3002f;
  color: white;
  padding: 1rem;

  a {
    color: white;
  }
}

.centered {
  text-align: center;
  margin: 1.5rem;
}

.container {
  background-color: lavender;
  padding: 1rem;
}
```  

Add the following events to `skills-list.component.ts`:

```typescript
removeSkill(item: Skill): void {
  this.skills = this.skills.filter((s) => s.id !== item.id);
}

addSkill(): void {
  const sk: Skill = {
    id: this.skills.length + 1,
    name: this.skillToAdd,
    hours: 4,
    completed: false,
  };
  this.skills.push(sk);
}

saveSkills(): void {
  this.skillsSaved.emit(this.skills);
}
```

Create the following data property in `app.component.ts`:

```typescript
data = [
  { id: 1, name: 'node.js', hours: 2, completed: false },
  { id: 2, name: 'type script', hours: 2, completed: false },
  { id: 3, name: 'java script', hours: 1, completed: false },
];
```

Add an onSave-event to app.component.ts:

```typescript
onSave(skills: Skill[]): void {
  console.log('saved skills:', skills);
}
```

Clean html and add skills-list to `app.component.html`:

```html
<app-skills-list
  [skills]="data"
  (skillsSaved)="onSave($event)"
></app-skills-list>
```

Run your component. Your result should look somehow like this:

![skills](_images/skills.png)

### Build & Package

Modify App Module to create the CustomElement:

```typescript
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [SkillsListComponent],
  imports: [BrowserModule, FormsModule],
  entryComponents: [SkillsListComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(SkillsListComponent, {
      injector: this.injector,
    });

    customElements.define('ng-skills', el);
  }
}
```

>Note: Comment the old bootstrapping info so that you can switch back at any time

Add custom build script to `package.json`

```
"build-elements": "ng build --prod --keep-polyfills --single-bundle true --output-hashing none"
```

Create the build and examine output in `dist-folder`:

```
npm run build-elements
```

### Testing your Web Component created with Angular Elements

Modify el-the HTML in `./dist/el-skills-list/index.html` for Testing:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>SkillsElements</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <ng-skills></ng-skills>
    <script src="index.js" defer></script>
    <script src="polyfills.js" defer></script>
    <script src="main.js" defer></script>
  </body>
</html>
```

To set the `@Input()` and handle the `@Output()` add the following script `index.js` to  `index.html`:

```
<script src="index.js" defer></script>
```

Contents of `index.js`:

```javascript
document.addEventListener("DOMContentLoaded", function (event) {
  const element = document.getElementsByTagName("ng-skills")[0];
  if (element) {
    // pass data
    const data = [
      { id: 1, name: "node.js", hours: 2, completed: false },
      { id: 2, name: "type script", hours: 2, completed: false },
      { id: 3, name: "java script", hours: 1, completed: false },
    ];
    element.skills = data;
    // handle event
    element.addEventListener("skillsSaved", (data) =>
      console.log("Data received from ng-skills:", data.detail)
    );
  }
});
```

>Note: You can also copy index.html and index.js from the root of this demo project

Install a tool that can serve static pages, ie `angular-http-server`:

```
npm i -g angular-http-server
angular-http-server -p 9000
```

Navigate to: `http://localhost:9000/`
