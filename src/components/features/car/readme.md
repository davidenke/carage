# carage-car-detail



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type       | Default     |
| -------- | --------- | ----------- | ---------- | ----------- |
| `model`  | --        |             | `CarModel` | `undefined` |


## Dependencies

### Used by

 - [carage-root](../../layout/root)

### Depends on

- [carage-card](../../ui/card)
- [carage-button](../../ui/button)
- [carage-editor](../editor)

### Graph
```mermaid
graph TD;
  carage-car --> carage-card
  carage-car --> carage-button
  carage-car --> carage-editor
  carage-card --> carage-button
  carage-editor --> carage-card
  carage-editor --> carage-button
  carage-root --> carage-car
  style carage-car fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
