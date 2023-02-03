#! /usr/bin/env ruby

geojson-merge north_africa/*.geojson > ../js/north_africa.geojson
geojson-merge sahel/*.geojson > ../js/sahel.geojson
geojson-merge west_africa/*.geojson > ../js/west_africa.geojson
geojson-merge central_africa/*.geojson > ../js/central_africa.geojson
geojson-merge east_africa/*.geojson > ../js/east_africa.geojson
geojson-merge east_african_islands/*.geojson > ../js/east_african_islands.geojson
geojson-merge southern_africa/*.geojson > ../js/southern_africa.geojson