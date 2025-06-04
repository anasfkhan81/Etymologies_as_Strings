---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Etymologies as strings"
  text: "OntoLex Workshop Demo site"
  tagline: Etymologies as a formal language

features:
  - title: <a href="search-entry">Search by a dictionary entry</a>
    details: Search by a dictionary entry
  - title: <a href="search-etymon">Search by an etymon</a>
    details: Search by an etymon
---

## Show first 5 etymologies

:::form

```json params
{
  "endpoints": [
    "https://raw.githubusercontent.com/anasfkhan81/Etymologies_as_Strings/refs/heads/main/chamuca_hi_lex.ttl"
  ],
  "output": "table",
  "parameters": [
    
  ]
}
```

```sparql
PREFIX lexinfo: <http://www.lexinfo.net/ontology/2.0/lexinfo#>
PREFIX ontolex: <http://www.w3.org/ns/lemon/ontolex#>

SELECT ?word ?etymology
WHERE {
  ?entry a ontolex:LexicalEntry ;
         lexinfo:etymology ?etymology ;
         ontolex:canonicalForm/ontolex:writtenRep ?word .
} LIMIT 5
```
:::form
