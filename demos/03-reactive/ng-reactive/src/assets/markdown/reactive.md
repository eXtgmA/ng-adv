- Consumes the data stream directly and assigns it to props / vars of type Observable<T>
- Manipulating the data stream using RxJS Operators
- The Component rendering is bound to that props / vars and often uses the Async Pipe

```typescript
skills$ = this.service.getSkills().pipe(
    combineLatestWith(this.filter$.valueChanges.pipe(startWith(''))),
    map(([skills, filter]) => {
      return filter == ''
        ? skills
        : skills.filter((skill: Skill) => skill.name.includes(filter));
    })
  );
```
