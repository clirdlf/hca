# README

## Linear Gradient

<https://hypercolor.dev/generator>

linear-gradient(to right, rgb(185, 28, 28), rgb(234, 179, 8), rgb(21, 128, 61))

## Map

### BaseMap

StamenMap base tiles are getting migrated to StadiaMaps <https://maps.stamen.com/stadia-partnership/>. The tiles were updated with <https://docs.stadiamaps.com/guides/migrating-from-stamen-map-tiles/>.

Map geojson is from [Cartography Vectors](https://cartographyvectors.com/). 

These are individual files and combined in regions with [geojson-merge](https://github.com/mapbox/geojson-merge).

```
$ npm install -g @mapbox/geojson-merge
$ geojson-merge file.geojson otherfile.geojson > combined.geojson
```

Remember to set a region label for the combined data.

https://docs.google.com/presentation/d/1Tuu63rpX-oLW08p_5uwDf3p7yPBJ1ZLn/edit#slide=id.p1


