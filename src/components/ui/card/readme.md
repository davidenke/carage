# carage-card



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type      | Default |
| ---------- | ---------- | ----------- | --------- | ------- |
| `closable` | `closable` |             | `boolean` | `false` |


## Events

| Event   | Description | Type                |
| ------- | ----------- | ------------------- |
| `close` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [carage-car](../../features/car)
 - [carage-editor](../../features/editor)

### Depends on

- [carage-button](../button)

### Graph
```mermaid
graph TD;
  carage-card --> carage-button
  carage-car --> carage-card
  carage-editor --> carage-card
  style carage-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
