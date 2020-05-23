#!/usr/bin/env bash
# Purpose: batch image resizer + quality settings + removes EXIF data (-strip)
# Source: https://guides.wp-bullet.com

# absolute path to image folder
FOLDER="./"

# max width
WIDTH=2560

# max height
HEIGHT=2560

# quality
QUALITY=85

#resize png or jpg to either height or width, keeps proportions using imagemagick
#find ${FOLDER} -iname '*.jpg' -o -iname '*.png' -exec convert \{} -verbose -resize $WIDTHx$HEIGHT\> \{} \;

#resize png to either height or width, keeps proportions using imagemagick
#find ${FOLDER} -iname '*.png' -exec convert \{} -verbose -resize $WIDTHx$HEIGHT\> \{} \;

#resize jpg only to either height or width, keeps proportions using imagemagick
find ${FOLDER} -iname '*.jpg' -exec convert \{} -verbose -quality $QUALITY -strip -resize $WIDTHx$HEIGHT\> \{} \;

# alternative
#mogrify -path ${FOLDER} -resize ${WIDTH}x${HEIGHT}% *.png -verbose
