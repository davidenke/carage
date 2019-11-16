# carage-car-create



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type         | Default     |
| -------- | --------- | ----------- | ------------ | ----------- |
| `model`  | --        |             | `Model<any>` | `undefined` |


## Events

| Event   | Description | Type                      |
| ------- | ----------- | ------------------------- |
| `close` |             | `CustomEvent<void>`       |
| `save`  |             | `CustomEvent<Model<any>>` |


## Dependencies

### Used by

 - [carage-car](../car)
 - [carage-root](../../layout/root)

### Depends on

- [carage-card](../../ui/card)
- [carage-button](../../ui/button)

### Graph
```mermaid
graph TD;
  carage-editor --> carage-card
  carage-editor --> carage-button
  carage-card --> carage-button
  carage-car --> carage-editor
  carage-root --> carage-editor
  style carage-editor fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
