# carage-root



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [carage-editor](../../features/editor)
- [carage-cars](../../features/cars)
- [carage-car](../../features/car)
- [carage-button](../../ui/button)

### Graph
```mermaid
graph TD;
  carage-root --> carage-editor
  carage-root --> carage-cars
  carage-root --> carage-car
  carage-root --> carage-button
  carage-editor --> carage-card
  carage-editor --> carage-button
  carage-card --> carage-button
  carage-car --> carage-card
  carage-car --> carage-button
  carage-car --> carage-editor
  style carage-root fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
