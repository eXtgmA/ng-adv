# Configuration Management Options

## Config from Environments Vars

Open project `config-ui` and examine `./src/assets` and `./src/environments`

`env.js` is referenced in `index.html`:
```typescript
(function (window) {
  window["env"] = window["env"] || {};
  window["env"].API_URL = "http://localhost:5001/food";
})(this);
```

`environment.ts` references `window['env']`-variables:
```typescript
declare global {
  interface Window {
    env: any;
  }
}

export const environment = {
  production: false,
  apiUrl: window['env'].API_URL,
};
```

`dockerfile` calls `env.transform.js` to update `env.js` with current environment variables:

```bash
CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
```

`env.transform.js`:
```typescript
(function (window) {
  window["env"] = window["env"] || {};
  window["env"].API_URL = "${ENV_API_URL}";
})(this);
```

Update `index.html` to execute `env.js` to set the default env vars:

![index](_images/index.jpg)

Build image and run container:

```bash
docker build --rm -f Dockerfile -t config-ui .
docker tag config-ui arambazamba/config-ui
docker push arambazamba/config-ui
```

>Note: We will use the `arambazamba/ng-config-env`-image for the rest of this module. Update your Docker Hub username.

Run container:

```bash
docker run -d --rm -p 5052:80 --env ENV_API_URL="https://food-api-staging-4591.azurewebsites.net" config-ui 
http://localhost:5052
```