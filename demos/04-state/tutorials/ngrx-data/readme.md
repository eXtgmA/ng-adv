# NgRx Data

>Note: A completed solution is `ngrx-data-base-entity-service`

## Scaffold and Preperation

Create project:

```bash
ng new ngrx-data
```

Add the environments configuration:

```bash
ng generate environments
```

Add NgRx:

```bash
npm i -S @ngrx/store @ngrx/entity @ngrx/effects
npm i -D @ngrx/store-devtools
ng add @ngrx/data@latest
```

Import the following common modules to `app.module.ts`:

```typescript
@NgModule({
  declarations: [AppComponent],
  imports: [
    ...
    CommonModule,
    FormsModule,
    HttpClientModule,
```

Start json-server:

```bash
json-server db.json --watch
```

>Note: You can use the db.json located in this folder

## Add ngrx/data with a base EntityDataService

Add `skills/skills.model.ts`:

```typescript
export interface Skill {
  id: number;
  name: string;
  completed: boolean;
}
```

Create skills metadata in `skills/entity-metadata.ts`:

```typescript
import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { Skill } from './skills.model';

export function sortByName(a: Skill, b: Skill): number {
  let comp = a.name.localeCompare(b.name);
  return comp;
}

const entityMetadata: EntityMetadataMap = {
  Skill: {
    selectId: (skill: Skill) => skill.id,
    sortComparer: sortByName,
  },
};

const pluralNames = {};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
```

Register NgRx StoreModule and EntityDataModule in `app.module.ts`:

```typescript
@NgModule({
  declarations: [AppComponent],
  imports: [
    ...
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
```

@ngrx/data exprects rest urls in the format `/api/{entityName}/{id}`. To change this behavior, you can create a CustomurlHttpGenerator.

Add a custom URL Generator in `skills/custom-urlgenerator.ts`. 

```typescript
@Injectable()
export class CustomurlHttpGenerator extends DefaultHttpUrlGenerator {
  constructor(pluralizer: Pluralizer) {
    super(pluralizer);
  }

  protected override getResourceUrls(
    entityName: string,
    root: string,
    trailingSlashEndpoints?: boolean
  ): HttpResourceUrls {
    let resourceURLs = this.knownHttpResourceUrls[entityName];
    if (entityName == 'Skill') {
      resourceURLs = {
        collectionResourceUrl: 'http://localhost:3000/skills/',
        entityResourceUrl: 'http://localhost:3000/skills/',
      };
      this.registerHttpResourceUrls({ [entityName]: resourceURLs });
    }
    return resourceURLs;
  }
}
```

The custom URL generator needs to be registered in `app.module.ts`:

```typescript
providers: [
  {
    provide: HttpUrlGenerator,
    useClass: CustomurlHttpGenerator,
  },
],
```

Create the EntityDataService in `skills-entity.service.ts`. If you do not want to override the methods, that is all you will have to do in order to load entity data.

  ```typescript
  @Injectable({
    providedIn: 'root',
  })
  export class SkillsEntityService extends EntityCollectionServiceBase<Skill> {
    constructor(factory: EntityCollectionServiceElementsFactory) {
      super('Skill', factory);
    }
  }
  ```

Implement the User Interface that uses the SkillsEntityService:

![base-ui](_images/base-ui.jpg)

Add the following html to `skills/skills.component.html`:

```html
<h2>Skills</h2>

<div class="container">
  <div>
    <button (click)="addSkill()">Add Skill</button>
  </div>

  <div *ngFor="let sk of skills$ | async">
    <div class="row">
      <div class="label">{{ sk.name }}</div>
      <button (click)="deleteSkill(sk)">Delete</button>
    </div>
  </div>
</div>
```

Add a `skills/skills.component.ts` using the Angular CLI and add the following code to it:

```typescript
export class SkillsComponent implements OnInit {
  skills$: Observable<Skill[]>;
  skillsService: EntityCollectionService<Skill>;

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
```

Add the skills component to `app.component.html`:

```html
<div class="content" role="main">
  <app-skills></app-skills>
</div>
```
