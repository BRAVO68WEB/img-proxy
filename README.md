# Imgage Proxy Server 

```json
url : "https://img-proxy.vercel.app"
```

Proxify any image url, hide it and use anywhere.

## Usage

**GET** https://img-proxy.vercel.app/fetch/image

    Parameters(?) :-
        *key* -> base64encode(image_url)

    Example :- 
        original_url = https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg
        proxified_url = https://img-proxy.vercel.app/fetch/image?key=aHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNS8wNC8yMy8yMi8wMC90cmVlLTczNjg4NV85NjBfNzIwLmpwZw==

## Serverless API