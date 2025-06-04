# Search by an etymon

:::form

```json params
{
  "endpoints": [
    "https://raw.githubusercontent.com/anasfkhan81/Etymologies_as_Strings/refs/heads/main/chamuca_hi_lex.ttl"
  ],
  "output": "table",
  "parameters": [
    {
      "variable": "etymon",
      "type": "string",
      "label": "Etymon",
      "placeholder": "anisum"
    }
  ]
}
```

```sparql
PREFIX lexinfo: <http://www.lexinfo.net/ontology/2.0/lexinfo#>
PREFIX ontolex: <http://www.w3.org/ns/lemon/ontolex#>

SELECT ?word ?etymology ?type ?lang ?orig ?gloss ?source
WHERE {
  ?entry a ontolex:LexicalEntry ;
         lexinfo:etymology ?etymology ;
         ontolex:canonicalForm/ontolex:writtenRep ?word .
         
  FILTER(REGEX(?etymology, "[ ‘]${etymon}[ ']"))
  BIND(REPLACE(?etymology, "^([a-z-]+) (\\? )?(\\S+) .*", "$1") AS ?lang)
  BIND(REPLACE(?etymology, "^([a-z-]+) (\\? )?(\\S+) .*", "$3") AS ?orig)
  BIND(REPLACE(?etymology, "^([a-z-]+) (\\? )?(\\S+) (‘[^’]+’)?.*", "$4") AS ?gloss)
}
```
:::form

Examples:
<a  href="#"
    onclick="const input = document.getElementsByTagName('input')[0];
            input.value = 'anisum';
            input.dispatchEvent(new Event('input', { bubbles: true }));
            return false;">anisum</a>
&nbsp;
<a  href="#"
onclick="const input = document.getElementsByTagName('input')[0];
input.value = 'lamp';
input.dispatchEvent(new Event('input', { bubbles: true }));
return false;">lamp</a>
