- Use the Mock Markdown Editor to update a Comment of your choice. Check the `db.json` file in the root of the project if it has been updated. Display of the editor is controlled by `sidepanel.service.ts`

- The mock markdown-editor located in `/shared/markdown-editor` is using actions that are created using createActionGroup and implements effects for editor comments CRUD operations.

- Effects are basically async actions that typically interact with the data store

- Examine the `saveComment` method of the `comment.service.ts`

```javascript
saveComment(item: CommentItem) {
    if (item.id === undefined) {return this.http.post<CommentItem>(this.url, item);} 
    else {return this.http.put<CommentItem>(`${this.url}/${item.id}`, item);}
```

- Examine how it is consumed be the effect implemented in `editor.effects.ts`

- ANotice on how to respond on completed effects in a facade:

```javascript
this.subs = this.actions
  .pipe(
    ofType(
      MarkdownEditorActions.savecommentssuccess,
      MarkdownEditorActions.savecommentsfailure,
      ...
    )
  )
  .subscribe((data) => {
    console.log('action complete', data);
    this.callCompletedSub.next(true);
  });
```

This is used in `editor-container.component.ts` to toggle display of the editor

```javascript
this.ef.callCompleted$.subscribe(() => {
  this.editorEdit = false;
});
```
