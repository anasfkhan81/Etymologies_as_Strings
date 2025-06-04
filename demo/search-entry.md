# Search for a specific entry

:::form

```json params
{
  "endpoints": [
    "https://raw.githubusercontent.com/anasfkhan81/Etymologies_as_Strings/refs/heads/main/chamuca_hi_lex.ttl"
  ],
  "output": "table",
  "parameters": [
    {
      "variable": "word",
      "type": "string",
      "label": "Word",
      "placeholder": "anīsun"
    }
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
         
  FILTER(STR(?word)="${word}")
}
```
:::form

Examples:
<a  href="#"
    onclick="const input = document.getElementsByTagName('input')[0]; input.value = 'anīsun';
            input.dispatchEvent(new Event('input', { bubbles: true })); 
            return false;">anīsun</a>
&nbsp;
<a href="#"
    onclick="const input = document.getElementsByTagName('input')[0]; input.value = 'अँग्रेज़'; 
            input.dispatchEvent(new Event('input', { bubbles: true }));
            return false;">अँग्रेज़</a>
