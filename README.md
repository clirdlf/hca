# README

## Map

Map geojson is from [Cartography Vectors](https://cartographyvectors.com/). 

These are individual files and combined in regions with [geojson-merge](https://github.com/mapbox/geojson-merge).

```
$ npm install -g @mapbox/geojson-merge
$ geojson-merge file.geojson otherfile.geojson > combined.geojson
```

Remember to set a region label for the combined data.